Create a hapi server that uses the first argument passed in as the port and
serves a static index.html file from a public folder.

Create a folder named 'public' and add a 'index.html' file in the folder with
the following contents:

```html
<html>
    <head><title>Hello Static</title></head>
    <body>
        Hello Static
    </body>
</html>
```

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
```

Handlers can be declared as an object with a directory path:

```js
handler: {
    directory: { path: './public', listing: false, index: true }
}
```