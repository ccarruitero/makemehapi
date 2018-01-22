const Hapi = require('hapi');
const Boom = require('boom');

(async () => {
    try {
        const server = Hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });

        server.state('session', {
            path: '/',
            encoding: 'base64json',
            ttl: 10,
            domain: 'localhost',
            isSameSite: false,
            isSecure: false,
            isHttpOnly: false
        });
        
        server.route({
            method: 'GET',
            path: '/set-cookie',
            handler: (request, h) => {
                return h.response({
                    message : 'success'
                }).state('session', { key : 'makemehapi' });
            },
            config: {
                state: {
                    parse: true,
                    failAction: 'log'
                }
            }
        });
        
        server.route({
            method: 'GET',
            path: '/check-cookie',
            handler: (request, h) => {
                var session = request.state.session;
                var result;
        
                if (session) {
                    result = { user : 'hapi' };
                } else {
                    result = Boom.unauthorized('Missing authentication');
                }
        
                return result;
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();