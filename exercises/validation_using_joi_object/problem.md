By using a `Joi` object we can specify highly customizable validation rules in
paths, request payloads, and responses.

Create a server exposing a login endpoint and reply with "login successful" when
an HTTP `POST` request is sent to `/login`.

The endpoint will accept following payload variables:

```isGuest```       (boolean)
```username```      (string)
```accessToken```   (alphanumeric)
```password```      (alphanumeric)

Validation should consist of following conditions:

i)   if ```isGuest``` is false, a ```username``` is required.
ii)  ```password``` cannot appear together with ```accessToken```.
iii) if any other parameters than specified above are sent, they should pass the validation.

-----------------------------------------------------------------
##HINTS

Create a server that listens on port `8080` with the following code:

```js

var routeConfig = {
    path: '/a/path/',
    method: 'POST',
    handler: myHandler,
    config: {
        validate: {
           payload: Joi.object({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
           })
           .options({allowUnknown: true})
           .with('username', 'birthyear')
           .without('password', 'accessToken')
        }
    }
}
```

All route information can be found here:

    {rootdir:/node_modules/hapi/API.md}

Joi information can be found here:

    {rootdir:/node_modules/joi/README.md}
