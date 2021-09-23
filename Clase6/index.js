const http = require("http");
/*
La función callback que enviamos a createServer() recibe dos parámetros que son la petición y la respuesta. 
La petición por ahora no la usamos, pero contiene datos de la petición realizada.
La respuesta la usaremos para enviarle datos al cliente que hizo la petición. 
De modo que "respuesta.end()" sirve para terminar la petición y enviarle datos al cliente.
*/
const server = http.createServer((peticion, respuesta) => {
  respuesta.end("Respuesta");
});

const connectedServer = server.listen("8080", () => {
  console.log(`Servidor activo en el puerto ${connectedServer.address().port}`);
});
