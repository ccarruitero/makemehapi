var Hapi = require('hapi');
var Path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'template.html'
    }
});

server.start();