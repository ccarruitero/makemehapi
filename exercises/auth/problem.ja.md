Basic認証はあなたのアプリケーションを保護するシンプルな方法で、ユーザー名と
パスワードのみを使用します。クッキーやセッションは必要とせず、標準の
HTTPヘッダーのみを使用します。

コマンドラインから渡されるポート番号をlistenする、Basic認証で保護された
サーバーを作成します。認証のユーザー名は"hapi"、パスワードは"auth"です。
認証に失敗した場合はHTTPステータスコードの401を返して下さい。

--------------------

## ヒント

Basic認証を扱うhapiのプラグインがあります。以下のコマンドでインストール
して下さい。

```sh
npm install hapi-auth-basic
```

'`hapi-auth-basic`'プラグインを登録し、`basic`認証ストラテジを名前を
付けて設定して下さい。設定が完了すれば、その認証ストラテジの名前に対し、
'`auth`'プロパティをルートコンフィギュレーション中で設定して下さい。

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


Hapi-auth-basicの情報は以下にあります。

    {rootdir:/node_modules/hapi-auth-basic/README.md}

