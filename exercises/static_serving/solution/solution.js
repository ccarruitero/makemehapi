var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './public', listing: false, index: true }
    }
});
server.start();