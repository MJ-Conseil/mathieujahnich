# Choix d'un nouvel hébergeur pour `mathieu-jahnich.fr` et `beta.mathieu-jahnich.fr`


*Date* : 30/11/22
*Status*: approuvée

## Contexte

Actuellement, le site `mathieu-jahnich.fr` est hébergé chez PlanetHoster sur un serveur mutualisé.

Cet hébergement mutualisé implique les **contraintes suivantes** :

- n'offre que peut de possibilité de configuration du serveur en lui même (pas de possibilité de rajouter des outils sur le serveur)
- ne permet pas d'accéder à la DB en dehors de l'infrastructure de PlanetHoster. L'accès se faisant uniquement via le PHPMyAdmin pré-installé sur l'interface d'adminisatrtion de PlanetHoster

Cet hébergement mutualisé présente **un avantage** principal : son coût à savoir 109€ par an


### Une évolution des besoins en terme d'infrastructure

Pour le moment, le site `mathieu-jahnich.fr` fonctionne grâce à Wordpres. Un hébergeur mutualisé convient parfaitement pour le déploiement d'un wordpress.

Seulement, la nouvelle version du site web va avoir une architecture logicielle plus complexe.

La nouvelle version du site `mathieu-jahnich.fr` va avoir deux composantes applicatives :

