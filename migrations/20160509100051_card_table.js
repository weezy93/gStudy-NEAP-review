
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments('id').primary();
    table.integer('deck_id').references('id').inTable('decks');
    table.text('question');
    table.text('answer');
    table.integer('score');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
