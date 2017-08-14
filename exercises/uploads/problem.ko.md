서버를 만들어봅시다. 다음 경로로 업로드된 파일을 받아들이는 endpoint를 설정하세요.

```
/upload
```

endpoint는 description과 file이라는 두 개의 키를 필수로 받아야 합니다. `description` 필드에는 문자열이 들어가야 하며 아무 내용이나 적어도 됩니다. `file` 필드는 업로드된 파일이어야 합니다. endpoint는 아래와 같은 형식의 JSON 객체를 반환해야 합니다.

```json
{
  description :  //form으로부터의 description
  file : {
    data :    //업로드된 파일의 내용
    filename:  //업로드된 파일의 이름
    headers :   //hapi가 제공하는 파일 헤더
  }
}
```

-----------------------------------------------------------------
## 힌트

파일이 정상적으로 업로드되려면, request에 `multipart/form-data` 헤더를 사용해야 합니다.

경로 구성에 다음 코드를 추가하여, 파일을 읽기 가능한 스트림으로 만들 수 있습니다.

```js

payload: {
    output : 'stream',
    parse : true
}
```

`file`이라는 매개변수와 함께 파일을 업로드 하면 handler 함수 내에서 다음과 같은 코드로 접근할 수 있습니다.

```js
handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){

      body += data;
    });

    request.payload.file.on('end', function (){

      console.log(body);
    });
}
```

파일 업로드에 관한 자세한 정보는 hapi의 reply 인터페이스에 관한 api를 참조하세요. [API docs](http://hapijs.com/api#reply-interface).

