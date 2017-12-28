var Fs = require('fs');
var Hapi = require('hapi');
var Path = require('path');
var Rot13 = require('rot13-transform');

(async () => {
    try {
        const server = Hapi.Server({ 
            host: 'localhost',
            port: Number(process.argv[2] || 8080) 
        });
       
        server.route({
            path: '/',
            method: 'GET',
            config: {
                handler: (request, h) => {
                    var thisfile = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
                    return thisfile.pipe(Rot13()); 
                }
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
