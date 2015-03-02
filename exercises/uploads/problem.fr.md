Créez un serveur avec un point d’accès qui accepte un téléversement (*upload*)
de fichier sur le chemin suivant :

```
/upload
```

Le point d’accès doit accepter les clés suivantes : `description` et `file`. Le
champ `description` doit contenir une `String` avec le texte que vous voulez,
et `file` est le fichier à envoyer.  La réponse doit être un objet JSON avec le
motif suivant :

```json
{
  description :  // La description issue du formulaire
  file : {
    data :       // Le contenu du fichier envoyé
    filename:    // Le nom du fichier envoyé
    headers :    // L’en-tête de fichier défini par Hapi
  }
}
```

-----------------------------------------------------------------

## Conseils

Pour accepter un fichier en entrée, votre requête doit utiliser le type de
contenu `multipart/form-data`, et votre gestionnaire doit décoder le contenu
en fonction.

On peut consulter ce fichier sous la forme d’un flux en lecture en ajoutant les
réglages suivants à la configuration de notre route :

```js

payload: {
    output : 'stream',
    parse : true
}
```

Si nous avons envoyé un fichier via le paramètre `file`, alors nous pourrons
y accéder au sein du gestionnaire de la façon suivante :

```js
handler: function (request, reply) {
    var body = '';

    request.payload.file.on('data', function (data){
      body += data
    });

    request.payload.file.on('end', function (){
      console.log(body);
    });
}
```

Vous trouverez plus d’information sur le téléversement de fichiers dans la
documentation API pour l’interface de réponse :

  {rootdir:node_modules/hapi/API.md}

  ou

  [la doc API en ligne](http://hapijs.com/api#reply-interface)
