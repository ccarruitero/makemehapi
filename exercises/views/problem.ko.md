`/?name=Handling`이라는 request에 `templates/index.html`에 위치한 템플릿을 사용해서 응답하는 서버를 만드세요. 템플릿이 출력하는 HTML은 다음과 같습니다.

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

이번 과제는 `vision`이 필요하므로 설치해주세요. 이 모듈은 템플릿을 렌더링하는 hapi 플러그인 입니다. 다음과 같이 플러그인을 등록하세요.

```js
var Vision = require('vision');

await server.register(Vision);
```

`view` 키는 response를 만드는데 사용되는 템플릿을 지정하는 데 사용됩니다.

```js
handler: {
    view: "index.html"
}
```

`server.views()`는 서버에서 사용되는 템플릿을 구성하기 위한 서버 메서드 입니다.
이 메서드는 설정 객체를 받아서 파일 확장자에 따라 다른 엔진을 설정할 수 있게 해줍니다. 또한 템플릿의 디렉터리 경로를 설정할 수도 있습니다.

```js
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
```

이번 과제에서는 Handlebars를 사용합니다. 다음 명령어로 설치하세요.

```sh
npm install handlebars
```

Handlebars 템플릿을 사용하면, HTML 내에서 변수를 렌더링할 수 있습니다. 사용법은 다음과 같습니다. `{{foo}}`. 변수를 중괄호로 두 번 묶어주세요.

템플릿은 request로부터 몇 가지 정보를 받습니다. 예를 들어 URL을 통해서 전달되는 쿼리 매개변수가 있습니다. 이 매개변수는 `query` 객체가 되며, 템플릿 내에서 사용할 수 있습니다. 쿼리 매개변수는 자동으로 해석되며, route의 `path`에 선언되지 않습니다.

```html
<div>{{query.paramName}}</div>
```
