const { options } = require("./options/mysql");
const knex = require("knex")(options);

knex.schema
  .createTable("cars", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("year");
  })
  .then(() => {
    console.log("Table created!");
  })
  .catch((err) => {
    console.error(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
