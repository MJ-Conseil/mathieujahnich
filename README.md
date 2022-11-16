# mathieu-jahnich.fr

Ce site en en cours de développement est une nouvelle version du site actuel de Mathieu Jahnich dont la version actuelle est diponible à cette adresse https://mathieu-jahnich.fr

L'équipe projet a été formée en novembre 2022 à la suite d'une investigation menée par Anne Faubry. Cette investigation avait pour objectif la création d'une nouvelle version du site internet de Mathieu Jahnich créé dans une démarche d'éco-conception de service numérique.

Cette démarche a été synthétisée dans le [guide d'éco-conception de service numérique](https://eco-conception.designersethiques.org/guide/fr/content/0-introduction.html) rédigé par le collectif [Designer Ethiques](https://designersethiques.org/)

## Implémentation et périmètre métier

Le site actuel mathieu-jahnich.fr est un site initialement concu avec la technologie [Wordpress](https://wordpress.com/fr/).

Mathieu Jahnich souhaite que son site intègre le plus possible des bonnes pratiques d'éco-conception de service numérique. Cette nouvelle version du site doit respecter les normes d'accessibilité de service numérique définies par le [Référentiel général d'amélioration de l'accessibilité (RGAA)](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/).

Dans cette optique, le choix technique effectué pour répondre à ces objectifs est de transofmer le Wordpress actuel en [CMS headless](https://www.lafabriquedunet.fr/blog/headless-cms/). 

Une application client faite avec la technologie [SvelteKit](https://kit.svelte.dev/) a été rajoutée. Cette application consommera le contenu (articles de blog, images,...) mise à disposition par Wordpress via l'API REST.


## Démarrage

### Avant de démarer

Les technologies suivantes doivent être installées sur votre machine :

- [Docker et Docker compose](https://docs.docker.com/get-docker/)
- NodeJS 16 (ou version ultérieure)

Il va falloir aussi vous procurer un dump de la base de donée (non inclus dans ce repertoire de code). Pour ce faire, demandez en un à une personne maintenant l'application.

### Premier lancement

#### Création de la base de donnée

Après avoir cloner le répertoire, il va être nécessaire de créer la base de donnée.

Ce processus est automatisé via Docker.

Avant de lancer le processus il faut **ajouter le dump de la base de donnée dans le dossier `database`**

#### Installation des dépendances SvelteKit et initialisation de la DB

*Commande*: `make install`

Cette commande va installer les dépendances SvelteKit et rajouter les données initales en base de donnée

:warning: commande lance volontairement le container docker `mysql` en mode **NON headless**.

La création de la base de donnée peut être un peu longue. Vous devriez voir dans les logs du container docker une ligne ressemblant à ceci:

```
[Entrypoint]: /usr/local/bin/docker-entrypoint.sh: running /docker-entrypoint-initdb.d/hybbhrvk_mathieu.sql
```

Tant qu'aucune autre ligne de log est affichée en dessous de celle-ci, cela indique que la base de donnée est toujours en cours de création.

Une fois le processus terminé, vous pouvez arrêter, si vous le souhaitez, le container `db` avec la commande `docker compose down db`

### Pour les démarrage suivants

A ce stade, vous pouvez lancer l'application avec la commande `make start`

Cette commande va lancer les containers docker pour le wordpress et la db et va aussi lancer l'application client

Le wordpress est accessible sur l'url http://localhost:8080
Le client est accessible sur l'url http://localhost:5175

## Déploiement

### Notes importantes pour le futur déploiement en production

La version actuelle du code de wordpress incluse dans le dossier `cms` NE DOIT PAS être déployée tel quel.

Le code est basé sur la version actuellement en production mais a été modifié pour facilité le développement en local

## Foire aux questions

*J'ai aucune image d'affichée après avoir démarrer le wordpress en local. C'est normal?*

Oui tout à fait! La version du code wordpress dans ce repo est basée sur le code qu'utilise actuellement le site http://mathieu-jahnich.fr.

Toutes les images utilisées par wordpress sont directement stockées dans le dossier `cms/wp-content/uploads` et cela représente plusieures Mo de données.

Pour éviter d'alourdir le repertoire de code, nous avons pris la décision de ne pas versionner les images en ne les incluant pas dans GIT.

Cependant, si le besoin se fait ressentir ces images sont récupérable sur le serveur de production en se connectant en sftp (prévoir >1h pour tout récupérer :sweatsmile:)

*J'ai besoin d'acceder à l'espace admin de wordpress. Comment je fais ?*

Pour accéder à l'espace admin, il faut aller sur l'url http://localhost:8080/admin

Login : admin
Mot de passe : password1234

*Wordpress en local n'arrête pas de me rediriger vers une version https du site et ça casse tout :-)*

Nous allons dire que c'est un problème connu ...

Pour des pistes de solutions voir [cet article StackOverFlow](https://stackoverflow.com/questions/62315483/how-to-disable-https-and-redirect-https-to-http-in-wordpress)


## Licence

AGPL 3.0
