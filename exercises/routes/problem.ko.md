hapi 서버를 만들어봅시다. 커맨드 라인으로 포트 번호를 받아 설정하고, `/{name}`으로 들어오는 HTTP GET request에 "Hello [name]"을 출력하도록 하세요. [name]에는 GET request의 `{name}`이 들어갑니다.

서버를 만들었다면, 다음 명령어로 테스트 환경에서 실행 가능합니다.

  `{appname} run program.js`

테스트 결과가 괜찮다면 다음 커맨드로 정답을 확인해보세요.

  `{appname} verify program.js`

-----------------------------------------------------------------
## 힌트

`8080` 포트를 사용하는 서버를 만드세요. 커맨드 라인으로부터 아무것도 전달되지 않는다면 다음 코드를 사용하세요.

```js
var Hapi = require('hapi');
var server = Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

경로 handler를 다음과 같은 코드로 추가해주세요.

```js
function handler (request, h) {
    return `Hello ${request.params.name}`;
}
```
