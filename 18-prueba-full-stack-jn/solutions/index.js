import { log } from "node:console";
import net from "node:net";

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
