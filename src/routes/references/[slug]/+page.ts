import { getReferences } from '$lib/repositories/reference';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const references = await getReferences(fetch, {
		slug: params.slug
	});

	if (!references || references.length === 0) {
		throw error(404, 'Not found');
	}

	const reference = references[0];

	if (!reference.caseStudy) {
		throw error(404, 'Not found');
	}

	return {
		reference
	};
};
