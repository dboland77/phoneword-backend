"use strict";

const Hapi = require("@hapi/hapi");
const Qs = require('qs'); //querystring parse/stringify

// Add the ability to query our endpoint
const server = Hapi.server({
  host: "localhost",
  port: 4000,
  query: {
    parser: (query) => Qs.parse(query)
  }
});

// Add a GET route 
server.route({
  method: 'GET',
  path: '/',
  handler: (request,h) => {
    return request.query;
  }
})


// Example query (per docs)
// http://localhost:4000/?foo[bar]=baz
// Command line or postman
const init = async () => {
  // Set the connection parameters
  // This is not going to be deployed so I am
  // setting to run on localhost 4000 (React likes 3000)

  await server.start();
  console.log(`Server running on ${server.info.uri}`)
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
