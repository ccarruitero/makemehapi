/**
 * Created by chetandhembre on 10/8/14.
 */
var Hapi = require('hapi');
var server = new Hapi.Server();
var Joi = require('joi');
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.route({
    method: 'POST',
    path: '/login',
    config: {
        handler: function (request, reply) {

            reply('login successful');
        },
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean().required(),
                username: Joi.when('isGuest', { is: false, then: Joi.required() }),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum()
            }).options({ allowUnknown: true }).without('password', 'accessToken')
        }
    }
});

server.start();
