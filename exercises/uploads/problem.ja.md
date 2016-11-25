以下のパスでファイルのアップロードを受け付けるサーバーを作成します。

```
/upload
```

このエンドポイントは次のキーを受け付けます。

description : ファイルの説明文となる文字列。内容は何でも構いません。

file : アップロードするファイル。

エンドポイントからは、以下のパターンに従ったJSONを返します。

```json
{
  description :  //フォームから送られてきたdescription
  file : {
    data :    //アップロードされたファイルの内容
    filename:  //アップロードされたファイル名
    headers :   //hapiから得られるファイルヘッダー
  }
}
```

-----------------------------------------------------------------
## ヒント

ファイルを入力として受け付けるためには、リクエストは```multipart/form-data```
のヘッダーを使用する必要があります。

以下をルートのコンフィギュレーションで設定することにより、ファイルを読み取り用
ストリームとして取得することが出来ます。

```js

payload: {
    output : 'stream',
    parse : true
}
```

ファイルを'`file`'パラメータとしてアップロードした場合、ハンドラ関数中では
以下のようなコードを使用してファイルにアクセスすることが可能です。

```js
handler: function (request, reply) {
    var body = '';
    request.payload.file.on('data', function (data){

      body += data
    });

    request.payload.file.on('end', function (){

      console.log(body);
    });
}
```

ファイルのアップロードに関しては、hapiのreplyインターフェースのドキュメントに
詳しい情報があります。

[API docs](http://hapijs.com/api#reply-interface).

