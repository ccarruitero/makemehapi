Create a Hapi server as in previous exercises.

Create a folder named 'public' and add a 'file.html' file in the folder with
the following contents:

```html
<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
```

This file should be made available when the path '/foo/bar/baz/file.html' is
requested.

-----------------------------------------------------------------
##HINTS

Handlers can be declared as an object with a directory path:

```js
handler: {
    directory: { path: './public', listing: false }
}
```

Routes using the directory handler must include a path parameter at the end of
the path string. The path defined for the route does not need to correspond to
the file system directory structure, and the parameter name does not matter.

```js
path: "/path/to/somewhere/{param}"
```