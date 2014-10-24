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
These parameters can then be used in the template.

```html
<div>{{query.paramName}}</div>
```
