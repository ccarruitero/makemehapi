var Hapi = require('hapi');
var path = require('path');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/foo/bar/baz/{filename}',
    handler: {
        directory: {
            path: path.join(__dirname, '/public')
        }
    }
});

server.start();
