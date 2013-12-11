var Hapi = require('hapi');
var server = new Hapi.Server(8081);
server.pack.require('furball', function (err) { });
server.start();