var Hapi = require('hapi');
var Vision = require('vision');
var Path = require('path');

var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(Vision, function () {});

server.views({
    path: Path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  Path.join(__dirname, 'helpers')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'template.html'
    }
});

server.start(function () {});
