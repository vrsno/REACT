import net from "node:net";
import fs from "node:fs"; // file system --> fs
import fsp from "node:fs/promises";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    // return { time: process.hrtime(startTime), ip };
    callback(null, { time: process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    client.end();
    callback(err);
    //throw err; no sirve
  });
};

// ping("miguel.dev", (err, info) => {
//   if (err) console.log(err);
//   else console.log(info);
// });

//EJERCICIO 2

export function obtenerDatosPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "datos importantes" });
    }, 1000);
  });
}

// Promise.then()
// obtenerDatosPromise()
//   .then((info) => {
//     console.log(info); // { data: "datos importantes" }
//   })
//   .catch((err) => {
//     console.error(err); // Si ocurre un error (no es el caso aquí).
//   });

// //await

// try {
//   const { info } = await obtenerDatosPromise();
//   console.log(info);
// } catch (error) {
//   console.error(error);
// }

//7 ejercicio 3

export function procesarArchivo(callback) {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      callback(error);
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile("output.txt", textoProcesado, (error) => {
      if (error) {
        console.error("error guardando archivo:", error.message);
        callback(error);
      }

      console.log("archivo procesado y guardado con exito");
      callback(null);
    });
  });
}

// procesarArchivo(() => {
//   console.log("esto ya funciona!!!");
// });

export async function procesarArchivoPromise() {
  try {
    const contenido = await fs.promises.readFile("input.txt", "utf8");
    const textoProcesado = contenido.toUpperCase();
    await fs.promises.writeFile("output.txt", textoProcesado);
    console.log("Archivo procesado y guardado con éxito");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//procesarArchivo().then(() => console.log("¡Esto ya funciona!"));

// ejercicio 4

export async function leerArchivos() {
  console.time("leerArchivos");
  // en paralelo osea al mismo tiempo
  // en cuanto mas pesen los archivos mejora el rendimiento
  // si falla alguna promesa muestra undefined
  const [archivo1, archivo2, archivo3] = await Promise.allSettled([
    fsp.readFile("archivo1.txt", "utf8"),
    fsp.readFile("archivo2.txt", "utf8"),
    fsp.readFile("archivo3.txt", "utf8"),
  ]);
  console.log(archivo1);

  // funciona en orden
  // const archivo1 = await fs.promises.readFile("archivo1.txt", "utf8");
  // const archivo2 = await fs.promises.readFile("archivo2.txt", "utf8");
  // const archivo3 = await fs.promises.readFile("archivo3.txt", "utf8");
  console.timeEnd("leerArchivos");
  console.log(`${archivo1.value} ${archivo2.value} ${archivo3.value}`);

  return `${archivo1.value} ${archivo2.value} ${archivo3.value}`;
}
// leerArchivos();
