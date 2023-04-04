import type { Post } from 'src/definitions';

export const buildFakePost = (post: Partial<Post> = {}): Post => {
	return {
		createdDate: post.createdDate || new Date(),
		imageUrl: post.imageUrl || '',
		tags: post.tags || [],
		title: post.title || 'mon titre',
		author: post.author || '',
		content: post.content || '',
		slug: post.slug || '',
		categories: post.categories || []
	};
};
