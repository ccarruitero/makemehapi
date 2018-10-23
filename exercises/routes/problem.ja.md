コマンドラインから渡されたポート番号をlistenするhapiサーバーを作ります。
HTTP GETリクエストに対し、"Hello [name]"を返します。
`/{name}`の形式で渡されるパスパラメータを取得して[name]の部分を置き換えて下さい。

サーバープログラムが完成すれば、以下のコマンドでテスト環境での実行が出来ます。

  `{appname} run program.js`

期待した結果が得られれば、以下のコマンドで結果の検証を行って下さい。

  `{appname} verify program.js`

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

以下のようなコードをルートのハンドラとして追加して下さい。

```js
function handler (request, h) {
    return `Hello  ${request.params.name}`;
}
```
