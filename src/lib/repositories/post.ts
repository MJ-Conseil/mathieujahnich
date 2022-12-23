import { api } from '$lib/utils/api';
import type { Post } from 'src/definitions/post';

export const getPosts = async (): Promise<Post[]> => {
	return await api(`/posts`);
};

export const getPostBySlug = async (slug: string): Promise<Post> => {
	const request = await api(`/posts?slug=${slug}`);
	return request[0];
};
