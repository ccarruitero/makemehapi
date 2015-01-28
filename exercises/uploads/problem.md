Create a server that has a route configuration exposing a upload endpoint which can be access using 'POST' method. Specifically:

```
/upload
```

form with description (string) and file (file) can be submitted to upload endpoint, upload endpoint only accept ```multipart/form-data``` content-type request. On form submit request to upload endpoint following response is expected

```json
{
  description :  //description from form
  file : {
    data :    //content of file uploaded 
    filename:  //name of file uploaded
    headers :   //file header provided by hapi 
  }
} 
```

-----------------------------------------------------------------
##HINTS

We can get file as readable stream by adding following config in route   

```js

config: {
    output : 'stream',
    parse : true
}

```

If file uploaded with parameter ```file``` then we can read it in handler function from route using following code
   
```js
handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){
      
      body += data
    })
    request.payload.file.on('end', function (){

      console.log(body) 
    })
}

```

More information about handling file upload can be found in the Hapi directory in `node_modules` under Reference.md.

