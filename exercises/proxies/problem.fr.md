Un proxy vous permet de relayer des requêtes d’un serveur/service à un autre.

Créez un serveur qui écoute sur le numéro de port passé en argument de ligne
de commande, qui accepte toute requête sur le chemin `/proxy` et les relaie
à `http://localhost:65535/proxy`.

-----------------------------------------------------------------

## Conseils

La clé `proxy` sert à générer un gestionnaire de proxy inverse.

```js
handler: {
    proxy: {
        host: '127.0.0.1',
        port: 65535
    }
}
```

-----------------------------------------------------------------

En savoir plus sur le fond : http://fr.wikipedia.org/wiki/Proxy_inverse