- une application client en SvelteKit
- une application serveur rendant les données disponibles via une API REST (dans ce cas ci l'on va utiliser l'[API REST de Wordpress](https://developer.wordpress.org/rest-api/))

Il n'est pas possible d'héberger une telle architecture ["client-serveur"](https://fr.wikipedia.org/wiki/Client-serveur) sur un serveur mutualisé. En effet, ce type d'hébergement ne donne pas la possibilité d'installer les outils nécessaires.

Pour plus d'information, concernant les besoins au niveau serveur voir cette autre ADR : https://github.com/MJ-Conseil/mathieujahnich/blob/main/documentation/ADR/002-architecture-server.md

### Comparaison des hébergeurs

Les hébergeurs comparés sont issus du guide des 115 bonnes pratiques d'éco-conception numérique

Lien : https://github.com/cnumr/best-practices/blob/main/chapters/BP_086_fr.md

#### Critères de choix

- démarche de responsabilité écologique
- prix
- localisation géographique des serveurs
- est-ce qu'il est possible d'installer l'infra logicielle que l'on souhaite avoir


### Infomaniak

### Option serveur cloud non managé

**Prix**
| Dénomination | Prix|
| -------- | -------- 
| Serveur applicatif     | 29€HTVA/mois     |
| DB managée   | 4.84 /mois    |


Lien https://www.infomaniak.com/fr/hebergement/serveurs-dedies-et-cloud/serveur-cloud-non-manage

### Option PaaS (Jelastic)


Infomaniak propose aussi une solution PaaS "Eslatic Cloud" basé sur le logiciel Jelastic. 

L'idée d'une solution PaaS est de pouvoir configurer un environement cloud sur lequel l'application sera déployée comme l'on souhaite.

Au niveau tarfication, Infomaniak facture à l'usage de la ressource. Le calcul du prix se fait via une unité nommée "Cloudlet"

> Le Cloudlet est l'unité de mesure qui détermine le montant facturé. Un Cloudlet correspond à 128 Mo de RAM et 400 MHz de CPU. 

Plus d'infos sur la tarification ici : https://www.infomaniak.com/fr/hebergement/serveurs-dedies-et-cloud/jelastic-cloud


**Charte environnementale**

Lien : https://www.infomaniak.com/fr/ecologie


En 2020, Infomaniak a généré 998.1 tCO2 eq. Pour atténuer leur impact environnemental, ils disent avoir financé des projets en Suisse et au Nicaragua qui absorberont 1996.2 tCO2 eq pour un montant total de CHF 67'437.-

Ils disent que chaque année, ils se soumettent à un audit calculant leurs émissions en CO2.

Ils sont certifiés par la norme [ISO14001:2015](https://www.infomaniak.com/documents/iso/14001_1FR.pdf)

Ils favorisent la prolongation de la durée de vie de leus serveurs. Leurs objectifs est que ceux-ci jusqu'à 15 ans.

Leurs datacenter sont refroidis par air exterieur naturel et conçus pour fonctionner sans moyen de climatisatio

L'énergie qu'il achète est un mix énergique basé sur 60% d'énérgie hydraulique et 40% d'énérgie verte.

De plus ils disent privilégier la mobilité douce de leurs employés.

**Localisation géographique des serveurs**

Leurs serveurs sont basés en suisse

**Est-ce qu'il est possible d'installer l'infra logicielle que l'on souhaite avoir ?**

A priori oui, mais quid de si on a besoin de décommissionner un serveur comment cela se passe ?

### Scalway

**Prix**

À la différence d'Infomaniak, Scalway facture à l'utilisation des ressources.

Cela veut dire que plus une instance de serveur sera utilisée plus, elle coutera cher. 

Le prix évolue donc en fonction du trafic

| Dénomination | Prix|
| -------- | -------- 
| Serveur applicatif (Taille S)     | €0.22207/heure     |
| Serveur DB managée  |€0.2595/heure  |


**Charte environnementale**

Lien : https://www.scaleway.com/fr/leadership-environnemental/

Julie à l'impression que ce document est plus une note d'intention et d'engagement plus qu'une explication formelle de quelles actions ils entreprennent pour être à la hauteur de ces engagements.

Cependant, ils disent que : 

- ils s'engagent à maintenir leurs serveurs sur une durée de 10ans
- ils s'engagent à avoir un [PUE](https://fr.wikipedia.org/wiki/Indicateur_d%27efficacit%C3%A9_%C3%A9nerg%C3%A9tique) inféreur à 1.15 pour tous les nouveaux datacenter construit depuis 2018 (comment savoir si on est dans un datacenter d'après 2018 ?)
- leurs datacenter sont alimentés en énergie 100% renouvelable (principalement en hydraulique) provenant, dans la mesure du possible, de source local ou européenne certifiées

- ils essayent de banir les produits toxiques à effet de serre impactant la couche d'ozone (notamment certains gaz frigorigènes)

Un des datacenter parisien de Scalway utilise un système de refroidissement à air direct et [adiabatique](https://fr.wikipedia.org/wiki/Processus_adiabatique)

Il faut donc veiller à choisir ce datacenter en créant la nouvelle instance de serveur

**Localisation géographique des serveurs**

Leurs serveurs sont basés en France, Pologne et Pays-Bas

**Est-ce qu'il est possible d'installer l'infra logicielle que l'on souhaite avoir ?**

Concrètement oui. Il est totalement possible d'avoir une instance serveur pour la DB et une autre pour la partie applicative

### OVH

**Prix**

| Dénomination | Prix|
| -------- | -------- 
| Serveur applicatif    | €23,50 HTVA/mois  |
| Serveur DB managée    | 0,068 € HT/heure |

**Charte environnementale**

Lien : https://corporate.ovhcloud.com/fr/sustainability/environment/

- Power Usage Effectiveness (PUE) : 1,28
- Water Usage Effectiveness (WUE) : 0,26 L/Kwh IT
- Carbon Usage Effectiveness (CUE) : 0,20 T Co2e/MWh
- Renewable Energy Factor (REF) : 78%
- Ratio de composants réutilisés : 25%
- Utiliser 100 % d'énergies renouvelables d'ici 2025 (78 % en 2021).
- Prolonger la durée de vie de nos serveurs via des gammes rénovées, tout en améliorant le taux de réutilisation des composants (34% en 2021).
- Atteindre l'objectif du zéro déchet en décharge dans nos centres de production d'ici 2025.
- S'engager en faveur du transport de marchandises à faible émission de carbone.
- Obtenir des certifications standard, comme ISO 50001 (gestion de l'énergie) et ISO 14001 (gestion de l'environnement).
- Mettre en place un programme de capture du carbone équivalent aux catégories Scope 1 et 2 d'ici à 2025, puis l’élargir aux catégories Scope 3 d'ici à 2030.
- Permettre à nos clientes et clients d'obtenir des informations en temps réel sur l'impact énergétique de tous nos services cloud, d'ici 2025.


**Localisation géographique des serveurs**

Principalement en France (Gravelines, Strasbourg) et en Europe


**Est-ce qu'il est possible d'installer l'infra logicielle que l'on souhaite avoir ?**

Oui OVH propose des DB managées et des serveurs VPS

### Rappel 

L'hébergement du site mathieu-jahnich.fr coûte actuelle 109€/an HTVA

### Préconisation à date du 30 novembre 2022

Il faudrait creuser la piste Infomaniak car Infomaniak semble être le plus en avance par rapport aux aspects écologique.

Cependant il faudrait encore un peu creuser pour voir si Infomaniak répond à nos besoins

En creusant un peu du coté d'Infomaniak, nous nous sommes rendus conmpte que Infomaniak propose une solution équivalente à celle de Scalway afin d'avoir une infrastructure basé sur du [PaaS](https://fr.wikipedia.org/wiki/Platform_as_a_service)

Cela permettrait de se soulager de la gestion d'un serveur de type [VPS](https://fr.wikipedia.org/wiki/Platform_as_a_service)

**Questions en suspens : **

- Est-ce que Infomaniak permet d'avoir l'infra que l'on a besoin avec sa solution PaaS ?

### Décision

Pour la nouvelle version du site mathieu-jahnich.fr nous allons aller chez Infomaniak avec leur solution "Elastic Cloud"
