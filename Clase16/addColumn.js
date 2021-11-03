const { options } = require("./options/mysql");
const knex = require("knex")(options);

knex.schema
  .table("cars", (table) => {
    table.integer("price");
  })
  .then(() => {
    console.log("Inserted!");
  })
  .catch((err) => {
    console.error(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
