const Hapi = require('hapi');
const Joi = require('joi');

(async () => {
  try {
    const server = Hapi.Server({
      host: 'localhost',
      port: Number(process.argv[2] || 8080)
    });

    server.route({
      method: 'GET',
      path: '/chickens/{breed?}',
      config: {
        handler: (request, h) => `Vous avez demandé les poulets ${request.params.breed}`,
        validate: {
          params: {
            breed: Joi.string().required()
          }
        }
      }
    });

    await server.start();
  } catch (error) {
    console.log(error);
  }
})();
