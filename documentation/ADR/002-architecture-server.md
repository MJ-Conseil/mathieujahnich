# Quelle infrastructure serveur choisir ?

_Date_ : 1/12/2022
_Status_ : en discussion

## Compréhension du besoin

Lors des discussions sur quelles bases techniques va être construit la nouvelle version du site web mathieu-jahnich.fr la décision de garder le WordPress existant a été prise.

L'objectif est que le WordPress existant continue à rendre disponible les données utilisées par le site web mathieu-jahnich.fr (le site actuel).

Pour ce faire nous allons utiliser le site wordpress du site actuel comme un [CMS headless](https://galadrim.fr/blog/ce-quil-faut-savoir-sur-les-cms-headless)

Une application "client" viendra chercher les données sur l'API de WordPress pour les afficher dans le navigateur des visiteurs.

Dans ce contexte, l'architecture est une architecture ["client-serveur"](https://www.techno-science.net/definition/3743.html)

#### Les besoins de base au niveau applicatif

##### Pour la partie "serveur"

La partie serveur est basée sur WordPress qui est principalement du PHP. Nous aurons donc besoin d'un serveur web capable de faire tourner du PHP.

NGINX semble être une solution de choix.

La raison principale, c'est que Bertrand est plus à l'aise dans la configuration de NGINX que d'Apache.

##### Pour la partie "client"

La partie "client" sera construite avec SvelteKit qui est un framework Javascript. Pour cette partie, nous aurons donc besoin de [NodJs](https://nodejs.org/en/)

##### Un reverse proxy

L'idéal serait que le serveur et le client soient installé sur le même serveur. Cela éviterait que chaque appel http entre le client et le serveur "traverse internet" pour obtenir les informations.

Pour plus d'infos sur comment fonctionne internet, voir : https://www.cloudflare.com/fr-fr/learning/network-layer/how-does-the-internet-work/

Une idée serait qu'en allant sur

https://mathieu-jahnich.fr permette d'accéder au client
https://mathieu-jahnich.fr/cms permette d'accéder au wordpress

Pour répondre à ces besoins l'on va avoir besoin d'un [reverse proxy](https://fr.wikipedia.org/wiki/Proxy_inverse)

NGINX peut aussi jouer le rôle de reverse proxy

#### Quel type d'hébergement à t'ont besoin d'avoir ?

**Est-ce possible de garder l'hébergement existant** ?

Actuellement le site actuel est hébergé chez PlanetHoster qui est un hébergeur proposant principalement des serveurs mutualisés.

Cela veut dire que l'on est contraint par ce qui est installé sur le serveur et il n'y a pas la possibilité d'installer autre chose. Dans ce que ci, sur cet hébergement, seul PHP est installé.

Il manquera donc NodeJS pour servir la partie client.

Cela donc rend quasiment impossible la réutilisation de l'hébergement actuel.

**Est-ce qu'un [VPS(https://fr.wikipedia.org/wiki/Serveur_d%C3%A9di%C3%A9_virtuel] pourrait convenir ?**

Un VPS pourrait être une bonne solution car il permet d'avoir un accès à un serveur sur lequel l'on peut installer ce dont nous avons besoin.

Cependant, un VPS risque de demander beaucoup de temps en termes de maintenance. En effet, utiliser un VPS nécessite (presque) autant de maintenance qu'un serveur dédié.

Cependant, si l'on utilisait un VPS l'on pourrait utiliser [docker](https://www.docker.com/) pour faciliter les installations des outils sur le serveur.

**Du [PaaS](https://fr.wikipedia.org/wiki/Platform_as_a_service) alors ?**

Passer par un service PaaS pourrait être l'idéal, car cela nous soulagerait de la partie installation et maintenance du serveur.

Cependant, il va falloir faire attention au coût parce qu'il est assez facile de créer des ressources (nouvelles instances pour de la redondance, ...) que le budget risque d'exploser si l'on ne fait pas attention

Il va falloir donc créer uniquement les instances dont on a besoin et voir à la longue si des nouveaux besoins émergents comme : créer de nouvelles instances pour absorber une augmentation du trafic…,

L'avantage avec le PaaS c'est que ces besoins n'ont pas besoin d'être pris en compte à l'heure actuelle.

**Un serveur dédié ?**

Cette solution est exclue de facto, car nous ne pensons pas qu'il est nécessaire d'acheter ou de louer un nouveau serveur.

Cela reviendrait trop cher en termes de temps de maintenance et en termes de sous.

### Note à propos du serveur de recette (staging)

Durant le développement du projet, le besoin d'avoir un serveur de recette (le staging) s'est fait ressentir.

L'objectif est que toutes les évolutions de la nouvelle version du site web soit mise sur ce serveur pour que Mathieu Jahnich et Anne Faubry puisse avoir un aperçu des avancées.

En fin de développement de cette nouvelle version, ce serveur remplacera le serveur existant.

L'objectif est donc de faire vivre en parallèle le temps du développement le serveur actuel hébergeant le site actuel et le serveur hébergeant la nouvelle version.

Il sera possible d'accéder au staging via le sous-domaine suivant : beta.mathieu-jahnich.fr

### Préconisation à date du 1/12

Passer par du PaaS ou un VPS semblerait êtres deux solutions envisageables.

Une préférence irait pour le PaaS

## Décision finale et ce qui a été mis en place à la mise en ligne en octobre 2023

La solution retenue est d'utiliser la solution PAAS d'Infomaniak.

Le service numérique utilise deux environements Jelastic :

- Front : un "boite" node JS pour servir les fichiers buildés
- Back : une "boite" contenant Wordpress, Apache et une DB MySQL

Le front bénéficie d'une IP public pour être rattaché au nom de domaine mathieu-jahnich.fr

Le serveur Apache (faisant tourné) le wordpress est géré directement par Jelastic et ne bénéficie pas d'un nom de domaine custom (on utilise celui généré aléatoirement par Jelastic)

Une vue plus précise de l'architecture est incluse dans le README
