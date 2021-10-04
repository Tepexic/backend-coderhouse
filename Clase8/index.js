const express = require("express");
const PORT = 8080;

const personas = require("./routes/personas");

const server = express();

// middleware
server.use(express.json());
server.use(express.urlencoded({ encoded: true }));
server.use("/static", express.static("public")); // /static es ruta virtual, no existe realmente

// Usar rutas
server.use("/api/personas/", personas);

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
