const Contenedor = require("./../Clase3/Contenedor/Contenedor");
const Personas = new Contenedor("./routes/data/personas.json");

Personas.save({ nombre: "Pedr", apellido: "Paramo", edad: 34 });
