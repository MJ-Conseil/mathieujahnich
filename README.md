# mathieu-jahnich.fr - client

Ce site en en cours de développement est une nouvelle version du site actuel de Mathieu Jahnich dont la version actuelle est diponible à cette adresse https://mathieu-jahnich.fr

L'équipe projet a été formée en novembre 2022 à la suite d'une investigation menée par Anne Faubry. Cette investigation avait pour objectif la création d'une nouvelle version du site internet de Mathieu Jahnich créé dans une démarche d'éco-conception de service numérique.

Cette démarche a été synthétisée dans le [guide d'éco-conception de service numérique](https://eco-conception.designersethiques.org/guide/fr/content/0-introduction.html) rédigé par le collectif [Designer Ethiques](https://designersethiques.org/)

## Implémentation et périmètre métier

Le site actuel mathieu-jahnich.fr est un site initialement concu avec la technologie [Wordpress](https://wordpress.com/fr/).

Mathieu Jahnich souhaite que son site intègre le plus possible des bonnes pratiques d'éco-conception de service numérique. Cette nouvelle version du site doit respecter les normes d'accessibilité de service numérique définies par le [Référentiel général d'amélioration de l'accessibilité (RGAA)](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/).

Dans cette optique, le choix technique effectué pour répondre à ces objectifs est de transofmer le Wordpress actuel en [CMS headless](https://www.lafabriquedunet.fr/blog/headless-cms/).

Une application client faite avec la technologie [SvelteKit](https://kit.svelte.dev/) a été rajoutée. Cette application consommera le contenu (articles de blog, images,...) mise à disposition par Wordpress via l'API REST.

## Qu'est-ce que ce répertoire contient ?

Ce répertoire GitHub contient l'application client construite avec SvelteKit du site web mathieu-jahnich.fr


h


## Démarrage

#### Installation des dépendances SvelteKit et initialisation de la DB

_Commande_: `npm install`
Le client est accessible sur l'url http://localhost:5175

## Déploiement

La version de production du site est hébergée chez Infomaniak sur leur hébergement cloud "Jelastic".

:warning: Actuellement, le déploiemennt se fait de manière manuelle. Etant donné la fréquence de mise à jour, il ne semblait pas nécessaire de créer un processus de Content Delivery (CD)

### Obtenir ces accès sur Infomaniak

La première étape est d'avoir accès à Jelastic.

Pour ce faire, veuillez demander à un membre de l'équipe pour être rajouté à l'organisation "MJ Conseil"

Pour déployer et une fois votre PR mergée sur la branche "main", il y a une série d'étape à faire sur l'interface graphique de Jelastic.

Voici une vidéo décrivant ces étapes : 

https://github.com/MJ-Conseil/mathieujahnich/assets/15958334/dc656f23-53c8-4524-be40-4b3d4b36aad7



## Licence

AGPL 3.0
