import { getPosts } from '$lib/repositories/post';
import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const postsToDisplay = await getPosts(fetch, {
		slug: params.slug
	});

	if (!postsToDisplay || postsToDisplay.length === 0) {
		throw error(404, 'Not found');
	}

	const lastPosts = await getPosts(fetch, {
		per_page: 3
	});

	return {
		post: postsToDisplay[0],
		lastPosts
	};
};
