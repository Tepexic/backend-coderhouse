const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res, next) => {
  res.send("<h1>Hola mundo</h1>");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
server.on("error", (error) => console.error(error));
