Route configuration offers lots of ways to customize each endpoint offered by your hapi application. One of those ways
is through validation.

Validation can happen in parameters in the path, in inbound payload validation, and outbound response. Objects for
validation are defined in the Joi validation framework.

In this exercise, create a server that has a route configuration exposing an endpoint for chickens. Specifically:

```/chickens```

Within the route, add a path parameter named `breed` which has an attached validation within the route's configuration.
The solution will just look that a Validation object exists within the configuration for `breed`, not any specific
validation.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js
var routeConfig = {
    path: '/a/path/{with}/{parameters}',
    method: 'GET',
    handler: myHandler,
    validate: {
        params: {
            with: Joi.string().required(),
            parameters: Joi.string().required()
        }
    }
}
```

All route information can be found here either in the Hapi directory in `node_modules` under Reference.md.

Joi information can be found in `node_modules` also.