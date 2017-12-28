Basic 인증은 유저명과 비밀번호만으로 앱으로의 접근을 보호할 수 있는 간단한 인증 방법입니다. 쿠키와 세션은 필요 없으며 표준 HTTP 헤더만 있으면 됩니다.

hapi 서버를 만들어 봅시다. 커맨드 라인으로 포트 번호를 받아 설정하고, Basic 인증을 사용해 봅시다. 인증에 사용되는 유저명은 "hapi"로, 비밀번호는 "auth"로 설정해주세요. 인증에 실패한 경우는 서버가 HTTP 401 상태 코드를 반환하도록 해주세요.

--------------------

## 힌트

다음 명령어를 실행해서, Basic 인증을 다루는 플러그인을 설치해주세요.

```sh
npm install hapi-auth-basic
```

설치한 `hapi-auth-basic` 플러그인을 등록하고, 다음과 같이 임의의 이름(simple)을 지정한 Basic 인증을 서버의 strategy로 설정해주세요. 인증 설정이 끝났다면, 서버의 라우트 설정의 `auth` 프로퍼티에 strategy를 설정할 때 사용한 이름을 지정해야 합니다.

```js
server.auth.strategy('simple', 'basic', { validateFunc: validate });
server.auth.default('simple');

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {

        return 'welcome';
    }
});
```

Hapi-auth-basic에 관한 자세한 정보는 아래 URL에서 확인하세요.

    {rootdir:/node_modules/hapi-auth-basic/README.md}

