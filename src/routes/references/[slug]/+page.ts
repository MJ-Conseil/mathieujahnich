import { getReferences } from '$lib/repositories/reference';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const references = await getReferences(fetch, {
		slug: params.slug
	});

	return {
		reference: references[0]
	};
};
