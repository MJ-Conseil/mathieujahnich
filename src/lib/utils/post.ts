import type { Post, PostGroupedByCategories, PostWithCategory } from 'definitions';
import type { WP_REST_API_Category } from 'wp-types';

export const groupPostByCategories = (
	posts: Post[][],
	categories: Pick<WP_REST_API_Category, 'id' | 'name'>[]
): PostGroupedByCategories[] => {
	return categories.map((category, index) => {
		return {
			categoryId: category.id,
			categoryName: category.name,
			posts: posts[index]
		};
	});
};
export const addCategoryToPost = (
	post: Post,
	categories: Pick<WP_REST_API_Category, 'id' | 'name'>[]
): PostWithCategory => {
	const category = categories.find((item) => post.categories.includes(item.id));
	return {
		...post,
		categoryId: category?.id,
		categoryName: category?.name
	};
};
