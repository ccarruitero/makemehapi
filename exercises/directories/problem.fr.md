Créez un serveur qui route toute requête vers le chemin
`/foo/bar/baz/file.html` vers un fichier présent dans un répertoire, par
exemple `public/file.html`.  Ce fichier contiendrait :

```html
<html>
    <head><title>Salut les répertoires</title></head>
    <body>
        Salut les répertoires
    </body>
</html>
```

-----------------------------------------------------------------

## Conseils

Les gestionnaires peuvent être un objet avec un chemin vers un répertoire :

```js
handler: {
    directory: { path: './public' }
}
```

Les routes reposant sur un gestionnaire de type `directory` doivent inclure un
paramètre à la fin de la définition de leur chemin d’accès.  Ce chemin d’accès
associé à la route n’a pas besoin de correspondre à un quelconque répertoire
présent sur le disque.  De même, le nom du paramètre à la fin du chemin n’a pas
d’importance particulière.

```js
path: "/chemin/vers/quelquepart/{param}"
```

Attention, dans la pratique, vous devrez fournir un chemin absolu pointant
vers un répertoire `public` situé dans le répertoire courant.  Vous aurez
sans doute besoin du module noyau `path`, de sa fonction `join()`, et de
la variable globale `__dirname` pour y arriver.
