`Joi`를 사용하면 경로, request, response에서의 유효성 검사를 고도로 커스터마이징 할 수 있습니다.

로그인 endpoint를 제공하고 `/login`에 HTTP `POST` request가 보내졌을 때 "login successful"이라고 응답하는 서버를 만드세요.

endpoint는 request에서 다음 변수들을 받아들입니다.

`isGuest`       (불리언)
`username`      (문자열)
`accessToken`   (영숫자)
`password`      (영숫자)

유효성 검사는 다음 조건으로 구성돼야 합니다.

i)   `isGuest`가 거짓이라면, `username`가 필요하다.
ii)  `password`는 `accessToken`과 동시에 사용할 수 없다.
iii) 위의 기재된 매개 변수 이외의 것들이 보내지면 유효성 검사를 통과시킨다.

유효성 검사가 성공적이라면, handler는 `login successful`라는 문자열을 반환해야 한다.

-----------------------------------------------------------------
## 힌트

`8080` 포트를 사용하는 서버를 만드세요. route 설정을 다음과 같습니다.

```js

var routeConfig = {
    path: '/a/path/',
    method: 'POST',
    handler: myHandler,
    config: {
        validate: {
           payload: Joi.object({
                username: Joi.string(),
                password: Joi.string().alphanum(),
                accessToken: Joi.string().alphanum(),
                birthyear: Joi.number().integer().min(1900).max(2013),
                email: Joi.string().email()
           })
           .options({allowUnknown: true})
           .with('username', 'birthyear')
           .without('password', 'accessToken')
        }
    }
}
```

route에 관한 자세한 정보는 다음을 참조하세요.

    https://hapijs.com/api

Joi에 관한 자세한 정보는 다음을 참조하세요.

    {rootdir:/node_modules/joi/README.md}
