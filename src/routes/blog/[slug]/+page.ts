import { getPosts } from '$lib/repositories/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const postsToDisplay = await getPosts(fetch, {
		slug: params.slug
	});

	const lastPosts = await getPosts(fetch, {
		per_page: 3
	});

	return {
		post: postsToDisplay[0],
		lastPosts
	};
};
