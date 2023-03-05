import { getCategories } from '$lib/repositories/categories';
import { getPosts, type Options } from '$lib/repositories/post';
import { groupPostByCategories } from '$lib/utils/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch, url }) => {
	let options: Options = {
		page: undefined,
		per_page: 6,
		categories: undefined
	};
	url.searchParams.forEach((value, key) => {
		if (key in options) {
			options = {
				...options,
				[key]: JSON.parse(value)
			};
		}
	});

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

	return { categories, postGrouppedByCategories, posts: postFromAllCategories };
};
