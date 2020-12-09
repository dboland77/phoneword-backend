import { telephoneWords } from "./src/controllers/textalgorithm.js";
import Hapi from "@hapi/hapi";

("use strict");

// Add the ability to query our endpoint
const server = Hapi.server({
  host: "localhost",
  port: 4000,
});

// Add our t9 processor to the server as a method
server.method("phonewords", telephoneWords);

// Add a GET route
server.route({
  method: "GET",
  path: "/{num?}",
  handler: (request, reply) => {
    return server.methods.phonewords(request.query.num);
  },
});

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
