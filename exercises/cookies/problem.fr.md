Créez un serveur qui a une configuration de route exposant des points d’accès
`set-cookie` et `check-cookie`, accessibles via des requêtes GET, décrits
ci-après.

```
/set-cookie
```

Le point d’accès `set-cookie` définit un cookie avec une clé `'session'` et une
valeur `{ key: 'makemehapi' }`.  Le cookie doit être encodé au format
`base64json`, expirer au bout de 10ms et être associé au domaine `localhost`.
La réponse à la requête est sans importance pour cette exercice : mettez ce
que vous voulez.

```
/check-cookie
```

Le point d’accès `check-cookie` doit pouvoir recevoir les cookies définis par
`/set-cookie`.  Si la clé `'session'` est présente, renvoyez simplement comme
réponse `{ user: 'hapi' }`, sinon renvoyez une erreur d’accès HTTP
`unauthorized`.

--------------------

## Conseils

Dans votre appel à `server.route()`, vous utiliserez sans doute les options
suivantes :

```js
config: {
    state: {
        parse: true,
        failAction: 'log'
    }
}
```

Grâce à celles-ci, vous pourrez configurer votre serveur pour traiter les
cookies de la façon qui vous convient.

Hapi permet une gestion des cookies par chemin d’URL spécifique, par exemple :

```js
server.state('session', {
    path: '/',
});
```

Vous pouvez définir des cookies lors de la réponse, comme ceci :

```js
reply('success').state('session', 'session')
```

Les valeurs de cookies sont stockées dans l’état serveur, et accessibles avec
du code comme celui-ci :

```js
var session = request.state.session;
```

Vous trouverez davantage d’informations sur la gestion des cookies dans la
documentation de l’API de Hapi, soit en local :

  {rootdir:/node_modules/hapi/API.md}

soit en ligne :

  [Documentation API](http://hapijs.com/api)
