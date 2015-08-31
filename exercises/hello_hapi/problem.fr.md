Créez un serveur hapi qui écoute sur le numéro de port passé dans
la ligne de commande, et répond par « Bonjour hapi » aux requêtes
HTTP GET envoyées sur `/`.

L’exercice enverra des requêtes à votre serveur et vérifiera leurs réponses.

-----------------------------------------------------------------

## Conseils

Créez pour commencer un serveur qui écoute par défaut sur le port 8080,
sauf si on lui passe un numéro de port explicite via la ligne de commande,
à l’aide du code suivant :

```js
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

On ajoute les routes (les chemins des points d’accès) à l’aide de la
fonction `route()` :

```js
server.route({ path: '/', method: 'GET', handler: anonOrYourFunction });
```

Les gestionnaires de requête peuvent être des fonctions anonymes, ou des
fonctions déclarées ailleurs (c’est du JavaScript, quoi :P), mais tous
doivent avoir la même signature :

```js
function handler(request, reply) {

    // `request` a toutes les informations
    // `reply` gère la réponse au client

    reply({ mustFlow: true });
}
```

Pour que le serveur commence à écouter sur le port défini au préalable,
appelez la fonction `start()` :

```js
server.start(function () {});
```
-----------------------------------------------------------------
