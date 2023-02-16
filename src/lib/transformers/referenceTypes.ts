import type { ReferenceType } from 'src/definitions';

export const transformWordpressReferenceTypeToReferenceType = (
	referenceType: any
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
