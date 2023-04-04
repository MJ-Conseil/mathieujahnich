import type { ResourceType } from 'src/definitions';

export const transformWordpressGenericResourceToResource = (offerType: any): ResourceType => {
	return {
		description: offerType.description,
		id: offerType.id,
		slug: offerType.slug,
		taxonomy: offerType.taxonomy,
		count: offerType.count,
		name: offerType.name
	};
};
