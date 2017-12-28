서버를 만들어 봅시다. `/` request에 정적 HTML 파일인 `index.html`을 반환하도록 해주세요. `index.html`의 내용은 다음과 같습니다.

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

-----------------------------------------------------------------
## 힌트

이번 과제에는 `inert` 모듈이 필요합니다. 이 모듈은 hapi 플러그인으로, 정적 파일과 디렉터리를 다룹니다. 정적 파일을 서비스하려면 플러그인을 코드에 등록해야 합니다.

```js
var Inert = require('inert');

await server.register(Inert);
```

함수 대신 객체로 `handler`를 선언할 수도 있습니다. 객체는 다음 항목 중 반드시 하나는 가지고 있어야 합니다. `file`(`inert` 플러그인 필요), `directory`(`inert` 플러그인 필요), `proxy`(`h2o2` 플러그인 필요), `view`(`vision` 플러그인 필요)

다음과 같이 `handler`에 `file` 키를 갖는 객체를 설정할 수 있습니다.

```js
handler: {
    file: "index.html"
}
```

실제 사용 시에는, 프로그램 디렉터리 안에 있는 `index.html`에 절대 경로를 지정해야 하는 것에 유의하세요. 이를 위해선 `path` 모듈의 `join()` 함수와 `__dirname`이라는 글로벌 변수가 필요할 것입니다.

