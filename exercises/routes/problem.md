Create a hapi server that listens on port 8080 and outputs
"Hello [name]" where [name] is replaced with the path parameter
supplied to GET /{name}


When you have completed your server, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are ready to verify it then run:

  {bold}{appname} verify program.js{/bold}

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
```

Add a route handler similar to the following:

```js
function handler (request, reply) {
    reply('Hello ' + request.params.name);
}
```