var Hapi = require('hapi');
var Joi = require('joi');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

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