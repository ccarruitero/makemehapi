const Path = require('path');
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');

(async () => {
  try {
    const serverPort = process.argv[2] || 8080;
    const server = Hapi.Server({
      host: 'localhost',
      port: serverPort
    });

    await server.register(Vision);

    server.views({
      engines: {
        html: Handlebars
      },
      path: Path.join(__dirname, 'templates')
    });

    server.route({
      path: '/',
      method: 'GET',
      handler: {
        view: 'index.html'
      }
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (error) {
    console.log(error);
  }
})();
