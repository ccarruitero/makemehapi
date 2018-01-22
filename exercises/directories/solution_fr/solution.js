const Path = require('path');
const Hapi = require('hapi');
const Inert = require('inert');

(async () => {
    try {
        const server = Hapi.Server({
            host: 'localhost',
            port: process.argv[2] || 8080
        });

        await server.register(Inert);

        server.route({
            path: '/foo/bar/baz/{filename}',
            method: 'GET',
            handler: {
                directory: {
                    path: Path.join(__dirname, 'public')
                }
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
