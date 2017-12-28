const Hapi = require('hapi');

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
                return `Bonjour ${request.params.name}`;
                // Une alternative plus sécurisée serait :
                //
                //     return `Bonjour ${encodeURIComponent(request.params.name)}`;
                //
                // `encodeURIComponent` échape tous les caractères spéciaux à l’exception
                // des suivants : alphabet simple, chiffres décimaux, - _ . ! ~ * ' ( )
                // Voir https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
                // pour de plus amples détails sur les raisons qui devraient vous faire utiliser
                // `encodeURIComponent` pour toute donnée saisie par l’utilisateur.
            }
        });

        await server.start();

        console.log(`Serveur fonctionnant à: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
})();
