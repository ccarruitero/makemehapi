var Hapi = require('hapi');

var options = {
    debug: { request: ['error', 'uncaught'] }
};
var server = Hapi.createServer('localhost', 8081, options);

server.start();
