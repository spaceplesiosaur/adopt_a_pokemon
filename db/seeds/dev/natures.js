const naturesData = require('../../../naturesData');
const pokemonsData = require('../../../pokemonsData');
//these are pulling in the data sets from their respective files.  In this case I made the data small and easy to use, but sometimes you will probably be dealing with fetches and data cleaning.

//A note about knex:  When you run knex seed:run in the terminal, it searches your app for something exported called seed - if you named everything correctly, PokePairs will find this file.  When it finds the seed, it knows that the first argument in it should be the knex query builder (an object/function) , which will allow it to run the knex seed methods. (I'm guessing it's looking for the first argument because looking for something explicitly called knex would be a pain for everyone)

const createNatures = async (knex, nature) => {
//Here I am creating a function that will run each time the nature data is mapped through.  Since knex returns promises, I need to make it async.

//It takes two arguments.  Knex, and a variable representing the item at whatever index the loop is on when this function is added to it.

  const natureId = await knex('natures').insert({
    // knex of natures connects to the natures table that has been built - we aren't changing the table's shape here, just what's in it.

    //this is where we actually fill our table with data from each item in the array.  .insert is the method we use to add data to a table - it takes two arguments.  The first is what you're inserting, which is an object with the keys in the kv pairs being column names for the table, and the values being data taken out of the data set.  The second argument is the columns you want back.

    //knex('natures') is referring to the table 'natures' we defined in the migration file.

    //each nature object has a name, a good value, and a bad value.

    name: nature.name,
    good: nature.good,
    bad: nature.bad
  }, 'id');
 //Each nature object also will be given an id - this is part of what's happening in the migration file when we use the incrementor method. The id is a second argument in insert - we are telling the insert method which column NAME has the VALUE we want it to return at the end.  It returns as an array (you might be wanting the values of multiple columns, in which case the second argument would be put in as an array)

  const pokemonList = pokemonsData.results.filter(poke => {
  //nature to pokemon is a one to many relationship.  Each nature has several pokemon assigned to it, but each pokemon has one nature.  This means that for each nature object in the map, I can isolate the pokemon that use it and make a filtered array.
    return poke.nature === nature.name
  //if a pokemon's nature in the dataset matches the nature currently in the loop, it is returned,
  })

  let pokePromises = pokemonList.map(poke => {
  //next, we populate the pokemon table with the group of pokemon that use the nature being mapped over to create the nature table.  This means that each time a row is filled with a nature, 3 or 4 pokemon table rows will be filled.  Since there are many, we want them to return at the same time.  Otherwise, the nature data might move onto a new index before the pokemon data is filled in and pokemon could be dropped.
    return knex('pokemon').insert({
      //we use the same .insert method as before - knex takes the table name as an argument, and .insert takes an object with keys that match the table column names as a value.
      name: poke.name,
      nature_id: natureId[0]
      //the nature id was returned as an array, but there is only one value.  We can be confident that what nature id returns is a single object array, so it's 0 index will be the nature id we want here to go with the pokemon that use that nature.
    })
  })

  return Promise.all(pokePromises);
  //now we return the Promise.all.  Promise.all needs to be told when to try and resolve of the things it has promised to do.
};

exports.seed = async (knex) => {
  //now that we have a function to run when we map over naturesData to add it to the tables, we can actually seed the tables.  Exports.seed tells knex that this is the seed file it's looking for when we run knex seed:run.  Again, it takes the knex object/function as an argument and needs to be async because knex returns promises.
  try {
    //try is our promise's happy path
    await knex('pokemon').del()
    await knex('natures').del()
    //we need to clear out anything in the tables before we seed it, otherwise we might have overlapping data.  .del() is the knex method that clears tables
    let naturePromises = naturesData.results.map(nature => {
      return createNatures(knex, nature);
    });
    //again, knex returns promises, so as we map through the nature data, each idex in the map is going to return a promise to fill a row in the nature table (and the pokemon table that depends on it).  Since we wrote the createNatures function above, we can just call it with knex and the actual mapped item here.

    return Promise.all(naturePromises);
    //again, since the mapped array is actually an array of promises, we need them to all return at the same time.  So we use a promise all, and that is ultimately what is returned from the happy path here.  This is the last function being run in the happy path, so we don't need to chain anything to the promise.all, it will just resolve whenever it does.
  } catch (error) {
    //this is the catch if there is an error in the exports.seed function - it will only run if there is a server error (500 or up)
    console.log(`Error seeding data: ${error}`)
  }
};
