import type { Post, PostGroupedByCategories } from 'src/definitions';
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
