var fs = require('fs');
var path = require('path');
var Hapi = require('hapi');
var rot13 = require('rot13-transform');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: "GET",
    path: "/",
    config: {
        handler: function (request, reply) {

            var thisfile = fs.createReadStream(path.join(__dirname, '/input.txt'));

            reply(thisfile.pipe(rot13()));
        }
    }
});

server.start();
