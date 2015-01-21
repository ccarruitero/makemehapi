A proxy lets you relay requests from one server/service to another.

Create a server which listens on the port given by the
second command-line argument, takes any requests to
the path `/proxy` and proxies them
to `http://localhost:65535/proxy`.

-----------------------------------------------------------------
##HINTS

The `proxy` key can be used to generate a reverse proxy handler.

```js
handler: {
    proxy: {
        host: '127.0.0.1',
        port: 65535
    }
}
```

-----------------------------------------------------------------
Background info: en.wikipedia.org/wiki/Proxy_server
