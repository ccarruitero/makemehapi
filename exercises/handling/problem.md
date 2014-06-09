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
