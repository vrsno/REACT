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

5- escribe una funcion `delay` que retorne una promesa que se resuelva despues de `n` milisegundos.
por ejemplo:

```javascript
export async function delay ({
  ///
})

delay(3000).then(()=> console.log('hola mundo'))
// o

await delay(3000)
console.log('Hola mundo')
```

6- vamos a nuestra propia utilidad `dotenv` en el archivo `dotenv.js`

- la utilidad debe devolver un metodo `config` que lee el archivo `.env` y añade las variables de entorno qye haya en el archivo al objeto `process.env`
- por ejemplo si tu archivo `.env` contiene:

```sh
PORT=8000
TOKEN='1223abc'
```

entonces podriamos hacer esto:

```javascript
const dotenv = require("./dotenv.js");
dotenv.config();

console.log(process.env.PORT); // 8000
console.log(process.env.TOKEN); // 123abc
```

tambien se le puede pasar el pásh del archivo `.env` como parametro

```javascript
const dotenv = require("./dotenv.js");
dotenv.config("./config/.env.local");
```

cosas a tener en cuenta

- solo se permite usar el modulo `fs` para leer el archivo
- si el archivo no existe, se debe dar error, simplemente no hace nada.
- si el archivo existe, pero no tiene ninguna variable de entorno, no debe hacer nada
- solo debe soportar `.env` o el que se le pasa como parametro, no hace falta soporte `.env.local`, `.env.development` y similares de forma automatica.
- las variables de entorno siempre son strings, por lo que si en el archivo `.env` hay un numero, por ejemplo `PORT=8000`, al leerlo con `fs` y añadirlo a `process.env` debe ser un string, no un numero

- `process.env` es un objeto y, por lo tanto, es mutable. esto significa que podemos añadir propiedades nuevas sin problemas.
