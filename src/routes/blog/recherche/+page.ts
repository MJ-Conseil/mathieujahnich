import { getCategories } from '$lib/repositories/categories';
import { getPosts, type Options } from '$lib/repositories/post';
import { addCategoryToPost } from '$lib/utils/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch, url }) => {
	let options: Options = {
		per_page: 6,
		search: ''
	};

	url.searchParams.forEach((value, key) => {
		if (value) {
			options = {
				...options,
				[key]: JSON.parse(value)
			};
		}
	});

	const categories = await getCategories(serverFetch);
	const posts = await getPosts(serverFetch, options);

	const postsWithCategory = posts.map((item) => addCategoryToPost(item, categories));

	return {
		categories,
		searchParams: options,
		posts: postsWithCategory
	};
};
