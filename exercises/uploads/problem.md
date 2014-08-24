Create a server that has a route configuration exposing a upload endpoint which can be access 
using 'POST' method. Specifically:

```
/upload
```

form with username (string) and file (file) can be submitted to upload endpoint, upload endpoint only accept ```multipart/form-data``` 
content-type request.On form submit request to upload endpoint following response is expected

```json
{
  username :  //username from form
  file : {
    data :    //content of file uploaded 
    filename:  //name of file uploaded
    headers :   //file header provided by hapi 
  }
} 
```

-----------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:

```js

var routeConfig = {
  path: '/a/path/',
  method: 'POST',
  handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){
      
      body += data
    })
    request.payload.file.on('end', function (){

      console.log(body) 
    })
  },
  config: {
    output : 'stream',
    parse : true
  }
}
```



Route information can be found in the Hapi directory
in `node_modules` under Reference.md.

