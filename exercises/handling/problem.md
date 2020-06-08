Create a server which responds to requests to `/` with a static HTML file named
`index.html` containing the following:

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

-----------------------------------------------------------------
##HINTS

This exercise requires you to install the `@hapi/inert` module, which is a hapi
plugin for serving static files and directories. You'll need to register the
plugin in your code in order to serve static files:

```js
var Inert = require('@hapi/inert');

await server.register(Inert);
```

You can declare handlers as objects instead of functions. The object must
contain one of the following: `file` (requires `@hapi/inert` plugin), `directory`
(requires `@hapi/inert` plugin), `proxy` (requires `@hapi/h2o2` plugin), or
`view` (requires `@hapi/vision` plugin).

For example, `handler` can be assigned an object with the `file` key:

```js
handler: {
    file: "index.html"
}
```

Be careful: in practice, you'll need to provide an absolute path to an
`index.html` file in your program's directory. To achieve this, you'll probably
need the `path` core module, its `join()` function, and the `__dirname` global
variable.

You can also configure a files base path in your server and just pass relative
paths in the route. This is specially useful if you have multiple routes that
respond with files.

## Docs

- Hapi - Route options: https://hapi.dev/api#route-options
- Hapi - Serving Static Content Tutorial: https://hapi.dev/tutorials/servingfiles
