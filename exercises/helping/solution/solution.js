var Hapi = require('hapi');
var path = require('path');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
server.views({
    path: path.join(__dirname, 'templates'),
    engines: {
        html: require('handlebars')
    },
    helpersPath:  path.join(__dirname, 'helpers')
});
server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'template.html'
    }
});

server.start();
