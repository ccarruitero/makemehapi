Create a server which takes any requests to the path `/proxy` and proxies them
to `http://localhost:65535/proxy`.

-----------------------------------------------------------------
##HINTS

The `proxy` key can be used to generate a reverse proxy handler.

```js
handler: {
    proxy: {
        host: '127.0.0.1',
        port: 8080
    }
}
```
