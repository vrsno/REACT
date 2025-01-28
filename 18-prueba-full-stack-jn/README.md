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
