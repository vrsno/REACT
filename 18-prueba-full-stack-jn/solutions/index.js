import net from "node:net";
import fs from "node:fs"; // file system --> fs

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

//7 ejercico 3

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

//
