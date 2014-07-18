var Fs = require('fs');
var path = require('path');
var Hapi = require('hapi');
var rot13 = require('rot13-stream')();

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8081));

server.route({
    method: "GET",
    path: "/",
    config: {
        handler: function (request, reply) {

            var thisfile = Fs.createReadStream(path.join(__dirname, '/input.txt'));
            
            reply(thisfile.pipe(rot13));
        }
    }
});

server.start();



