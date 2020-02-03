const express = require('express');
//this is where we are basically importing express from node_modules - import is a Babel thing, Node.js uses require instead.
const app = express();
//Here we are setting the express middleware functionality to the constant app - anytime we call app, we are actually calling and running express.

//this is a builder function, like knex.schema - when we run express(), it actually returns an instance of the stateful object express which we can then call methods off of.  Just to note, when we call methods like GET we are also telling 'app' what do do when that type of request needs to be handled.

const environment = process.env.NODE_ENV || 'development';

//process is a free magic global (think 'window' and 'document') that you get when you run through node.  It has properties such as env (environment) and will know what NODE_ENV is if we're running this with node or nodemon in the terminal.  We're basically telling it to run on development in the knexfile if it isn't getting fed another environment from Heroku or something.

const configuration = require('./knexfile')[environment];
//this is where the app searches in the knexfile file for the environment that was defined for it.
const database = require('knex')(configuration);
//and this is where we basically import knex, which takes an argument, and that argument is the object in its file that matches the configuration we want to run right now.  This is the part where we tell knex to look at its file to get the info it needs to run the app.

app.set('port', process.env.PORT || 3000);
//set is a method on app (which is an instance of a stateful object express created).  We give it 'port', and then we call the magic global process again to see if it has a port defined.  If it doesn't, we tell it to run on 3000.

//HOW HOW HOW

app.locals.title = 'Pokemon Pairs';
//Here I'm just storing the title locally, I don't think this is actually doing anything for this particular app because I'm pulling all of the other data from knex.

//Edit, it's there for the .listen method.

app.use(express.json())
//this is telling the app to parse responses into .json by default.  .use is a method on the express stateful object.

app.get('/api/v1/natures', async (request, response) => {
  //express knows what to do with GET.  It knows it is supposed to return some data.  Problem is, we need to tell it what to return, which we will feed to it as arguments.

  //the first argument is an endpoint, and the second argument is telling it what to do when someone hits that endpoint with a get request.
//the second argument, an async callback, takes the request (what the client put in) as its first argument, and the response object that a promise puts out automatically as its second.  It takes time to look at a request and generate a response, so this is async.
  try {
    //try is how we're telling the promise what to resolve to if all goes well.
    const natures = await database('natures').select();
    //select is a knex method.  database is referring to knex, and we feed it the particular table we want it to look at as the argument.  We're basically telling the database to select that table and then we assign it to a variable.  (As a note, select() actually comes from SQL.  If we don't specify, it will just grab everything in the database)
    if(!natures.length) {
      return response.status(404).json({error: "unable to find any natures"})
    }
    //the only error I'm allowing for is if no natures at all come back, so before the response is returned with a success, the app checks to see if if there is in fact an array being assigned to 'natures' and that it in fact has things in it.  If it doesn't, I have it response with a 404 saying that the data was not found.
    response.status(200).json(natures);
    //the promise puts out a response object - here we're telling the try path to spit out a 200 status as the response if it's successful, and to return a jsonify'd natures database.  Since there's an await on the function that gets the natures from the database, it won't run this until it's done.
  } catch(error) {
    response.status(500).json({ error });
    //if a promise fails it is given an error object - here, we are telling the response to give us back a 500 status and to give us a jsonify'd version of the error so that we can see it
  }
});

//see above, the below function behaves the same way as the natures endpoint.
app.get('/api/v1/pokemon', async (request, response) => {
  try {
    const pokemon = await database('pokemon').select();
    if(!pokemon.length) {
      return response.status(404).json({error: "unable to find any pokemon"})
    }
    response.status(200).json(pokemon);
  } catch(error) {
    response.status(500).json({ error });
  }
});
//see above, the above function behaves the same way as the natures endpoint.

app.get('/api/v1/pokemon/:id', async (request, response) => {
  //This is where we tell the server what to respond with when the request comes from an endpoint with a specific id.  In this case, it is the pokemon endpoint.
  //Each pokemon was given an id when the table was built, so that is waht we will be looking at.
  try {
    //Again, try is how we denote a promise's happy path, and GET functions as a promise.

    const pokemon = await database('pokemon').where('id', request.params.id).select();
    //again, database is referring to the knex database we built, and the 'pokemon' argument it telling it which table to look at.  We then add an additional knex method, .where, which tells it which row to look at.
    //It takes two arguments - the name of the column it's supposed to look at for reference, and the value that it's supposed to look at in the column.
    //it then takes that value and delivers us the data in that row as an object when we run the select() method.
    //we are awaiting this function, so nothing will run until it is finished.
    if(!pokemon) {
      return response.status(404).json({error: "unable to find that pokemon"})
    }
    //here I'm checking to see that what was was returned is present.  If it isn't, I know that there was something wrong with the client's request and the response will carry out the sad path instead of giving a false happy.
    response.status(200).json(pokemon)
    //this is our happy path - a successful status code and the pokemon that the use requested
  } catch(error) {
    response.status(500).json({ error });
      //again, if a promise fails it is given an error object - here, we are telling the response to give us back a 500 status and to give us a jsonify'd version of the error so that we can see it
  }

});

