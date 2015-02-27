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

You can declare handlers as objects instead of functions. The object must
contain one of the following: `file`, `directory`, `proxy`, or `view`.

For example, `handler` can be assigned an object with the `file` key:

```js
handler: {
    file: "index.html"
}
```

Be careful: in practice, you’ll need to provide an absolute path to an
`index.html` file in your program’s directory.  To achieve this, you’ll
probably need the `path` core module, its `join()` function, and the
`__dirname` global variable.
