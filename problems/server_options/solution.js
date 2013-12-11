var Hapi = require('hapi');

var options = {
    debug: { request: ['error', 'uncaught'] }
};
var server = new Hapi.Server(8081, options);

server.start();