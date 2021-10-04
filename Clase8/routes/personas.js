const express = require("express");
const { Router } = express;

const Contenedor = require("./../../Clase3/Contenedor/Contenedor");
const Personas = new Contenedor("./routes/data/personas.json");

const personasRouter = Router();

personasRouter.get("/", async (req, res) => {
  const personas = await Personas.getAll();
  res.json(personas);
});

personasRouter.post("/", async (req, res) => {
  const personaNueva = req.body;
  await Personas.save(personaNueva);
  res.send({
    message: "success",
    data: personaNueva,
  });
});

module.exports = personasRouter;
