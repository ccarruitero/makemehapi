/**
 * Created by ichetandhembre on 10/8/14.
 */
var Hapi = require('hapi');
var Joi = require('joi');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
	method: 'POST',
	path: '/login',
	config: {
		handler: function (request, reply) {
			reply('login successful');
		},
		validate: {
			payload: Joi.object({
				isguest : Joi.boolean().required(),
				username : Joi.when('isguest', { is: false, then: Joi.required() }),
				password : Joi.string().alphanum(),
				access_token : Joi.string().alphanum()
			}).options({allowUnknown : true}).without('password', 'access_token')
		}
	}
});

server.start();