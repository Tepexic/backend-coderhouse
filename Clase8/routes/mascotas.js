const express = require("express");
const { Router } = express;

const Contenedor = require("./../../Clase3/Contenedor/Contenedor");
const Mascotas = new Contenedor("./routes/data/Mascotas.json");

const mascotasRouter = Router();

mascotasRouter.get("/", async (req, res) => {
  const mascotas = await Mascotas.getAll();
  res.json(mascotas);
});

mascotasRouter.post("/", async (req, res) => {
  const mascotaNueva = req.body;
  const newId = await Mascotas.save(mascotaNueva);
  res.send({
    message: "success",
    id: newId,
    data: mascotaNueva,
  });
});

module.exports = mascotasRouter;
