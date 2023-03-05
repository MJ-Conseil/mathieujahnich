import { transformWordpressPostToPost } from '$lib/transformers/posts';
import { api } from '$lib/utils/api';
import type { Fetch, Post } from 'src/definitions';
import type { WP_Post } from 'wp-types';

export type Options = {
	categories?: number[];
	per_page?: number;
	page?: number;
	search?: string;
};

const createQueryUrl = (options: Options): string => {
	return Object.entries(options).reduce((prev, [key, value]) => {
		if (value && key) {
			return `${prev}&${key}=${value}`;
		}
		return prev;
	}, '');
};

export const getPosts = async (
	fetch: Fetch,
	options: Options = { per_page: 6, categories: undefined }
): Promise<Post[]> => {
	return (await api<WP_Post[]>(`/posts?_embed${createQueryUrl(options)}`, fetch)).map(
		transformWordpressPostToPost
	);
};
