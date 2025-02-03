// dotenv.test.js
import { test } from "node:test";
import assert from "node:assert";
import { writeFileSync, unlinkSync } from "node:fs";
import { config } from "../dotenv.js";

test("Carga las variables de entorno desde el archivo .env", (t) => {
  // Ruta y contenido del archivo temporal .env
  const tempEnvPath = "../temp.env";
  const envContent = `DB_HOST='localhost'
PORT=1234
API_KEY="akinosehacenada=.plitdmasopdmoasdol"`;

  // Crear el archivo .env temporal
  writeFileSync(tempEnvPath, envContent, "utf-8");

  // Limpiar las variables de entorno previas (si existen)
  delete process.env.DB_HOST;
  delete process.env.PORT;
  delete process.env.API_KEY;

  // Ejecutar la función config para cargar las variables del archivo
  config({ path: tempEnvPath });

  // Verificar que las variables se hayan cargado correctamente
  // Nota: el valor de DB_HOST conserva las comillas simples,
  // ya que el código actual solo remueve comillas dobles.
  assert.strictEqual(process.env.DB_HOST, "localhost");
  assert.strictEqual(process.env.PORT, "1234");
  assert.strictEqual(
    process.env.API_KEY,
    "akinosehacenada=.plitdmasopdmoasdol"
  );

  // Eliminar el archivo temporal
  unlinkSync(tempEnvPath);
});
