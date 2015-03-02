La configuration des routes nous offre de nombreuses manières de personnaliser
chaque point d’accès de notre application Hapi.  Un de ces aspects concerne
la validation des requêtes.

La validation peut s’intéresser aux paramètres de chemin, au corps de la requête,
ou à la réponse envoyée.  Les objets qui pilotent la validation sont définis au
moyen du framework de validation Joi.

Créez un serveur qui configure une route exposant un point d’accès pour des
poulets.  Spécifiquement :

```
/chickens
```

Au sein de cette route, ajoutez un paramètre de chemin nommé `breed` (race),
lequel dispose d’une validation dédiée dans la configuration de la route.  Le
vérificateur s’assurera simplement que l’objet de validation existe dans la
configuration de route pour le paramètre `breed`, sans chercher plus loin.

-----------------------------------------------------------------

## Conseils

Le code suivant illustre à quoi peut ressembler une telle configuration :

```js
var routeConfig = {
    path: '/un/chemin/{avec}/{des}/{parametres}',
    method: 'GET',
    handler: myHandler,
    config: {
        validate: {
            params: {
                with: Joi.string().required(),
                parameters: Joi.string().required()
            }
        }
    }
}
```

Toutes les façons de configurer une route sont consultables ici :

    {rootdir:/node_modules/hapi/API.md}

Les informations sur les objets de validation Joi sont consutlables ici :

    {rootdir:/node_modules/joi/README.md}
