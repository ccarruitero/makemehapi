var Hapi = require('hapi');
var server = Hapi.createServer('localhost', 8081);
server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
    	reply('Hello Hapi');
	}
});
server.start();
