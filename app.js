//import { telephoneWords } from "./src/controllers/textalgorithm.js";
import { phoneWords, loadDictionary } from "./src/controllers/index.js";
import Hapi from "@hapi/hapi";

("use strict");

// Add the ability to query our endpoint
const server = Hapi.server({
  // host: "localhost", causes a problem on Heroku
  port: process.env.PORT,
  routes: {
    cors: true,
  },
});

// Add our utility functions to the server as methods
server.method("phonewords", phoneWords);
server.method("loadDictionary", loadDictionary);

// Add a GET route
server.route({
  method: "GET",
  path: "/{num?}",
  handler: (request, reply) => {
    return server.methods.phonewords(request.query.num);
  },
});

// Command line or postman
const initServer = async () => {
  // Set the connection parameters
  // This is not going to be deployed so I am
  // setting to run on localhost 8000 (React likes 3000)

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  server.methods.loadDictionary();
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

initServer();
