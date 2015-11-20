Create a server which responds to requests to `/?name=Handling` using a template
located at `templates/index.html` which outputs the following HTML:

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

This exercise requires you to install the `vision` module, which is a hapi plugin
for rendering templates. You'll need to register the plugin in your code in
order to render your templates:

```js
var Vision = require('vision');

server.register(Vision, function (err) {
    if (err) throw err;
});
```

The `view` key can be used to define the template to be used to generate the
response.

```js
handler: {
    view: "index.html"
}
```

`server.views()` is the server method that we use to configure the templates
used on our server. This method receives a configuration object in which we can
set different engines based on file extension. This object can also set a
directory path for your templates.

```js
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
```

In this exercise, we'll be using Handlebars. To install handlebars:

```sh
npm install handlebars
```

With Handlebars templates, you can render a variable directly in HTML by
surrounding the variable with curly braces, e.g. `{{foo}}`.

The template receives some information from the request. For example, the query
parameters that were passed in via the URL are available in the `query` object.
These parameters can then be used in the template.  Query params get
automatically parsed and aren't declared in the route `path`.

```html
<div>{{query.paramName}}</div>
```
