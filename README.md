# Build Your Own Backend

By Allie McCarthy

This is application used data from https://pokeapi.co/docs/v2.html#pokemon and https://github.com/cheljoh/personality_test_api

### Set Up

Clone the repo. Run npm install, npm i -g knex, and npm i express --save to make sure you have the tools you need.

Run `nodemon server.js` in your terminal.

### Explanation

This API is intended to be used for a website that pairs pokemon with potential trainers based on the pokemon's natures. Natures are given 'good' and 'bad' qualities using Big 5 personality test traits.  If a nature has 'good' extraversion, the pokemon with that nature will be extraverted.  If a nature has 'bad' extraversion, a pokemon with that nature will not be extraverted.

Due to project specs, some natures and personalities were added.

### Endpoints

## GET

``Get`` requests are used to read the API.  You will be adding endpoints to `http://localhost:3000` if you are testing locally or `https://adopt-a-pokemon.herokuapp.com/` if you are not.  So, for instance, if you wanted to get all natures available from this API, you would fetch `http://localhost:3000/api/v1/natures` or `https://adopt-a-pokemon.herokuapp.com/api/v1/natures`

#### GET all possible pokemon natures

Endpoint:

 `/api/v1/natures`

Example reply:

     [
       {
           "id": 11,
           "name": "hardy",
           "good": "emotional_stability",
           "bad": "conscientiousness",
           "created_at": "2020-01-30T19:57:39.647Z",
           "updated_at": "2020-01-30T19:57:39.647Z"
       },
       {
           "id": 12,
           "name": "bold",
           "good": "extraversion",
           "bad": "emotional_stability",
           "created_at": "2020-01-30T19:57:39.652Z",
           "updated_at": "2020-01-30T19:57:39.652Z"
       },
       {
           "id": 13,
           "name": "modest",
           "good": "agreeableness",
           "bad": "extraversion",
           "created_at": "2020-01-30T19:57:39.656Z",
           "updated_at": "2020-01-30T19:57:39.656Z"
       }
      ]


#### GET all available pokemon on adoption list

Endpoint:

 `/api/v1/pokemon`

Example reply:

     [
       {
        "id": 7,
        "name": "shellder",
        "nature_id": 12,
        "created_at": "2020-01-30T19:57:39.684Z",
        "updated_at": "2020-01-30T19:57:39.684Z"
       },
       {
           "id": 8,
           "name": "charmander",
           "nature_id": 12,
           "created_at": "2020-01-30T19:57:39.683Z",
           "updated_at": "2020-01-30T19:57:39.683Z"
       },
       {
           "id": 9,
           "name": "charizard",
           "nature_id": 13,
           "created_at": "2020-01-30T19:57:39.685Z",
           "updated_at": "2020-01-30T19:57:39.685Z"
       }
      ]

#### GET a single nature from list

Endpoint:

 `/api/v1/natures/:id`

Example reply:

    [
      {
          "id": 12,
          "name": "bold",
          "good": "extraversion",
          "bad": "emotional_stability",
          "created_at": "2020-01-30T19:57:39.652Z",
          "updated_at": "2020-01-30T19:57:39.652Z"
      }
    ]

#### GET a single pokemon from list

Endpoint:

 `/api/v1/pokemon/:id`

Example reply:

     [
         {
             "id": 13,
             "name": "seel",
             "nature_id": 14,
             "created_at": "2020-01-30T19:57:39.687Z",
             "updated_at": "2020-01-30T19:57:39.687Z"
         }
     ]


## POST
To add data to endpoints, you will need to use post.  Make sure that your options object includes the object you are posting in the body and `application/json` in the Content-Type header.

#### POST a new pokemon to the adoption list

Endpoint:

    `/api/v1/pokemon`

Request body:

    `{"name": <String>, "nature_id": <Integer>}`

Example response:

    {
      "id": [
         81
        ]
    }

#### POST a new nature to the nature list

Endpoint:

    `/api/v1/natures`

Request body:

    `{ name: <String>, good: <String>, bad: <String> }`

Example response:

    {
      "id": [
         14
        ]
    }


## DELETE

When a pokemon has been adopted, it can be deleted from the adoption list.  It does not require a body, but you will need to query the right id.

####

Endpoint:

 `/api/v1/pokemon/:id`

Example response:

    None, expect a 204 status code.

### Expectations / Spec

BYOB was intended as a way to get comfortable with building databases using Express, Knex, and PostgreSQL. We were required to build a RESTful API, complete with professional-grade documentation.

If data was created ourselves, our ‘seed file’ needed a minimum of ~30 rows of data for each main table.

At minimum, we needed to have at least 2 different tables with at least 1 relationship (e.g. one-to-one, one-to-many, many-to-many).

Each table must have no fewer than three columns.

#### Required endpoints

4 GET endpoints
2 GET endpoints for all of one resource (i.e. ‘/api/v1/merchants’)
2 GET endpoints for a specific resource (i.e. ‘/api/v1/merchants/:id’)
2 POST endpoints
1 DELETE endpoint

## Learning Goals

- building your own RESTful API for a large dataset of your choosing
- one-to-many relational database schema design
- deploying your API to Heroku


## Built With

- Node.js
- Javascript
- Knex
- Express
- PostgreSQL


## License

All credit goes to Turing School of Software for providing the project specifications.
Data credit goes to https://pokeapi.co/docs/v2.html#pokemon and https://github.com/cheljoh/personality_test_api
