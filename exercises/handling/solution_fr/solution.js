const Hapi = require('hapi');
const Inert = require('inert');

(async () => {
    try {
        const server = Hapi.Server({ 
            host: 'localhost', 
            port: process.argv[2] || 8080,
            routes: {
                files: {
                    relativeTo: __dirname
                }
            }
        });

        await server.register(Inert);

        server.route({
            path: '/',
            method: 'GET',
            handler: {
                file: 'index.html'
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
