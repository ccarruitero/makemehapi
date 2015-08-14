var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name);
        // a more secure alternative is this:
        //
        //     reply('Hello ' + encodeURIComponent(request.params.name));
        //
        // encodeURIComponent escapes all characters except the following: alphabetic, decimal digits, - _ . ! ~ * ' ( )
        // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent for more details why you should call encodeURIComponent on any user-entered parameter
    }
});

server.start(function () {});
