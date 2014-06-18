var Hapi = require('hapi');
var path = require('path');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/foo/bar/baz/{filename}',
    handler: {
        directory: {path: path.join(__dirname + '/public')}
    }
});
server.start()
