import { getReferences } from '$lib/repositories/reference';
import { getReferencesTypes } from '$lib/repositories/referenceTypes';
import type { QueryOption } from 'src/definitions';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, url }) => {
	const offerTypeId = url.searchParams.get('offer_type');

	const params: QueryOption = {
		page: 1,
		per_page: 10,
		highlight: 0
	};

	const params2: QueryOption = {
		highlight: 1,
		per_page: 5
	};

	const [referenceTypes, references, highlightedReferences] = await Promise.all([
		getReferencesTypes(fetch),
		getReferences(fetch, offerTypeId ? { ...params, offer_type: parseInt(offerTypeId) } : params),
		getReferences(fetch, offerTypeId ? { ...params2, offer_type: parseInt(offerTypeId) } : params)
	]);

	return { referenceTypes, references, highlightedReferences, offerTypeId };
};
