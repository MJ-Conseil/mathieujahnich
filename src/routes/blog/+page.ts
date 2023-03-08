import { getCategories } from '$lib/repositories/categories';
import { getPosts, type Options } from '$lib/repositories/post';
import { groupPostByCategories } from '$lib/utils/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch }) => {
	const options: Options = {
		per_page: 6,
		search: ''
	};

	const categories = await getCategories(serverFetch);

	const postFromAllCategories = await getPosts(serverFetch, options);

	const postPromises = categories.map((item) =>
		getPosts(serverFetch, {
			per_page: 3,
			categories: [item.id]
		})
	);

	const posts = await Promise.all(postPromises);

	const postGrouppedByCategories = groupPostByCategories(posts, categories);

	return {
		postGrouppedByCategories,
		posts: postFromAllCategories,
		searchParams: options
	};
};
