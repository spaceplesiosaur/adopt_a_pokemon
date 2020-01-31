const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Pairs';

app.get('/api/v1/natures', async (request, response) => {
  try {
    const natures = await database('natures').select();
    response.status(200).json(natures);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/pokemon', async (request, response) => {
  try {
    const pokemon = await database('pokemon').select();
    response.status(200).json(pokemon);
  } catch(error) {
    response.status(500).json({ error });
  }
});


app.get('/api/v1/pokemon/:id', async (request, response) => {
  console.log(request.params.id)
  try {
    const pokemon = await database('pokemon').where('id', request.params.id).select();
    console.log('pokemon', pokemon)

    if(!pokemon.length) {
      return response.status(404).json({error: "unable to find that pokemon"})
    }
    response.status(200).json(pokemon)
  } catch(error) {
    response.status(500).json({ error });
  }

});

app.get('/api/v1/natures/:id', async (request, response) => {
  console.log(request.params.id)
  try {
    const nature = await database('natures').where('id', request.params.id).select();
    console.log('natures', nature)

    if(!nature.length) {
      return response.status(404).json({error: "unable to find that nature"})
    }
    response.status(200).json(nature)
  } catch(error) {
    response.status(500).json({ error });
  }

});

// app.post('/api/v1/papers', async (request, response) => {
//   const paper = request.body;
//
//   for (let requiredParameter of ['title', 'author']) {
//     if (!paper[requiredParameter]) {
//       return response
//         .status(422)
//         .send({ error: `Expected format: { title: <String>, author: <String> }. You're missing a "${requiredParameter}" property.` });
//     }
//   }
//
//   try {
//     const id = await database('papers').insert(paper, 'id');
//     response.status(201).json({ id })
//   } catch (error) {
//     response.status(500).json({ error });
//   }
// });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
