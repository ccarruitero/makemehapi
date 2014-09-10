We can use a Joi to verify endpoints. By using a Joi object we can specified very customizable validation in path, request payloads, and responses.

Create a server that has a route configuration exposing an endpoint login which can be access
using 'POST' method. Specifically:

```
/login
```

login endpoint will accept isGuest (boolean), username (string), accessToken (alphanumeric) and
password (alphanumeric) in post request body. Validation should follow following condition
i)   if ```isGuest``` is false then username is required.
ii)  ```password``` cannot appear together with ```accessToken```.
iii) if any parameters other than specified above are sent then it should allow by validation.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js

var routeConfig = {
    path: '/a/path/',
    method: 'POST',
    handler: myHandler,
    config: {
        validate: {
           payload : Joi.object({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
           }).options({allowUnknown: true}).with('username', 'birthyear').without('password', 'accessToken');
        }
    }
}
```

Route information can be found in the Hapi directory
in `node_modules/hapi/docs/Reference.md`.

Joi information can be found in `node_modules/hapi/node_modules/joi/README.md`.
