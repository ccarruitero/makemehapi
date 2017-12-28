'`/?name=Handling`'というリクエストに対し、テンプレート(`templates/index.html`)を
使ってレスポンスするサーバーを作ります。このテンプレートは以下のHTMLを出力します。

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

-----------------------------------------------------------------
## ヒント

このエクササイズでは、`vision`モジュールが必要となります。これはhapiのプラグインで、
テンプレートを処理するためのものです。このモジュールを使用するためには、下記のように
コード中でプラグインを登録する必要があります。

```js
var Vision = require('vision');

await server.register(Vision);
```

ハンドラのviewキーを使用し、レスポンスの生成に使用するテンプレートを指定します。

```js
handler: {
    view: "index.html"
}
```

サーバーメソッド'`server.views()`'を使い、サーバー中にあるテンプレートの
設定を行うことが出来ます。このメソッドは設定オブジェクト(configurationオブジェクト)
を引数にとります。このオブジェクトで以下を設定することが出来ます。

* 各ファイル拡張子に対する、テンプレートエンジン
* テンプレートファイルのあるディレクトリへのパス

```js
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
```

このエクササイズではHandlebarsを使用します。以下のコマンドでHanlebarsを
インストールすることが出来ます。

```sh
npm install handlebars
```

Handlebarsテンプレートを使用することにより、HTML中に変数を直接書くことが
出来ます。変数は２重の中括弧で囲む形式で記述します。(例: `{{foo}}`)

テンプレートはリクエストから情報を得ます。例えばURLを通じて渡される
クエリパラメータです。このクエリパラメータは`query`オブジェクトとなり、
テンプレート中で利用可能となります。クエリパラメータは自動的に解釈・処理
されます。ルートの'`path`'で宣言は行いません。


```html
<div>{{query.paramName}}</div>
```
