
exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', function (table) {
    table.increments('id').unique().primary();
    table.string('name');
    table.text('description');
    table.integer('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('decks');
};
