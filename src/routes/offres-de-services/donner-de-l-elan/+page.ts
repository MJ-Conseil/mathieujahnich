import { getOfferTypes } from '$lib/repositories/offerTypes';
import { getReferences } from '$lib/repositories/reference';
import type { DataWithMeta, Reference } from 'src/definitions';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const OFFER_TYPE_SLUG = 'donner-de-l-elan';
	const offerTypes = await getOfferTypes(fetch);

	const offerType = offerTypes.find((item) => item.slug === OFFER_TYPE_SLUG);

	let referencesMeta: DataWithMeta<Reference[]> = {
		data: [],
		meta: {
			pageCount: 0,
			totalItems: 0
		}
	};

	if (!offerType) {
		return {
			references: referencesMeta
		};
	}

	referencesMeta = await getReferences(fetch, {
		highlight: 1,
		per_page: 3,
		offer_type: offerType.id
	});

	return { references: referencesMeta, offerTypeId: offerType.id };
};
