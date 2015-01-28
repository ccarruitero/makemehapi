Create a server that has a route configuration exposing an endpoint ``set-cookie`` and ``check-cookie`` which can be accessed using `'GET'` request. Specifically:
 
```
/set-cookie
```
 
`set-cookie` endpoint will set cookie with key 'session' and value as `{key : 'makemehapi'}`. Cookie  should be `base64json` encoded, it should expire in `10 ms`. Set domain scope of cookies as `localhost`.  You can return any value in response. 
 
```
/check-cookie
```
 
`check-cookie` endpoint will have cookies received from `/set-cookie` endpoint. If `session` key is present in cookies then simply return `{user : 'hapi'}`. otherwise return `unauthorized` access error
 
--------------------
 
##HINTS

In your `server.route()` function, you can add the following option:

```js
config: {
    state: {
        parse: true,
        failAction: 'log'
    }
}
```

By using this option, we can configure the server to handle cookies in various ways.

`Hapi` provided way to manage cookies for specific url path.
 
```js
server.state('session', {
    path: '/',
});
```

We can set cookies while replying to request as follow,
 
```js
reply('success').state('session', 'session')
```

Cookies value are stored in server state. And we can access using following code,
 
```js
var session = request.state.session;
```

More information about handling of Cookies in `hapi` can be found in the Hapi directory in `node_modules` under [API.md](https://github.com/hapijs/hapi/blob/master/API.md).
 
