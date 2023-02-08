import type { Reference } from 'src/definitions';

export const transformWordpressReferenceToReference = (reference: any): Reference => {
	return {
		content: reference.content.rendered,
		id: reference.id,
		title: reference.title.rendered,
		date: new Date(reference.date),
		referenceTypes: reference.reference_types
	};
};
