Créez un serveur qui répond aux requêtes sur `/?name=assistant&suffix=!` en
utilisant le gabarit de l’exercice VUES.

Au lieu de placer le paramètre de la *query string* directement dans le template,
créez un helper dans `helpers/helper.js` et utilisez-le dans le template pour
afficher le paramètre de *query string* `name`.

```html
<html>
    <head><title>Bonjour assistant!</title></head>
    <body>
        Bonjour assistant!
    </body>
</html>
```

Le helper doit concaténer les paramètres de *query string* `name` et `suffix`.

-----------------------------------------------------------------

## Conseils

Les helpers sont des fonctions utilisées à l’intérieur des templates pour
effectuer des transformations et des manipulations de données en utilisant le
contexte du template et d’autres sources.

Vous pouvez définir un chemin de helpers dans les options du serveur.  Tous les
fichiers `.js` de ce répertoire seront chargés et le nom de chaque fichier sera
utilisé comme nom du helper fourni.

```js
var options = {
    views: {
        …
        helpersPath: 'helpers'
    }
};
```

Chaque fichier doit exporter une unique fonction avec comme signature
`function(context)`, qui renverra une `String`.  La requête que vous
manipuleriez d’habitude dans un gestionnaire de requête est accessible
via `context.data.root`.

```
module.exports = function(context) {
    return context.data.root.query.foo;
}
```

Votre fonction helper peut alors être utilisée dans le template :

```html
<div>{{helper}}</div>
```
