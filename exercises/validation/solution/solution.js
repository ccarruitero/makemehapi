var Hapi = require('hapi');
var server = new Hapi.Server();
var Joi = require('joi');
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    config: {
        handler: function (request, reply) {
            reply('You asked for the chicken ' + request.params.breed);
        },
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start();
