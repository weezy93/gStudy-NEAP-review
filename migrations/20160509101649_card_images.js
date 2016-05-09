
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
    table.text('question_image');
    table.text('answer_image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
    table.dropColumn('question_image');
    table.dropColumn('answer_image');
  });
};
