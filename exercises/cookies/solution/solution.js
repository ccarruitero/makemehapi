const Hapi = require('@hapi/hapi');
const Boom = require('@hapi/boom');

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
      handler: (request, h) => h.response({
        message: 'success'
      }).state('session', { key: 'makemehapi' }),
      options: {
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
        const { session } = request.state;
        let result;

        if (session) {
          result = { user: 'hapi' };
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
