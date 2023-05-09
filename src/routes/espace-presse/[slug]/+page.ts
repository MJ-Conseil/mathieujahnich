import { getMediaResources } from '$lib/repositories/mediaResources';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const mediaResources = await getMediaResources(fetch, {
		slug: params.slug
	});

	return {
		mediaResource: mediaResources[0]
	};
};
