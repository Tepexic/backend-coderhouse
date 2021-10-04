const express = require("express");
const PORT = 8080;

const server = express();

// middleware
server.use("/static", express.static("public")); // /static es ruta virtual, no existe realmente

server.get("/", (req, res) => {
  console.log("ok");
  res.send("ok");
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
server.on("error", (err) => {
  console.error(err);
});
