var Hapi = require('hapi');
var server = Hapi.createServer('localhost', 8081);
server.pack.require('furball', function (err) { });
server.start();
