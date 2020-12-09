import { checkThisWorks } from "./src/controllers/textalgorithm.js";
import Hapi from "@hapi/hapi";
//import Qs from 'qs'; //querystring parse/stringify

("use strict");

// Add the ability to query our endpoint
const server = Hapi.server({
  host: "localhost",
  port: 4000,
  // query: {
  //   parser: (query) => Qs.parse(query)
  // }
});

// Add a GET route
server.route({
  method: "GET",
  path: "/{user?}",
  handler: (request, h) => {
    //const user = request.params.user ? request.params.user : 'stranger';

    return `Hello ${request.query.user}!`;
  },
});

server.method('check', checkThisWorks)

server.methods.check();
// Standard query better
// http://localhost:4000/?user=johnny

// Command line or postman
const init = async () => {
  // Set the connection parameters
  // This is not going to be deployed so I am
  // setting to run on localhost 4000 (React likes 3000)

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
