const express = require("express");
const PORT = 8080;

const server = express();

// middleware
//server.use(express.json());
//server.use(express.urlencoded({ encoded: true }));
//server.use("/static", express.static("public")); // /static es ruta virtual, no existe realmente

// Ahora necesitamos indicarle a express que “views” será nuestro directorio de plantillas.
// Y también indicar cuál será el motor de plantillas que se utilizará (en este caso Pug JS). Lo configuramos con:
server.set("views", "./views");
server.set("view engine", "pug");
server.set("view engine", "ejs");

server.get("/hello", (req, res) => {
  res.render("hello.pug", {
    mensaje: "usando pug en express",
    descripcion: "pug es la raza de un perro feo",
  });
});

server.get("/", (req, res) => {
  res.render("pages/index");
});

server.get("/datos", (req, res) => {
  res.render("pages/datos", {
    min: req.query.min,
    nivel: req.query.nivel,
    max: req.query.max,
    titulo: req.query.titulo,
  });
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en ${PORT}`);
});
server.on("error", (err) => {
  console.error(err);
});
