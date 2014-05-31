Create a server which routes requests to the path `/foo/bar/baz/file.html` to a
file in a directory, e.g. `public/file.html`, which contains the following:

```html
<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
```

-----------------------------------------------------------------
##HINTS

Handlers can be declared as an object with a directory path:

```js
handler: {
    directory: { path: './public' }
}
```

Routes using the directory handler must include a path parameter at the end of
the path string. The path defined for the route does not need to correspond to
the file system directory structure, and the parameter name does not matter.

```js
path: "/path/to/somewhere/{param}"
```