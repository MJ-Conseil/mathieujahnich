import { transformWordpressPostToPost } from '$lib/transformers.ts/posts';
import { api } from '$lib/utils/api';
import type { Fetch, Post } from 'src/definitions';
import type { WP_Post } from 'wp-types';

export const getPosts = async (fetch: Fetch): Promise<Post[]> => {
	const result = await api<WP_Post[]>(`/posts?_embed&per_page=6`, fetch);

	return result.map(transformWordpressPostToPost);
};
