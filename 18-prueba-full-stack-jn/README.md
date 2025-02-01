Escribe las soluciones en el archivo `solutions/index.js` manteniendo el nombre de las funciones y sus `export`. Usa `EsModules` en tu proyecto de Node.js

1- arregla esta funcion par que le codigo posterior funcione como se espera:

```javascript
import net from "node:net";

export const ping = (ip) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    return { time: process.hrtime(startTime), ip };
  });

  client.on("error", (err) => {
    throw err;
    client.end();
  });

  ping("midu.dev", (err, info) => {
    if (err) console.log(err);
    console.log(info);
  });
};
```

2- transforma la siguiente funcion para que funcione con promesas en lugar de callbacks

```javascript
export function obtenerDatosPersonales(callback) {
    setTimeout(()=>{
        callback(null: {data: 'datos importantes'})
    }, 2000)
}

```

3- explica ue hace la funcion. Identifica y corrige los errores en el siguiente codigo. Si vez algo innecesario, eliminalo. Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.

```javascript
export function procesarArchivo() {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      return false;
    }

    setTimeout(() => {
      const textoProcesado = contenido.toUpperCase();

      fs.readFile("output.txt", textoProcesado, (error) => {
        if (error) {
          console.error("error guardando archivo:", error.message);
          return false;
        }

        console.log("archivo procesado y guardado con exito");
        return true;
      });
    }, 1000);
  });
}
```

4- ¿como mejorarias el siguiente codigo y porque? Arregla los test si es necesario

```javascript
import fs from "node:fs";

export function leerArchivos() {
  const archivo1 = fs.readSync("archivo1.txt", "utf8");
  const archivo2 = fs.readSync("archivo1.txt", "utf8");
  const archivo3 = fs.readSync("archivo1.txt", "utf8");

  return `${archivo1} ${archivo2} ${archivo3}`;
}
leerArchivos();
```
