var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: function(request, reply) {
      concatStream(request.payload.file, function(err, body) {
        // On pourrait gérer l’erreur éventuelle ici…
        var result = {
          description: request.payload.description,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        };
        reply(JSON.stringify(result));
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

function concatStream(src, cb) {
  var body = [];
  src.on('data', function(chunk) { body.push(chunk.toString('utf-8')); });
  src.on('end', function(chunk)  { cb(null, body.join('')) });
  src.on('error', function(err)  { cb(err); })
}

server.start(function () {});
