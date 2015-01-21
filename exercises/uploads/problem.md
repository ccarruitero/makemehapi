Create a server that has a route configuration exposing a upload endpoint which can be access using 'POST' method. Specifically:

```
/upload
```

A form with description (string) and file (file) can be submitted to the upload endpoint, which only accepts ```multipart/form-data``` content-type requests. On submit, the following json response is expected:

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

We can get the file as a readable stream by adding following config object in the server route:

```js

config: {
    output : 'stream',
    parse : true
}

```

If we've uploaded the file with the parameter ```file``` then we can access it in the handler function using following code:

```js
handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){
      body += data;
    })
    request.payload.file.on('end', function (){
      console.log(body);
    })
}

```

More information about handling file upload can be found in the Hapi directory in `node_modules` under Reference.md.

