import { transformWordpressPostToPost } from '$lib/transformers/posts';
import { api } from '$lib/utils/api';
import type { Fetch, Post } from 'src/definitions';
import type { WP_Post } from 'wp-types';

export const getPosts = async (fetch: Fetch): Promise<Post[]> => {
	return  (await api<WP_Post[]>(`/posts?_embed&per_page=6`, fetch)).map(transformWordpressPostToPost);
};
