Create a server that has a route configuration exposing an endpoint login and 
profile which can be access using 'GET' method. Specifically:
 
 ```
 /login
 ```
 
 login endpoint will set cookie with key 'session' and value as 
 ```{key : 'makemehapi'}```. Cookie  should be  ```base64json``` encoded,
 it should expire in ```10 ms```. Set domain scope of cookies as ```localhost```.
 You can return any value in response. 
 
 ```
 /profile
 ```
 
 profile endpoint will have cookies received from ```/login``` endpoint. 
 If ```session``` key is  present in cookies then simply  return ```{user : 'hapi'}``` 
 otherwise return  ```unauthorized```  access error
 
 -----------------------------------------------------------------
 ##HINTS
 
you can manage cookies following manner 
 
 ```js
 
server.state('session', {
    path: '/',
});

// Set state in route handler

var handler = function (request, reply) {

    var session = request.state.session;
    if (!session) {
        session = { user: 'joe' };
    }

    session.last = Date.now();

    reply('Success').state('session', session);
};

 ```
 
 Cookies implementation can be found in the Hapi directory
 in `node_modules` under Reference.md.
 
