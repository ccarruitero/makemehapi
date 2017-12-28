var Hapi = require('hapi');
var Joi = require('joi');

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
                handler: (request, h) => {
                    return `Vous avez demandé les poulets ${request.params.breed}`;
                },
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
