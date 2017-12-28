var Hapi = require('hapi');

var server = new Hapi.Server();

const Hapi = require('hapi');

(async () => {
    try {
        const server = Hapi.Server({ 
            host: 'localhost',
            port: Number(process.argv[2] || 8080) 
        });

        server.route({
            path: '/',
            method: 'GET',
            handler: (request, h) => { 
                return 'Bonjour hapi!'; 
            }
        });

        await server.start();

        console.log(`Serveur fonctionnant à: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
})();
