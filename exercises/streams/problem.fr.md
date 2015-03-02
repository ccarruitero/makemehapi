Créez un serveur Hapi qui répond aux requêtes GET sur `/`.  La réponse doit être
un flux issu d’un fichier auquel vous aurez appliqué une transformation ROT13.
Le fichier d’origine contient le texte suivant :

```
The Pursuit of Hapi-ness
```

Du coup la sortie devrait être :

```
Gur Chefhvg bs Uncv-arff
```

-----------------------------------------------------------------

## Conseils

### Flux

La fonction de traitement de requête `reply()` dans Hapi accepte aussi un flux
comme argument.

### Fichier

Le module noyau `fs` fournit une fonction `createReadStream(cheminDuFichier)`
qui vous sera probablement utile.  À vous de créer le fichier et de fournir
son chemin complet de façon dynamique.

### ROT13 facile

Pour cet exercice, vous aurez besoin du module tiers `rot13-transform`.  Pour
l’installez, faites simplement :

```sh
npm install rot13-transform
```

Sa documentation est ici :

  https://www.npmjs.com/package/rot13-transform
