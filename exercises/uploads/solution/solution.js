/**
 * Created by chetandhembre on 20/8/14.
 */

var Hapi = require('hapi')


var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  method: 'POST',
  path: '/upload',
  config: {
    handler: function (request, reply) {

      var body = '';

      request.payload.file.on('data', function (data){

        body += data
      })

      request.payload.file.on('end', function (){

        var ret = {
          username: request.payload.username,
          file: {
            data: body,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        }

        reply(JSON.stringify(ret));
      })

    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start();
