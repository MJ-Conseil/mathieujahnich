import { API_URL } from './config';

export const api = async (url: string) => {
	const request = await fetch(`${API_URL}/wp-json/wp/v2${url}`);
	const data = await request.json();
	return data;
};
