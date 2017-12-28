var Hapi = require('hapi');
var Joi = require('joi');

(async () => {
    try {
        const server = Hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });

        server.route({
            method: 'POST',
            path: '/login',
            config: {
                handler: (request, h) => {
                    return 'login successful';
                },
                validate: {
                    payload: Joi.object({
                        isGuest: Joi.boolean().required(),
                        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
                        password: Joi.string().alphanum(),
                        accessToken: Joi.string().alphanum()
                    }).options({ allowUnknown: true }).without('password', 'accessToken')
                }
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
