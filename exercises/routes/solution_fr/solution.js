var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Bonjour ' + request.params.name);
        // Une alternative plus sécurisée serait :
        //
        //     reply('Bonjour ' + encodeURIComponent(request.params.name));
        //
        // `encodeURIComponent` échape tous les caractères spéciaux à l’exception
        // des suivants : alphabet simple, chiffres décimaux, - _ . ! ~ * ' ( )
        // Voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
        // pour de plus amples détails sur les raisons qui devraient vous faire utiliser
        // `encodeURIComponent` pour toute donnée saisie par l’utilisateur.
    }
});

server.start(function () {});
