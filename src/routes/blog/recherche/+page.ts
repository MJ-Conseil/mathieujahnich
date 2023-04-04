import { getCategories } from '$lib/repositories/categories';
import { getPosts } from '$lib/repositories/post';
import { addCategoryToPost } from '$lib/utils/post';
import type { QueryOption } from 'src/definitions';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch, url }) => {
	let options: QueryOption = {
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
