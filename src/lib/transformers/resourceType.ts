import type { ResourceType } from 'definitions';

export const transformWordpressGenericResourceToResource = (
	wordpressResource: unknown
): ResourceType => {
	return {
		description: wordpressResource.description,
		id: wordpressResource.id,
		slug: wordpressResource.slug,
		taxonomy: wordpressResource.taxonomy,
		count: wordpressResource.count,
		name: wordpressResource.name
	};
};
