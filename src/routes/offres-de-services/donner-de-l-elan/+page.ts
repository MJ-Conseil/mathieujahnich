import { getOfferTypes } from '$lib/repositories/offerTypes';
import { getReferences } from '$lib/repositories/reference';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const offerTypes = await getOfferTypes(fetch);

	const offerType = offerTypes.find((item) => item.slug === 'donner-de-l-elan');

	if (!offerType) {
		return { references: [] };
	}

	const references = await getReferences(fetch, {
		highlight: 1,
		per_page: 3,
		offer_type: offerType.id
	});

	return { references };
};
