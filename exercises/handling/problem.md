Create a Hapi server as in previous exercises.

Create an `index.html` file containing the following HTML.

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

Requests to `/` should be routed to `index.html`.

-----------------------------------------------------------------
##HINTS

You can declare handlers as objects instead of functions. The object must
contain one of the following: `file`, `directory`, `proxy`, or `view`.

For example, `handler` can be assigned an object with the `file` key:

```js
handler: {
    file: "foo.html"
}
```
