Create a hapi server that listens on a port passed from the command line and
replies with "Hello hapi" when an HTTP GET request is sent to `/` .


The workshop will execute requests against the server and verify the output.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port `8080` , if none is passed from the command
line, with the following code:

```js
var Hapi = require('hapi');
var server = Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

```

Routes are added via the `route` function:

```js
server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```

Handlers can be anonymous functions or separately declared (just like in
javascript :P), but all of them should have this signature:

```js
function handler(request, h) {

    // Request has all information
    // a string can be returned

    return 'a string in the response';
}
```

Calling the `start` function gets a server listening on the assigned port. Note
that await is required when calling `start`:

```js
await server.start();

console.log('Server running at:', server.info.uri);
```
-----------------------------------------------------------------
