const Fs = require('fs');
const Hapi = require('@hapi/hapi');
const Path = require('path');
const Rot13 = require('rot13-transform');

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
          const thisfile = Fs.createReadStream(Path.join(__dirname, 'input.txt'));
          return thisfile.pipe(Rot13());
        }
      }
    });

    await server.start();
  } catch (error) {
    console.log(error);
  }
})();
