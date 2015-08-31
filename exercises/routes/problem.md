Create a hapi server that listens on a port passed from the command line and
outputs "Hello [name]" where [name] is replaced with the path parameter supplied
to GET `/{name}`


When you have completed your server, you can run it in the test environment
with:

  `{appname} run program.js`

And once you are ready to verify it then run:

  `{appname} verify program.js`

-----------------------------------------------------------------
##HINTS

Create a server that listens on port `8080`, if none is passed from the command
line, with the following code:

```js
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

Add a route handler similar to the following:

```js
function handler (request, reply) {
    reply('Hello ' + request.params.name);
}
```
