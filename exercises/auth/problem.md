Basic Authentication is a simple way to protect access to your application using
only a username and password. There is no need for cookies or sessions, only a
standard HTTP header.

Create a hapi server that listens on a port passed from the command line and is
protected with Basic Authentication. The authentication username should be
"hapi" and the password "auth" and the server should respond with an HTTP 401
status code when authentication fails.

--------------------

##HINTS

There is a hapi plugin for handling basic authentication. Install it by running:

```sh
npm install hapi-auth-basic
```

You'll need to register the `hapi-auth-basic` plugin then configure a named
authentication strategy for `basic`. Once authentication is configured, you'll
need to set the `auth` property in the route configuration to the name of the
strategy you configured.

```js
server.auth.strategy('simple', 'basic', { validateFunc: validate });

server.route({
    method: 'GET',
    path: '/',
    config: {
        auth: 'simple',
        handler: function (request, reply) {
            reply();
        }
    }
});
```

Hapi-auth-basic information can be found here:

    {rootdir:/node_modules/hapi-auth-basic/README.md}

