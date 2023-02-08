import { getReferences } from '$lib/repositories/reference';
import { getRefereneTypes } from '$lib/repositories/referenceTypes';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const referenceTypes = await getRefereneTypes(fetch);
	const references = await getReferences(fetch, {
		page: 1,
		per_page: 10
	});
	return { referenceTypes, references };
};
