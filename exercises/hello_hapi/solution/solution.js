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
            handler: (request) => { 
                return 'Hello World!'; 
            }
        });

        await server.start();

        console.log(`Server running at: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
})();
