var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2]));
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello Hapi');
    }
});
server.start();