//this database itself is generated CREATE DATABASE, which is a command in the PostGreSQL library.  This database is called pokepairs.  This file, however, is not.  It is generated when we tell knex to make an initial migration with
//knex migrate:make initial

//important note from the docs: The heart of the library, the knex query builder is the interface used for building and executing standard SQL queries, such as select, insert, update, delete.

//The query builder starts off either by specifying a tableName you wish to query against, or by calling any method directly on the knex object. This kicks off a jQuery-like chain, with which you can call additional query builder methods as needed to construct the query, eventually calling any of the interface methods, to either convert toString, or execute the query with a promise, callback, or stream.

//end note from the docs.

//My notes: When you run a knex migration in the terminal, it searches your app for something exported called up (or down, if you're doing a rollback).  When it finds the 'up' from the right migration, it knows that the first argument in it should be the knex object/function, which will allow it to run the knex seed methods.

exports.up = function(knex) {
// 'up' is what knex knows to look for when you do knex migrate:latest. Up is how we tell knex what changes to make when this migration runs.  In this case, we are making two tables - natures and pokemon.

//it is putting knex query builder in as an argument and returning knex.schema, the database builder interface, which we then get to to call methods off of.
  return knex.schema
  //According to the docs, the knex.schema is a getter function, which returns a stateful object containing the query. A stateful object is an INSTANCE of a class. Therefore be sure to obtain a new instance of the knex.schema for every query. The methods on these instances return promises.
    .createTable('natures', function (table) {
  //createTable is a .schema method that takes a table name that it will make for the PostGres db we made (remember, we created pokepairs with CREATE DATABASE in terminal at the beginning of all this), and a callback function that then takes 'table' in the first argument.  'table' is an object from the knex object/function that gets bound to the table being made and basically turns it into/represents it as a knex stateful table object with all of the schema builder functions available to it.

  //it knows to put 'natures' in our postgres db pokepairs because in the knex setup we told it to use postgres as the client.

      table.increments('id').primary();
      //.increments adds an auto incrementing column, according to the docs. In PostgreSQL this is a serial and will be used as the primary key for the table.
      table.string('name');
      //.string creates a string column by the name given to it as an argument.
      table.string('good');
      table.string('bad');

      table.timestamps(true, true);
      //from the docs: Adds a timestamp column. PostgreSQL by defailt creates columns with timezone.  The true, true arguments are in response to the arguments that the timestamps method is looking for.  The first true is telling it to use timestamps and the second is defaulting those timestamps to now.
    })
    .createTable('pokemon', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.integer('nature_id').unsigned()
      //.integer is creating a column that expects integers as its value.  The .unsigned is making sure they are not negative numbers - unsigned means no - or +.
      table.foreign('nature_id')
      //this is how we connect tables.  Here, we specifying that our newly created nature_id column's value is not only an integer, but it is a foreign key.  It is an integer that represents a value on another table.
        .references('natures.id');
        //this is where we specify what the foreign key represents.  'natures' is the table we already created, and .id is the id column.
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
//sometimes we need to roll back a migration.  This is where we tell knex what to do when we want to roll this one back - basically we are deleting the tables we made to go the with posgres databases we picked.  I think the databases will still be there.
  return knex.schema
    .dropTable('pokemon')
    //we need to delete 'pokemon' first because it has a column whose values depend on the 'natures' table.  If we delete 'natures' first, the pokemon table will freak out when it can't find its data and will probably be harder to delete.
    .dropTable('natures')
};
