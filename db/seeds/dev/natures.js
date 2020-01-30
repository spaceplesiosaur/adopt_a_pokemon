const naturesData = require('../../../naturesData');
const pokemonsData = require('../../../pokemonsData');


const createNatures = async (knex, nature) => {
  const natureId = await knex('natures').insert({
    name: nature.name,
    good: nature.good,
    bad: nature.bad
  }, 'id');

  const pokemonList = pokemonsData.results.filter(poke => {
    return poke.nature === nature.name
  })

  let pokePromises = pokemonList.map(poke => {
    return knex('pokemon').insert({
      name: poke.name,
      nature_id: natureId[0]
    })
  })

  return Promise.all(pokePromises);
};

exports.seed = async (knex) => {
  try {
    await knex('pokemon').del()
    await knex('natures').del()

    let naturePromises = naturesData.results.map(nature => {
      return createNatures(knex, nature);
    });

    return Promise.all(naturePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

// exports.seed = async function (knex) {
//   try {
//     await knex('natures').del() // delete all footnotes first
//     await knex('pokemon').del() // delete all papers
//
//     // Now that we have a clean slate, we can re-insert our paper data
//     // Insert a single paper, return the paper ID, insert 2 footnotes
//     const naturesId = await knex('natures').insert({
//       name: 'Fooo', good: 'Yay', bad: 'Argh'
//     }, 'id')
//     return knex('pokemon').insert([
//       { name: 'Lorem', nature_id: naturesId[0] },
//       { name: 'Dolor', nature_id: naturesId[0] }
//     ])
//   } catch (error) {
//     console.log(`Error seeding data: ${error}`);
//   }
// }




// exports.seed = async function (knex) {
//   try {
//     await knex('natures').del() // delete all footnotes first
//     await knex('pokemon').del() // delete all papers
//
//     // Now that we have a clean slate, we can re-insert our paper data
//     // Insert a single paper, return the paper ID, insert 2 footnotes
//     const naturesId = await knex('natures').insert({
//       name: 'Fooo', good: 'Yay', bad: 'Argh'
//     }, 'id')
//     return knex('pokemon').insert([
//       { name: 'Lorem', nature_id: naturesId[0] },
//       { name: 'Dolor', nature_id: naturesId[0] }
//     ])
//   } catch (error) {
//     console.log(`Error seeding data: ${error}`);
//   }
// }
