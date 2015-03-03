Créez un serveur qui répond aux requêtes sur `/?name=Vues` à l’aide d’un
gabarit (*template*) stocké dans `templates/index.html`, qui produira le HTML
suivant :

```html
<html>
    <head><title>Bonjour Vues</title></head>
    <body>
        Bonjour Vues
    </body>
</html>
```

-----------------------------------------------------------------

## Conseils

La propriété `view` permet de définir un template à utiliser pour générer la
réponse.

```js
handler: {
    view: "index.html"
}
```

La méthode `server.views()` configure quant à elle la gestion des templates pour
notre serveur.  Elle reçoit en argument un objet de configuration qui permet
d’associer divers moteurs à des extensions spécifiques de fichiers.  Cet objet
peut également spécifier le dossier des templates.

```js
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
```

Dans cet exercice, nous utiliserons Handlebars.  Pour l’installer :

```sh
npm install handlebars
```

Avec les templates Handlebars, vous pouvez injecter une variable directement
dans le HTML en l’enrobant de double accolades, par exemple `{{foo}}`.

Le template reçoit des informations issues de la requête.  Par exemple, les
paramètres de la *query string* présente dans l’URL lui sont passés via l’objet
`query`.  Ces paramètres peuvent alors être utilisés par le template.  Ces
paramètres sont automatiquement analysés et n’ont pas besoin d’une déclaration
explicite dans le `path` de la route.

```html
<div>{{query.paramName}}</div>
```
