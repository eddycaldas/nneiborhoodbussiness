
exports.up = function(knex, Promise) {
  return knex.schema.createTable("business", function (table) {
    table.increments()
    table.text("name")
    table.text("address")
    table.string("number")
    table.text("website")
    table.text("category")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("business")
};
