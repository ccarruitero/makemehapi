Créez un serveur qui répond aux requêtes sur `/` avec un fichier HTML
statique nommé `index.html` qui contiendra le code suivant :

```html
<html>
    <head><title>Coucou du gestionnaire</title></head>
    <body>
        Salut, je suis servi grâce au gestionnaire
    </body>
</html>
```

-----------------------------------------------------------------

## Conseils

Vous pouvez déclarer comme gestionnaires des objets plutôt que des fonctions.
Un tel objet doit contenir une des clés suivantes : `file`, `directory`,
`proxy` ou `view`.

Par exemple, `handler` peut recevoir comme valeur un objet avec la clé `file` :

```js
handler: {
    file: "index.html"
}
```

Attention, dans la pratique, vous devrez fournir un chemin absolu pointant
vers un fichier `index.html` situé dans le répertoire courant.  Vous aurez
sans doute besoin du module noyau `path`, de sa fonction `join()`, et de
la variable globale `__dirname` pour y arriver.
