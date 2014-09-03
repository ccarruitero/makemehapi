var Hapi = require('hapi');

var options = {
  state: {
    cookies: {
      parse: true ,
      failAction: 'log'
    }
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8000), options);


server.state('session', {
  path: '/{path*}',
  encoding: 'base64json',
  ttl: 10,
  domain: 'localhost'
});


server.route(
  {
    method: 'GET',
    path: '/set-cookie',
    config: {
      handler: function (request, reply) {

        return reply({
          message : 'success'
        }).state('session', {
          key : 'makemehapi'
        });
      }
    }
  }
)

server.route(
  {
    method: 'GET',
    path: '/check-cookie',
    config: {
      handler: function (request, reply) {
        
        var session = request.state.session;
        var result;
        if (session) {
          result = {   
            user : 'hapi'
          };
        } else {
          result = new Hapi.error.unauthorized('Missing authentication');
        }
        reply(result);
      }
    }
  }
);

server.start();

