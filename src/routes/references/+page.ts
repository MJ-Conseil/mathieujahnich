import { getReferences } from '$lib/repositories/reference';
import { getRefereneTypes } from '$lib/repositories/referenceTypes';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const [referenceTypes, references, highlightedReferences] = await Promise.all([
		getRefereneTypes(fetch),
		getReferences(fetch, {
			page: 1,
			per_page: 10,
			highlight: 0
		}),
		getReferences(fetch, {
			highlight: 1,
			per_page: 5
		})
	]);

	return { referenceTypes, references, highlightedReferences };
};
