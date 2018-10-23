hapi 서버를 만들어 봅시다. 커맨드 라인으로 포트 번호를 받아 설정하고, `/`로 들어오는 HTTP GET request에 "Hello hapi"라고 응답하도록 만들어 봅시다.

이 워크숍은 서버에 request를 보내고, 출력을 확인합니다.

-----------------------------------------------------------------
## 힌트

`8080` 포트를 사용하는 서버를 만드세요. 커맨드 라인에서 아무것도 전달되지 않는다면 다음 코드를 사용하세요.

```js
var Hapi = require('hapi');
var server = Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

경로는 `route` 함수를 통해 추가하세요.

```js
server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```

핸들러는 익명 함수나 별도로 선언할 수 있습니다. (자바스크립트처럼요! :P) 단, 반드시 아래와 같이 작성해야 합니다.

```js
function handler(request, reply) {

    // Request has all information
    // Reply handles client response

    reply();
}
```

`start` 함수를 호출해서 지정된 포트를 사용하는 서버를 가져오세요. `start` 함수를 호출할 때 콜백을 작성해야 하는 것도 잊지 마세요.

```js
await server.start();

console.log('Server running at:', server.info.uri);
```
-----------------------------------------------------------------
