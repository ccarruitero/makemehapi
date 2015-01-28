Create a server that with an upload endpoint accessible by using a 'POST' method with the path:

```
/upload
```

A form with the description (string) and a file (file) can be submitted to the upload endpoint, which only accepts ```multipart/form-data``` content-type requests. The following JSON should be returned: 

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

We can get a file as readable stream by adding the following in the route configuration:

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

