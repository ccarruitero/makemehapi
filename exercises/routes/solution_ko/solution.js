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
                // 다음 코드가 더 안전합니다
                //
                //     return `Hello ${encodeURIComponent(request.params.name)}`;
                //
                // encodeURIComponent는 이하의 문자 이외에는 전부 escape 시킵니다.
                // 영숫자, - _ . ! ~ * ' ( )
                // 유저가 입력한 매개변수에 대해 왜 encodeURIComponent를 적용해야 하는지에 대한 이유는 아래 URL을 참고하세요.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
            }
        });

        await server.start();

    } catch (error) {
        console.log(error);
    }
})();