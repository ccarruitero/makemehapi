const Hapi = require('hapi');
const H2o2 = require('h2o2');

(async () => {
    try {
        const server = Hapi.Server({ 
            host: 'localhost',
            port: process.argv[2] || 8080 
        });

        await server.register(H2o2);

        server.route({
            method: 'GET',
            path: '/proxy',
            handler: {
                proxy: {
                    host: '127.0.0.1',
                    port: 65535
                }
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
