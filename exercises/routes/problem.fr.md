Créez un serveur hapi qui écoute sur le numéro de port passé en
ligne de commande, et affiche « Bonjour [nom] », sachant que `[nom]`
est remplacé par un paramètre de chemin fourni par uner requête GET
sur `/{name}`.

Quand vous aurez terminé le serveur, vous pouvez l’exécuter dans
l’environnement de test avec :

```sh
{appname} run program.js
```

Et quand vous serez prêt-e à valider votre exercice, faites :

```sh
{appname} verify program.js
```

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

Ajoutez un gestionnaire de route similaire à celui-ci :

```js
function handler (request, reply) {
    reply('Bonjour ' + request.params.name);
}
```
