"use strict";

const Hapi = require("@hapi/hapi");

const init = async () => {
  // Set the connection parameters
  // This is not going to be deployed so I am
  // setting to run on localhost 4000 (React likes 3000)
  const server = Hapi.server({
    host: "localhost",
    port: 4000,
  });


  // Add a GET route 
  server.route({
    method: 'GET',
    path: '/',
    handler: (request,h) => {
      return "Hello World!";
    }
  })
  await server.start();
  console.log(`Server running on ${server.info.uri}`)
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
