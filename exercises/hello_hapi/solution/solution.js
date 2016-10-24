var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello hapi');
    }
});

server.start((err) => {
    if (err) throw err;
});
