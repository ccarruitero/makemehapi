hapi 서버를 만들어봅시다. `/`로 들어오는 HTTP GET request에 스트림을 이용하여 ROT13
변환을 거친 파일 내용을 돌려주도록 해주세요. 변환할 파일의 내용은 다음과 같습니다.

```
The Pursuit of Hapi-ness
```

출력되는 내용은 다음과 같습니다.

```
Gur Chefhvg bs Uncv-arff
```

-----------------------------------------------------------------
##힌트

### 스트림

`reply` hapi 핸들러는 스트림을 인수로 받을 수 있습니다.

### 파일

`fs` 모듈은 `createReadStream(pathToFile)`이라는 유용한 함수가 있습니다.

### 간단한 ROT13

이번 과제에서 `rot13-transform`을 사용할 것입니다. 다음 명령어로 rot13-transform을 설치하세요.

```sh
npm install rot13-transform
```
