const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');

var user = { name: 'hapi', password: 'auth' };
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var validate = function (request, username, password, callback) {
    var isValid = username === user.name && password === user.password;

    return callback(null, isValid, { name: user.name });
};

server.register(Auth, function (err) {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'simple',
            handler: function (request, reply) {
                reply();
            }
        }
    });

    server.start(function () {});
});
