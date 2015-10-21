Route configuration offers lots of ways to customize each endpoint offered by
your hapi application. One of those ways is through validation.

Validation can happen in parameters in the path, in inbound payload validation,
and outbound response. Objects for validation are defined in the `Joi`
validation framework.

Create a server that has a route configuration exposing an endpoint for
chickens. Specifically:

```
/chickens
```

Within the route, add a path parameter named `breed` which has an attached
validation within the route's configuration. The solution will just check that a
Validation object exists within the configuration for `breed`, not any specific
validation.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port `8080` with the following code:

```js
var routeConfig = {
    path: '/a/path/{with}/{parameters}',
    method: 'GET',
    handler: myHandler,
    config: {
        validate: {
            params: {
                with: Joi.string().required(),
                parameters: Joi.string().required()
            }
        }
    }
}
```

All route information can be found here:

    {rootdir:/node_modules/hapi/API.md}

Joi

Information can be found here:

    {rootdir:/node_modules/joi/README.md}

To install joi:

```sh
npm install joi
```
