hapi 앱의 각 endpoint는 route 설정을 통해 다양하게 커스터마이징 할 수 있습니다. 그중 하나가 유효성 검사입니다.

유효성 검사는 경로의 매개변수, request, response에서 설정할 수 있습니다. 유효성 검사를 위한 객체는 `Joi`라는 유효성 검사 프레임워크에 정의되어 있습니다.

`chickens`라는 endpoint를 제공하는 route 설정을 가진 서버를 만들어 보세요. 구체적으로는 다음과 같습니다.

```
/chickens
```

route 설정 내에 `breed`라는 유효성 검사가 추가된 경로 매개변수를 추가하세요. 이번 과제에서는 `breed`가 설정되어 있는지만 확인하며, 유효성 검사의 내용은 확인하지 않습니다.

-----------------------------------------------------------------
## 힌트

다음 코드를 사용해서 `8080` 포트를 사용하는 서버를 만드세요.

```js
var routeConfig = {
    path: '/a/path/{with}/{parameters}',
    method: 'GET',
    handler: myHandler,
    config: {
        validate: {
            params: {
                with: Joi.string().required(),
                parameters: Joi.string().required()
            }
        }
    }
}
```

route에 관한 정보는 여기서 확인하세요.

    https://hapijs.com/api

Joi에 관한 정보는 여기서 확인하세요.

    {rootdir:/node_modules/joi/README.md}

Joi를 설치하는 명령어는 다음과 같습니다.

```sh
npm install joi
```
