var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');

var server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: __dirname
            }
        }
    }
});


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Inert, (err) => {
    if (err) throw err;
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        file: Path.join(__dirname, 'index.html')
    }
});

server.start((err) => {
    if (err) throw err;
});
