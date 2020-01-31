const express = require('express');
const app = express();

// app.use(express.static('public'))
// app.use(cors());

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Pokemon Pairs';
app.use(express.json())

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

app.post('/api/v1/natures', async (request, response) => {
  const nature = request.body;
  console.log('nature', request)
  for (let requiredParameter of ['name', 'good', 'bad']) {
    if (!nature[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `The expected format is: { name: <String>, good: <String>, bad: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  try {
    const id = await database('natures').insert(nature, 'id');
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.post('/api/v1/pokemon', async (request, response) => {
  const pokemon = request.body;
  for (let requiredParameter of ['name', 'nature_id']) {
    if (!pokemon[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `The expected format is: { name: <String>, nature: <Integer> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  try {
    const id = await database('pokemon').insert(pokemon, 'id');
    response.status(201).json({ id })
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.delete('/api/v1/pokemon/:id', async (request, response) => {

  const pokemon = await database('pokemon').where('id', request.params.id).select();

  if(!pokemon) {
    return response.status(404).json({error: "unable to find that pokemon"})
  }
  try {
    await database('pokemon').where('id', request.params.id).del();
    response.status(204).json("good job it's gone")
  } catch (error) {
    response.status(500).json({ error });
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
