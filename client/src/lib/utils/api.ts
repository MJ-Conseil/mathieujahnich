import { API_URL } from './config';

export const api = async (url: string) => {
	const request = await fetch(`${API_URL}/wp-json/wp/v2${url}`);
	if (request.ok) {
		return await request.json();
	}
	throw Error('Unable to get posts');
};
