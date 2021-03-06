const { options } = require("./options/mysql");
const knex = require("knex")(options);

const cars = [
  { name: "Audi", price: 52642 },
  // { name: "Mercedez", price: 57127 },
  // { name: "Skoda", price: 9000 },
  // { name: "Volvo", price: 29000 },
  // { name: "Bentley", price: 350000 },
  // { name: "Hummer", price: 41400 },
  // { name: "Volkswagen", price: 21600 },
];

knex("cars")
  .insert(cars)
  .then((result) => {
    console.log(result);
    console.log("Inserted!");
  })
  .catch((err) => {
    console.error(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
