import type { Size } from 'src/definitions/size';

export const SOCIAL_NETWORK_LINKS: Record<string, string> = {
	linkedin: 'https://www.linkedin.com/company/mjconseil/',
	youtube: 'https://www.youtube.com/playlist?list=PLS3PLG72rJqGFGtMIgJRaDqx0NAzLMMhM'
};

export const SIZE: Record<Size, Size> = {
	regular: 'regular',
	small: 'small',
	medium: 'medium'
};

export const URLAndNameMap: Record<string, string> = {
	Accueil: '/',
	'Offres de service': '/offres-de-services/prendre-de-la-hauteur'
};
export const CONTACT_LINK: Record<string, string> = {
	reservio: 'https://mathieu-jahnich.reservio.com/',
	email: 'conseil@mathieu-jahnich.fr',
	phone: '+33 6 74 88 92 73'
};
