/**
 * Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
Entre las 13 y las 19 hs será 'Buenas tardes!'. 
De 20 a 5 hs será 'Buenas noches!'.
 */
const http = require("http");
const server = http.createServer((peticion, respuesta) => {
  const currentTime = new Date().getHours();
  if (currentTime >= 6 && currentTime <= 12) {
    respuesta.end("Buenos días");
  } else if (currentTime >= 13 && currentTime <= 19) {
    respuesta.end("Buenas tardes");
  } else {
    respuesta.end("Buenas noches");
  }
});

const connectedServer = server.listen("8080", () => {
  console.log(`Servidor activo en el puerto ${connectedServer.address().port}`);
});
