We can use Joi object to verify endpoint. By using Joi object we can specified very customizable 
validation for parameters in path, in inbound payload and outbound response.

Create a server that has a route configuration exposing an endpoint login which can be access 
using 'POST' method. Specifically:

```
/login
```

login endpoint will accept isguest (boolean), username (string), access_token (alphanumeric) and 
password (alphanumeric) in post request body. Validation should follow following condition
i)   if ```isguest``` is false then username is required.
ii)  ```password``` cannot appear together with ```access_token```. 
iii) if any parameters other than specified above are sent then it should allow by validation.

The solution will just check that a Validation Joi object exists within the configuration of  api, not any specific validation.

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
           payload : Joi.object()({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                access_token: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
           }).options({allowUnknown: true}).with('username', 'birthyear').without('password', 'access_token');.
        }
    }
}
```

All route information can be found here either in the Hapi directory
in `node_modules` under Reference.md.

Joi information can also be found in `node_modules`
