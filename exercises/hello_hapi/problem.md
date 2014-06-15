Create a hapi server that listens on a port passed from the command line and replies with
"Hello Hapi" when an HTTP GET request is sent to /.

The workshop will execute requests against the server and verify the output.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
```

Routes are added via the `route` function:

```js
server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```

Handlers can be anonymous functions or separately declared (just like in javascript :P), but all of them should have this signature: 

```js
function handler(request, reply) {

	//request has all information
	//reply handles client response

	reply({mustFlow:true});
}
```

Calling the `start` function gets a server listening on the assigned port:

```js
server.start();
```
-----------------------------------------------------------------
