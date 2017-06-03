var Hapi = require('hapi');
var server = new Hapi.Server();
var db = require('./db').db;
var book = require('./models/Book');
var routes = require('./routes')

var Books = require('../books.json');

// Create a server with a host and port
server.connection({
  host: 'localhost',
  port: 8081
});

// Add the route
server.route(routes);

// Start the server
server.start(function(err) {
  if (err) throw err;
  console.log(`Server running at ${ server.info.uri }`);
});
