서버를 만들어봅시다. 'GET' request로 접근 가능한 `set-cookie`와 `check-cookie` 두 개의 endpoint를 라우트 설정에 추가해주세요.

```
/set-cookie
```

`set-cookie` endpoint는 'session'이라는 키로 `{ key: 'makemehapi' }` 값을 쿠키에 저장할 것입니다. 쿠키는 `base64json`으로 암호화하고, `10 ms`가 지나면 소멸해야 하며, 도메인 범위는 `localhost`여야 합니다. response는 이번 과제에서 별로 중요하지 않으므로, 여러분에게 맡기겠습니다.

```
/check-cookie
```

`check-cookie` endpoint는 `/set-cookie` endpoint로부터 쿠키를 전달받습니다. 쿠키에 `session` 키가 있다면 `{ user: 'hapi' }`를 반환하고, 없다면 `unauthorized` 접근 오류를 반환하도록 해주세요.

--------------------

## 힌트

`server.route()` 함수에 다음과 같은 옵션을 추가하세요.

```js
config: {
    state: {
        parse: true,
        failAction: 'log'
    }
}
```

이 옵션을 사용해서, 서버가 쿠키를 다양한 방법으로 다룰 수 있게 설정할 수 있습니다.

`hapi`는 특정 URL에 대해 쿠키를 관리하는 기능을 제공합니다.

```js
server.state('session', {
    path: '/',
});
```

request에 응답할 때, 다음과 같이 쿠키를 설정할 수 있습니다.

```js
reply('success').state('session', 'session')
```

쿠키값은 서버의 state에 보존되어, 다음과 같은 코드로 접근할 수 있습니다.

```js
var session = request.state.session;
```

`hapi`에서 쿠키를 다루는 법에 대해 더 알고 싶으시다면, 다음 URL에서 확인하세요. [API](http://hapijs.com/api).

이번 과제에서는 필요하지 않지만, Boom 모듈([Boom](https://www.npmjs.com/package/boom))을 사용하면 간단하게 `unauthorized` 오류를 올바른 HTTP 상태 코드와 함께 반환할 수 있습니다. 다음과 같이 말이죠.

```js
var Boom = require('boom');
```

```js
reply(Boom.unauthorized('Missing authentication'));
```
