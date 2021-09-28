const express = require("express");
const app = express();
const PORT = 3000;

const frase = "Hola mundo como están";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/frase", (req, res, next) => {
  res.json({ data: frase });
});

app.get("/api/letras/:num", (req, res, next) => {
  const n = isNaN(req.params.num) ? null : req.params.num;
  if (n !== null) {
    const letra = frase.split("")[n];
    res.json({ letra: letra ? letra.trim() : null });
  } else {
    res.json({ letra: null });
  }
});

app.get("/api/palabras/:num", (req, res, next) => {
  const n = isNaN(req.params.num) ? null : req.params.num;
  if (n !== null) {
    const palabra = frase.split(" ")[n];
    res.json({ palabra: palabra ? palabra : null });
  } else {
    res.json({ palabra: null });
  }
});

app.get("/api/sumar/:num1/:num2", (req, res, next) => {
  res.json({
    resultado: parseInt(req.params.num1) + parseInt(req.params.num2),
  });
});

app.get("/api/operacion/:operacion", (req, res, next) => {
  req.params.operacion;
  res.json({ resultado: parseInt(req.query.num1) + parseInt(req.query.num2) });
});

app.post("/api", (req, res, next) => {
  res.json({ resultado: "Ok - POST" });
});
app.put("/api", (req, res, next) => {
  res.json({ resultado: "Ok - PUT" });
});
app.delete("/api", (req, res, next) => {
  res.json({ resultado: "Ok - DELETE" });
});

const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

server.on("error", (error) => console.error(error));
