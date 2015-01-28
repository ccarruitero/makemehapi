Create a server with an endpoint that accepts an uploaded file to the following path:

```
/upload
```

The endpoint should accept the following keys: description and file. The ```description``` field should be a string describing whatever you want, and ```file``` should be an uploaded file. The endpoint should return a JSON object that follows the following pattern: 


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

To accept a file as input, your request should use the ```multipart/form-data``` header. 

We can get a file as readable stream by adding the following in the route configuration:

```js

config: {
    output : 'stream',
    parse : true
}
```

If file uploaded with parameter ```file``` then we can read it in the handler function this way:
   
```js
handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){
      
      body += data
    });

    request.payload.file.on('end', function (){

      console.log(body);
    });
}
```

More information about file uploading can be found in the reply interface of the hapi [API docs](http://hapijs.com/api#reply-interface).

