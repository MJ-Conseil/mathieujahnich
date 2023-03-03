import { getCategories } from '$lib/repositories/categories';
import { getPosts } from '$lib/repositories/post';
import { groupPostByCategories } from '$lib/utils/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const categories = await getCategories(fetch);

	const postFromAllCategories = await getPosts(fetch, {
		per_page: 6
	});

	const postPromises = categories.map((item) =>
		getPosts(fetch, {
			per_page: 3,
			categories: [item.id]
		})
	);

	const posts = await Promise.all(postPromises);

	const postGrouppedByCategories = groupPostByCategories(posts, categories);

	return { categories, postGrouppedByCategories, posts: postFromAllCategories };
};
