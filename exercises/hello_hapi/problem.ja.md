コマンドラインから渡されたポート番号をlistenするhapiサーバーを作ります。
'/'に対するHTTP GETリクエストに対し、"Hello hapi"を返しましょう。

このワークショッパーがあなたのサーバーにリクエストを発行し、結果を検証します。

-----------------------------------------------------------------
## ヒント

以下のコードでは、コマンドラインから何も渡されなかった場合ポート`8080`をlistenします。

```js
var Hapi = require('hapi');
var server = Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

ルートは`route`関数で追加することが出来ます。

```js
server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```

ハンドラには無名関数、あるいは別に定義された関数を設定することが出来ます。
(Javascriptではよくあることですね！) 但し、全てのハンドラは以下の形式
でなければなりません。

```js
function handler(request, reply) {

    // Requestが全ての情報を持ちます
    // Replyがクライアントへのレスポンスを扱います

    reply();
}
```

`start`関数をコールすることにより、サーバーは指定されたポートのlistenを始めます。
`start`関数にはコールバックが必要となることに気をつけて下さい。

```js
await server.start();

console.log('Server running at:', server.info.uri);
```
-----------------------------------------------------------------
