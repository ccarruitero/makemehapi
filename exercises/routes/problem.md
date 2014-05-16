Create a hapi server that listens on port 8080 and outputs
"Hello [name]" where [name] is replaced with the path parameter
supplied to GET /{name}


When you have completed your server, you can run it in the test
environment with:

  {bold}{appname} run server.js{/bold}

And once you are ready to verify it then run:

  {bold}{appname} verify server.js{/bold}

-----------------------------------------------------------------

HINT

Create a server that listens on port 8080 with a route handler
similar to the following:

function handler (request, reply) {
    reply('Hello ' + request.params.name);
}