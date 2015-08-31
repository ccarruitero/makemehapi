Create a server that has a route configuration exposing an endpoint ``set-
cookie`` and ``check-cookie`` which can be accessed using a `'GET'` request.
Specifically:

```
/set-cookie
```

The `set-cookie` endpoint will set a cookie with the key 'session' and the value
`{ key: 'makemehapi' }`. The cookie should be `base64json` encoded, should
expire in `10 ms`, and have a domain scope of `localhost`.  The response is
unimportant for this exercise, and may be anything you like.

```
/check-cookie
```

The `check-cookie` endpoint will have cookies received from the `/set-cookie`
endpoint. If the `session` key is present in cookies then simply return
`{ user: 'hapi' }`, otherwise return an `unauthorized` access error.

--------------------

##HINTS

In your `server.route()` function, you may add the following option:

```js
config: {
    state: {
        parse: true,
        failAction: 'log'
    }
}
```

By using this option, we can configure the server to handle cookies in various ways.

`hapi` provides a way to manage cookies for a specific url path.

```js
server.state('session', {
    path: '/',
});
```

We can set cookies while replying to request as follows:

```js
reply('success').state('session', 'session')
```

Cookie values are stored in server state, accessible using following code:

```js
var session = request.state.session;
```

More information about handling of cookies in `hapi` can be found in the Hapi
directory in `node_modules` here [API](http://hapijs.com/api).

While not required for this exercise, you may use [Boom](https://www.npmjs.com/package/boom)
to more easily return an `unauthorized` error along with the correct HTTP status
code:

```js
var Boom = require('boom');
```

```js
reply(Boom.unauthorized('Missing authentication'));
```
