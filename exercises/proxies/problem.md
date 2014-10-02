A proxy lets you relay requests from one one server/service to another;
Proxies are useful when you need to create/extend an existing service
(like a legacy app). Hapi.js makes creating proxies simple.

Create a server which listens on the port given by the
second command-line argument, takes any requests to
the path `/proxy` and proxies them
to `http://localhost:65535/proxy`.

-----------------------------------------------------------------
##HINTS

There are two possible ways to solve this challenge:

The `proxy` key can be used to generate a reverse proxy handler.

```js
handler: {
    proxy: {
        host: '127.0.0.1',
        port: 65535
    }
}
```

`or` you can use `reply.proxy()` with an object containing
properties/values for the desired host and port:

```js
handler: function (request, reply) {
    reply.proxy({
        host: '127.0.0.1',
        port: 65535
    });
}
```

-----------------------------------------------------------------
More info: en.wikipedia.org/wiki/Proxy_server
Hapi Proxy: hapijs.com/api#replyproxyoptions
