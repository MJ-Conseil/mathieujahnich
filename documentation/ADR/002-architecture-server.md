# Quelle infrastructure serveur choisir ?

_Date_ : 1/12/2022
_Status_ : en discussion

## Comphrésension du besoin

Lors des discussions sur quelles bases techniques va être construit la nouvelle version du site web mathieu-jahnich.fr la décision de garder le wordpress existant à été prise.

L'objectif est que le wordpress existant continue à rendre disponnible les données utilisées par le site web mathieu-jahnich.fr (le site actuel).

Pour ce faire nous allons utiliser le site wordpress du site actuel comme un [CMS headless](https://galadrim.fr/blog/ce-quil-faut-savoir-sur-les-cms-headless)

Une application "client" viendra cherchez les données sur l'API de wordpress pour les afficher dans la navigateur des visiteurs.

Dans ce contexte, l'architecture est une architecture ["client-serveur"](https://www.techno-science.net/definition/3743.html)

#### Les besoins de base au niveau applicatif

##### Pour la partie "serveur"

La partie serveur est basée sur wordpress qui est principalement du PHP. Nous aurons donc besoin d'un serveur web capable de faire tourner du PHP.

NGINX semble être une solution de choix.

La raison principale c'est que Bertrand est plus à l'aise dans la configuration de NGINX que d'Apache.

##### Pour la partie "client"

La partie "client" sera construite avec SvelteKit qui est un framework Javascript. Pour cette partie, nous aurons donc besoin de [NodJs](https://nodejs.org/en/)

##### Un reverse proxy

L'idéal serait que le serveur et le client soit installé sur le même serveur. Cela éviterait que chaque appel http entre le client et le serveur "traverse internet" pour obtenir les informations.

Pour plus d'infos sur comment fonctionne internet voir : https://www.cloudflare.com/fr-fr/learning/network-layer/how-does-the-internet-work/

Une idée serait que en allant sur

https://mathieu-jahnich.fr permette d'accéder au client
https://mathieu-jahnich.fr/cms permette d'accéder au wordpress

Pour répondre à ces besoins l'on va avoir besoin d'un [reverse proxy](https://fr.wikipedia.org/wiki/Proxy_inverse)

NGINX peut aussi jouer le rôle de reverse proxy

#### Quel type d'hébergerment à t'on besoin d'avoir ?

**Est-ce possible de garder l'hébergement existant** ?

Actuellement le site actuel est hébergé chez PlanetHoster qui est un hébergeur proposant princiapalement des serveurs mutualisés.

Cela veut dire que l'on est contraint par ce qui est installé sur le serveur et il n'y a pas la possibilité d'installer autre chose. Dans ce que ci, sur cet hébergement, seul PHP est installé.

Il manquera donc NodeJS pour servir la partie client.

Cela donc rend quasiment impossible la réutilisation de l'hébergement actuel.

**Est-ce qu'un [VPS(https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel] pourrait convenir ?**

Un VPS pourrait être une bonne solution car il permet d'avoir un accès à un serveur sur lequel l'on peut installer ce dont nous avons besoin.

Cependant, un VPS risque de demander beacoup de temps en terme de maintenance. En effet, utiliser un VPS nécessite (presque) autant de maintenance qu'un serveur dédié.

Cependant, si l'on utilise un VPS l'ont pourrait utiliser [docker](https://www.docker.com/) pour faciliter les installations des outils sur le serveur.

**Du [PaaS](https://fr.wikipedia.org/wiki/Platform_as_a_service) alors ?**

Passer par un service PaaS pourrait être l'idéal car cela nous soulagèreait de la partie installation et maintenance du serveur.

Cependant il va falloir faire attention au coût car il est assez facile de créer des ressources (nouvelles instances pour de la redondance, ...) que le budget risque d'exploser si l'on ne fait pas attention

Il va falloir donc créer uniquement les insstances dont on a besoin et voir à la longue si des nouveaux besoins émergent comme par exemple : créer de nouvelles instances pour absorber une augmentation du trafic, ...

L'avantage avec le PaaS c'est que ces besoins n'ont pas besoin d'être pris en compte à l'heure actuelle.

**Un serveur dédié ?**

Cette solution est exclue de facto car nous ne pensons pas qu'il est nécessaire d'acheter ou de louer un nouveau serveur.

Cela reviendrait trop cher en terme de temps de maintenance et en terme de sous.

### Note à propos du serveur de recette (staging)

Durant le développement du projet, le besoin d'avoir un serveur de recette (le staging) s'est fait ressentir.

L'objectif est que toutes les évolutions de la nouvelle version du site web soit mise sur ce serveur pour que Mathieu Jahnich et Anne Faubry puisse avoir un aperçu des avancées.

En fin de développement de cette nouvelle version, ce serveur remplacera le serveur existant.

L'objectif est donc de faire vivre en parrallèle le temps du développement le serveur actuel hébergeant le site actuel et le serveur hébergeant la nouvelle version.

Il sera possible d'accéder au staging via le sous-domaine suivant : beta.mathieu-jahnich.fr

### Préconisation à date du 1/12

Passer par du PaaS ou un VPS semblerait êtres deux solutions envisageables.

Une préférence irait pour le PaaS
