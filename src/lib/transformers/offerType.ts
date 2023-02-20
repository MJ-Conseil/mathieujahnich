import type { OfferType } from 'src/definitions';

export const transformWordpressOfferTypeToOfferType = (
	offerType: any
): OfferType => {
	return {
		description: offerType.description,
		id: offerType.id,
		slug: offerType.slug,
		taxonomy: offerType.taxonomy,
		count: offerType.count,
		name: offerType.name
	};
};
