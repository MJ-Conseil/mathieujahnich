import { getCategories } from '$lib/repositories/categories';
import { getPosts, type Options } from '$lib/repositories/post';
import { groupPostByCategories } from '$lib/utils/post';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch }) => {
	const categories = await getCategories(serverFetch);

	const options: Options = {
		per_page: 6,
		search: ''
	};

	const postFromAllCategories = await getPosts(serverFetch, options);

	// we only to display posts form "green whashing" (id : 18) and "coups de coeur" (id:19) on the page

	const categoriesIdsToDisplay = [18, 19];

	const categoriesToDisplay = categories.filter((item) => categoriesIdsToDisplay.includes(item.id));

	const postPromises = categoriesToDisplay.map((item) =>
		getPosts(serverFetch, {
			per_page: 3,
			categories: [item.id]
		})
	);

	const posts = await Promise.all(postPromises);

	const postGrouppedByCategories = groupPostByCategories(posts, categoriesToDisplay);

	return {
		postGrouppedByCategories,
		posts: postFromAllCategories,
		categories,
		searchParams: options
	};
};
