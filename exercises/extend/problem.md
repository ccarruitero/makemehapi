Hapi's request lifecycle gives multiple places to add functions to modify an
inbound request. Functions can be tied into the extension points by using the
following syntax:

```javascript
    server.ext('onRequest', function (request, next) {

        //do some things

        next();
    });
```

The extension points are listed below:

* onRequest - initial request, before routing
* onPreAuth - by now, Hapi has:
    * looked up the route
    * parsed cookies
* onPostAuth - by now, Hapi has:
    * authenticated request
    * parsed payload
    * authenticated payload
* onPreHandler - by now, Hapi has:
    * validated path parameters
    * validated query
    * validated payload
* onPostHandler - by now Hapi has:
    * handled route prerequisites
    * called the handler
* onPreResponse
    * Validates payload

For this exercise, create a function that will be added to a server on the
'onRequest' extension point. Have the function log the requested URL path to the
console.

The workshop will execute requests against the server and verify the output.

-----------------------------------------------------------------
##HINTS

After creating a server, add an extension point by calling the server's
```ext``` function.

```js
server.ext(extensionPoint, function (request, next) { ...
```

The path will be part of the inbound request. Ensure to call ```next();```
within the extension handler!
-----------------------------------------------------------------
