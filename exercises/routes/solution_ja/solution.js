var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
        reply('Hello ' + request.params.name);
        // より安全な方法は以下です:
        //
        //     reply('Hello ' + encodeURIComponent(request.params.name));
        //
        // 'encodeURIComponent'は以下の文字以外、全ての文字をエスケープします。
        //    * 英数字
        //    * 右の記号　 - _ . ! ~ * ' ( )
        // ユーザーの入力パラメータに対し、'encodeURIComponent'を使用すべき理由は
        // 以下を参照して下さい。
        //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    }
});

server.start((err) => {
    if (err) throw err;
});
