var Hapi = require('hapi');
var path = require('path')


var options = {
    views: {
        path:  path.join(__dirname, 'templates'),
        engines: {
            html: require('handlebars')
        },
        helpersPath:  path.join(__dirname, 'helpers')
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
