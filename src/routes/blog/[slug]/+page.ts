import { getPosts } from '$lib/repositories/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const posts = await getPosts(fetch, {
		slug: params.slug
	});

	return {
		post: posts[0]
	};
};
