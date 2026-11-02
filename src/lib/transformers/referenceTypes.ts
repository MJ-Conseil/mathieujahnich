import type { ReferenceType } from 'definitions';

export const transformWordpressReferenceTypeToReferenceType = (
	referenceType: unknown
): ReferenceType => {
	return {
		description: referenceType.description,
		id: referenceType.id,
		slug: referenceType.slug,
		taxonomy: referenceType.taxonomy,
		count: referenceType.count,
		name: referenceType.name
	};
};
