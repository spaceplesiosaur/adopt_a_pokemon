//this file is generated with knex, 
exports.up = function(knex) {
  return knex.schema
    .createTable('natures', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('good');
      table.string('bad');

      table.timestamps(true, true);
    })
    .createTable('pokemon', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('nature_id').unsigned()
      table.foreign('nature_id')
        .references('natures.id');

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('pokemon')
    .dropTable('natures')
};
