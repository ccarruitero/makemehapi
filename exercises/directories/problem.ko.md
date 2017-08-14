서버를 만들어봅시다. `/foo/bar/baz/file.html` 경로의 요청에 대해 특정 디렉터리에 있는 파일(예: public/file.html)을 반환해주도록 설정해 주세요. 파일에는 다음 내용이 포함되도록 해주세요.

```html
<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
```

-----------------------------------------------------------------
## 힌트

이번 과제에서는 이전 과제와 마찬가지로, 정적인 디렉터리의 내용을 제공하려면 `inert` 플러그인을 `require` 해서 `register` 해야 합니다.

`handler`는 다음과 같이 디렉터리 경로를 포함한 객체로 선언될 수 있습니다.

```js
handler: {
    directory: { path: './public' }
}
```

디렉터리 `handler`에서 사용하는 경로는, 반드시 path 문자열 뒤에 path 매개변수를 붙여야 합니다. 경로 지정에 사용되는 path는 파일 시스템 디렉터리 구조와 일치하지 않아도 됩니다. 매개변수 이름은 아무거나 괜찮습니다.


```js
path: "/path/to/somewhere/{param}"
```

실제 사용 시에는, 프로그램 디렉터리 안에 있는 `public` 디렉터리에 절대 경로를 지정해야 하는 것에 유의하세요. 이를 위해선 `path` 모듈의 `join()` 함수와 `__dirname`이라는 글로벌 변수가 필요할 것입니다.
