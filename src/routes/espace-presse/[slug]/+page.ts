import { getMediaResources } from '$lib/repositories/mediaResources';
import { error, redirect } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const mediaResources = await getMediaResources(fetch, {
		slug: params.slug
	});

	if (!mediaResources || mediaResources.length === 0) {
		error(404, 'Not found');
	}

	return {
		mediaResource: mediaResources[0]
	};
};