//see above, the below function behaves the same way as the specific pokemon endpoint.
app.get('/api/v1/natures/:id', async (request, response) => {
  try {
    const nature = await database('natures').where('id', request.params.id).select();

    if(!nature) {
      return response.status(404).json({error: "unable to find that nature"})
    }
    response.status(200).json(nature)
  } catch(error) {
    response.status(500).json({ error });
  }

});
//see above, the above function behaves the same way as the specific pokemon endpoint.

app.post('/api/v1/natures', async (request, response) => {
  //Here we are telling the server what to do when a post request is made.  POST is used as a method on the express() instance, and it takes an endpoint and how to behave when that endpoint is posted to as the second argument.

  //the second argument is another async callback function (posts return promises) that take the client request object as its first argument and the promise response object as its second.
  const nature = request.body;
  //The client is trying to post a new nature in this scenario.  They will have been told in the docs how to format their request body, which will be in an options object.  We can simply use the body as the new nature object we're posting.  We assign it to an appropriate variable here.
  for (let requiredParameter of ['name', 'good', 'bad']) {
    //we define a new array in this loop as its being called.  The array consists of the required object keys in the request body.
    if (!nature[requiredParameter]) {
      //now we're in the loop.  The loop runs through each object key and uses bracket notation to call it off of the response body, aka nature.  If it doesn't exist, it drops out of the loop into its return.
      return response
        .status(422)
        //it returns the response with a 422 status code, which tells us the entity was unprocessable.
        .send({ error: `The expected format is: { name: <String>, good: <String>, bad: <String> }. You're missing a "${requiredParameter}" property.` });
        //it then sends an error telling us which item in the array - which property - was not there and this caused the loop to stop.
    }
  }
  //if all went well then we get to try the happy path.
  try {
    //try is a promise's happy path.  We already made sure the object was correct, so another client-side sad path probably isnt' necessary here.
    const id = await database('natures').insert(nature, 'id');
    //'id' is actually the name of a knex method we're running.  We're calling a knex table with database by feeding it the table's name, and then we're running the insert method.  Insert takes two arguments, the thing we're inserting, and the name of the column with the value we want .insert to spit out.  Since we're just returning the id, we're calling this whole function 'id', even though it's doing a lot more than spitting out an id.
    //Since we're awaiting it, nothing else will run until it is done.
    response.status(201).json({ id })
    //now we're giving the function its happy path - send out a successful response code of 201 (created), and it will spit out the value of the object whose key matches the id we defined above.
  } catch (error) {
    response.status(500).json({ error });
    //again, if a promise fails it is given an error object - here, we are telling the response to give us back a 500 status and to give us a jsonify'd version of the error so that we can see it
  }
});

//see above, this endpoint works the same say as posting a new nature
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
//see above, this endpoint works the same say as posting a new nature

app.delete('/api/v1/pokemon/:id', async (request, response) => {
//delete, like post, is going to take an endpoint that requires a specific id.  It also takes an asyc function that requires the client request object and the promise response as arguments.
  const pokemon = await database('pokemon').where('id', request.params.id).select();
  //I need to do this for the 404 sad path.  Delete does not actually require selecting and assigning the pokemon to a variable.
  //once again, 'database' is referring to the knex database we built, and the 'pokemon' argument it telling it which table to look at.  The knex .where method tells it which row to look at.
  //.where takes two arguments - the name of the column it's supposed to look at for reference, and the value that it's supposed to look at in the column.
  //it then takes that value and delivers us the data in that row as an object when we run the select() method.
  //again, we await it, so nothing else will run until it's done.
  if(!pokemon) {
    return response.status(404).json({error: "unable to find that pokemon"})
  }
  //Again, i need to check that the pokemon selected exists at all, so I make an if block that will run a 'not found' status if the pokemon is not present.
  try {
    await database('pokemon').where('id', request.params.id).del();
    //I use the same method as before - call the knex database and use and argument to pick out the right table - and then I use the .where method which takes the name of the column it's supposed to look at for reference, and the value that it's supposed to look at in the column, as arguments
    //it then takes that value and deletes it using the knex method for deleting data, .del()
    response.status(204).json("good job it's gone")
    //204 is a success status that means no content is present at that endpoint.  I also wanted a note to assure myself that the delete had worked, so I also returned a string from the response's .json.
  } catch (error) {
    response.status(500).json({ error });
        //again, if a promise fails it is given an error object - here, we are telling the response to give us back a 500 status and to give us a jsonify'd version of the error so that we can see it
  }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
//we set 'port' above - .listen is a method that runs when the app is started up, just so that we can see that it is indeed running when we start it up in our terminal.  It's a simple get, and we tell it that when it gets the whole port, to run a small string in our terminal telling us the server name and where to find it - where the port that we set above is, because it won't always be 3000!
