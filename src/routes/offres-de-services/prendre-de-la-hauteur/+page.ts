import { getOfferTypes } from '$lib/repositories/offerTypes';
import { getReferences } from '$lib/repositories/reference';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const offerTypes = await getOfferTypes(fetch);

	const offerType = offerTypes.find((item) => item.slug === 'prendre-de-la-hauteur');

	if (!offerType) {
		return { references: [] };
	}

	const references = await getReferences(fetch, {
		highlight: 1,
		per_page: 3,
		offerTypeId: offerType.id
	});

	return { references };
};
