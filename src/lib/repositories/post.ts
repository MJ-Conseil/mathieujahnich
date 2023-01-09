import { api } from '$lib/utils/api';
import type { WP_Post } from 'wp-types';

export const getPosts = async (): Promise<WP_Post[]> => {
	return await api(`/posts`);
};

export const getPostBySlug = async (slug: string): Promise<WP_Post> => {
	const request = await api(`/posts?slug=${slug}`);
	return request[0];
};
