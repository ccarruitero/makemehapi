var Hapi = require('hapi');

var options = {
    views: {
        path: 'templates',
        engines: {
            html: 'handlebars'
        },
        helpersPath: 'helpers'
    }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

server.route({
    method: 'GET',
    path: '/',
    handler: {
        view: 'template.html'
    }
});

server.start()
