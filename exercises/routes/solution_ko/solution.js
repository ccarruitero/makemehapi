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
        // 이하는 더 안전한 방법입니다.
        //
        //     reply('Hello ' + encodeURIComponent(request.params.name));
        //
        // encodeURIComponent는 이하의 문자 이외에는 전부 escape 시킵니다.
        // 영숫자, - _ . ! ~ * ' ( )
        //  유저가 입력한 매개변수에 대해 왜 encodeURIComponent를 적용해야 하는지에 대한 이유는 아래 URL을 참고하세요.
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    }
});

server.start((err) => {
    if (err) throw err;
});
