서버를 만들어봅시다. VIEWS 과제에서 만든 템플릿을 이용해서 `/?name=Helping&suffix=!`로의 requests에 응답하도록 해주세요.

템플릿에 쿼리 매개변수를 직접 넣는 대신, `helpers/helper.js`에 helper를 만들고 템플릿에서 helper를 이용하여 쿼리 파라미터 `name`을 출력하세요.

```html
<html>
    <head><title>Hello Helping!</title></head>
    <body>
        Hello Helping!
    </body>
</html>
```

helper를 사용해서 쿼리 매개변수 `name`과 `suffix`를 결합해주세요.

-----------------------------------------------------------------
## 힌트

템플릿을 렌더링할 때 `vision` 플러그인을 등록하는 걸 잊지 마세요.

helper는 템플릿 내에서, 템플릿 컨텍스트와 기타 입력을 통해 변환과 기타 데이터 조작을 수행하는 함수입니다.

helper의 경로는 서버의 옵션에서 지정할 수 있습니다. 지정된 디렉터리에 있는 모든 `.js` 파일이 로드되고 파일명은 helper의 이름이 됩니다.

```js
var options = {
    views: {
        ...
        helpersPath: 'helpers'
    }
};
```

각 파일은 `function(context)` 형식의 메서드를 export 해야 하며, 문자열을 반환해야 합니다.

```
module.exports = function(context) {
    return context.data.root.query.foo;
}
```

완성된 helper 함수는 다음과 같이 템플릿 안에서 사용됩니다.

```html
<div>{{helper}}</div>
```
