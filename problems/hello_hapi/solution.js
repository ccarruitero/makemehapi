var Hapi = require('hapi');
var server = new Hapi.Server(8081);
server.route({ method: 'GET', path: '/', handler: function () {
    this.reply('Hello Hapi');
}});
server.start();