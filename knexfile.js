//A query is a question or inquiry to a set of data.  SQL, or structured Query Language, is the language we use to talk to a database.  Knex allows us to talk to the DB in Javascript instead - this file is generated when we install Knex into a project, and it tells Knex how to understand our database configuration.

//You initialize knex to create this file.

module.exports = {
//module.exports is basically telling your app what you want it to look at when it requires this file, or module.  In this case it require the entire knex configuration object.
  development: {
  //This object is what knex is supposed to look at for the database configuration when on a development server.  A dev server is where an app is developed - it won't necessarily be in a finished state here.
    client: 'pg',
  //Knex works with Node.js, but it has a variety of libraries it can work with.  By default the client is mySQL when you install knex - in our case, we are using PostGreSQL, which knex recognizes by the string 'pg'.
    connection: 'postgres://localhost/pokepairs',
    //Lots of things can go into the connection object - user, password, etc.  In our case, we're just telling local host to connect to the postgres library and we're nameing our app pokepairs.

    //this is a uri.  postgres is the protocol - like http.  With localhost we are telling it to look locally, and pokepairs is the name of our database.  This was named when I ran Create Database in postgres in terminal and named it pokepairs, a name that I now regret.
    migrations: {
      directory: './db/migrations'
    },
    //this object tells knex where to look for our migration file - this is where we actually build the tables in our database
    seeds: {
      directory: "./db/seeds/dev"
    },
    //This object tells knex where to make seed file, the file that actually seeds the table with our data. We tell knex to make seed files with knex seed:make seed_name in the terminal
    useNullAsDefault: true,
    //this key/value pair basically tells knex what do to with any undefined values in our tables.  Data can sometimes be messy, and in this case, we're telling it to just put null when the data isn't explicitly provided.
  },

  production: {
    //this object is what knex is supposed to look at when on a production server, such as Heroku.  It's largely the same as the dev server object in this case, though the connection is different - its supposed to look at the process object to find the database URL to connect it to postgres.  SSL is the standard security technology for establishing an encrypted link between a web server and a browser.  Basically we are telling it we want it to be secure.
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  }

};
