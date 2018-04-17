'`Joi`'オブジェクトを使用することにより、パス、リクエストデータ、レスポンスに
対し、検証ルールを高度にカスタマイズすることが可能です。

ログインエンドポイントを提供するサーバーを作成し、'`/login`'へのHTTP `POST`
リクエストに対し、"login successful"を返します。

このエンドポイントはリクエストデータで以下の変数を受け付けます。

```isGuest```       (ブール値)
```username```      (文字列)
```accessToken```   (英数字)
```password```      (英数字)

バリデーションは以下の条件をチェックします。

i)   ```isGuest``` がfalseの場合, ```username```が必要となる。
ii)  ```password```と```accessToken```は同時に使用することは出来ない。
iii) 上記で指定されたパラメータ以外のものが送られて来た場合、検証はPASSとする。

-----------------------------------------------------------------
## ヒント

コマンドラインから渡されたポート番号をlistenするサーバーを作ります。
ルートのコンフィギュレーションは以下のようなものになるでしょう。

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

ルートに関する情報は以下を参照して下さい。

    https://hapijs.com/api

Joiの情報は以下にあります。

    {rootdir:/node_modules/joi/README.md}
