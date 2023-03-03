import { transformWordpressPostToPost } from '$lib/transformers/posts';
import { api } from '$lib/utils/api';
import type { Fetch, Post } from 'src/definitions';
import type { WP_Post } from 'wp-types';

type Options = {
	categories?: number[];
	per_page?: number;
	page?: number;
};

const createQueryUrl = (options: Options): string => {
	return Object.keys(options).reduce((prev, next) => {
		const key = next as keyof Options;
		if (options[key]) {
			return `${prev}&${next}=${options[key]}`;
		}
		return prev;
	}, '&');
};

export const getPosts = async (
	fetch: Fetch,
	options: Options = { per_page: 6 }
): Promise<Post[]> => {
	return (await api<WP_Post[]>(`/posts?_embed${createQueryUrl(options)}`, fetch)).map(
		transformWordpressPostToPost
	);
};
