`set-cookie`と`check-cookie`の２つのエンドポイントを提供するサーバーを
作成します。これらのエンドポイントは`GET`リクエストによりアクセス可能で、
以下のようにアクセスします。

```
/set-cookie
```

`set-cookie`エンドポイントは'session'というキーに対し、値として
`{ key: 'makemehapi' }`をクッキーに設定します。クッキーの条件は
以下の通りです。

* `base64json`としてエンコードする
* 有効期間は`10 ms`
* スコープのドメインは`localhost`

レスポンスはこのエクササイズでは特に重要ではありませんので、何でも
構いません。

```
/check-cookie
```

`check-cookie`エンドポイントは`/set-cookie`エンドポイントで受け取った
クッキーを使用します。`session`キーがクッキーに存在していれば、
`{ user: 'hapi' }`を返し、それ以外は`unauthorized`のアクセス
エラーを返します。

--------------------

## ヒント

'`server.route()`'関数では以下のようなオプションが必要となるでしょう。

```js
config: {
    state: {
        parse: true,
        failAction: 'log'
    }
}
```

このオプションを使用することにより、サーバーはクッキーを様々な方法で取り扱う
ことが出来ます。

`hapi`は特定のURLに対するクッキーを管理する機能を提供します。

```js
server.state('session', {
    path: '/',
});
```

リクエストにリプライする際、以下のようなコードでクッキーをセットする
ことが出来ます。

```js
reply('success').state('session', 'session')
```

クッキーの値はサーバーのstateに保存され、以下のようなコードでアクセス
することが出来ます。

```js
var session = request.state.session;
```

クッキーの取り扱いに関しての詳細な情報は以下にあります。

[API](http://hapijs.com/api).

このエクササイズでは必要ありませんが、[Boom](https://www.npmjs.com/package/boom)
を使用することにより、より簡単に`unauthorized`エラーを正しいHTTPステータスコードで
返すことが出来ます。

```js
var Boom = require('boom');
```

```js
reply(Boom.unauthorized('Missing authentication'));
```
