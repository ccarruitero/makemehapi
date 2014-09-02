/**
 * Created by chetandhembre on 20/8/14.
*/


var Hapi = require('hapi')

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8000), { state: { cookies: { parse: true , failAction: 'log'} } });


server.state('session', {
  path : '/{path*}',
  encoding: 'base64json',
  ttl: 10,
	domain: 'localhost'
});


server.route(
  {
    method: 'GET',
    path: '/login',
    config: {
      handler: function (request, reply) {

	      console.log('dfdf')
        var session = { user: 'joe' };
        return reply({
          message : 'success'
        }).state('session', {
            key : 'makemehapi'
        })
      }
    }
  }
)

server.route(
  {
    method: 'GET',
    path: '/profile',
    config: {
      handler: function (request, reply) {
        
        var session = request.state.session
        var result;
        if (session) {
          result = {   
            user : 'hapi'
          }
        } else {
          result = new Hapi.error.unauthorized('Missing authentication')
        }
        reply(result)            
      }
    }
  }
);

server.start();

