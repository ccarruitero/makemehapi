var Hapi = require('hapi');
var server = new Hapi.Server(8081);
server.route({ method: 'GET', path: '/{name}', handler: function () {
    this.reply('Hello ' + this.params.name);
}});
server.start();