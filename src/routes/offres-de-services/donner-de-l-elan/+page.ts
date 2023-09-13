import { getOfferTypes } from '$lib/repositories/offerTypes';
import { getReferences } from '$lib/repositories/reference';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const OFFER_TYPE_SLUG = 'donner-de-l-elan';
	const offerTypes = await getOfferTypes(fetch);

	const offerType = offerTypes.find((item) => item.slug === OFFER_TYPE_SLUG);

	if (!offerType) {
		return {
			references: {
				data: []
			}
		};
	}

	const references = await getReferences(fetch, {
		highlight: 1,
		per_page: 3,
		offer_type: offerType.id
	});

	return { references, offerTypeId: offerType.id };
};
