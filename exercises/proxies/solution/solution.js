var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
    method: 'GET',
    path: '/proxy',
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
});

server.start();

/* Alt solution using reply.proxy() see: hapijs.com/api#replyproxyoptions

var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  path:'/proxy',
  method: 'GET',
  handler: function (request, reply) {
    reply.proxy({ host: '127.0.0.1', port: 65535 });
  }
});

server.start();

*******************************************/
