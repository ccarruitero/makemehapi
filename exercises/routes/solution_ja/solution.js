var Hapi = require('hapi');

(async () => {
    try {
        const server = Hapi.Server({
            host: 'localhost',
            port: Number(process.argv[2] || 8080)
        });

        server.route({
            path: '/{name}',
            method: 'GET',
            handler: function (request, h) {
                return `Hello ${request.params.name} `;
                // より安全な方法は以下です:
                //
                //     return `Hello ${encodeURIComponent(request.params.name)}`;
                //
                // 'encodeURIComponent'は以下の文字以外、全ての文字をエスケープします。
                //    * 英数字
                //    * 右の記号　 - _ . ! ~ * ' ( )
                // ユーザーの入力パラメータに対し、'encodeURIComponent'を使用すべき理由は
                // 以下を参照して下さい。
                //   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();
