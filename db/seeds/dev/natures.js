const naturesData = require('../../../papersData');

exports.seed = async function (knex) {
  try {
    await knex('natures').del() // delete all footnotes first
    await knex('pokemon').del() // delete all papers

    // Now that we have a clean slate, we can re-insert our paper data
    // Insert a single paper, return the paper ID, insert 2 footnotes
    const naturesId = await knex('natures').insert({
      name: 'Fooo', good: 'Yay', bad: 'Argh'
    }, 'id')
    return knex('pokemon').insert([
      { name: 'Lorem', nature_id: naturesId[0] },
      { name: 'Dolor', nature_id: naturesId[0] }
    ])
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
}




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
