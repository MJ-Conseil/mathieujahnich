export const SOCIAL_NETWORK_LINKS: Record<string, string> = {
	linkedin: 'https://www.linkedin.com/company/mjconseil/',
	youtube: 'https://www.youtube.com/playlist?list=PLS3PLG72rJqGFGtMIgJRaDqx0NAzLMMhM'
};

export const SITE_WEB_NAME = 'Mathieu Jahnich ';

export const ROUTES: Record<string, string> = {
	Accueil: '/',
	'À propos': '/a-propos',
	"Donner de l'élan": '/offres-de-services/donner-de-l-elan',
	'Trouver le juste équilibre': '/offres-de-services/trouver-le-juste-equilibre',
	'Faire monter en compétences': '/offres-de-services/faire-monter-en-competence',
	Références: '/references',
	'Espace presse': '/espace-presse',
	Blog: '/blog',
	Newsletter: '/newsletter',
	'Informations légales': '/informations-legales'
};
export const CONTACT_LINKS: Record<string, string> = {
	reservio: 'https://mathieu-jahnich.reservio.com/',
	email: 'conseil@mathieu-jahnich.fr',
	phone: '+33 6 74 88 92 73',
	address: '31 rue A. Barbier 77300 Fontainebleau',
	website: 'https://mathieu-jahnich.fr/'
};
export const CONTACT_HOSTING: Record<string, string> = {
	name: 'Infomaniak',
	corporateName: 'INFOMANIAK NETWORK SA',
	address: 'Rue Eugène-Marziano 25, 1227 Genève, Suisse',
	phone: '+41 22 820 35 40',
	website: 'https://www.infomaniak.com/fr'
};

export enum SIZE {
	EXTRASMALL = 'extra-small',
	SMALL = 'small',
	LARGE = 'large',
	REGULAR = 'regular',
	MEDIUM = 'medium'
}

export const focusableElements =
	'button, a, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), summary';
