const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');

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
        handler: (request, h) => `You asked for the chicken ${request.params.breed}`,
        validate: {
          params: Joi.object({
            breed: Joi.string().required()
          })
        }
      }
    });

    await server.start();
  } catch (error) {
    console.log(error);
  }
})();
