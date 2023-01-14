import { API_URL } from './config';
import type { Fetch } from 'src/definitions';

export const api = async <T>(url: string, fetch: Fetch): Promise<T> => {
	const request = await fetch(new Request(`${API_URL}/wp-json/wp/v2${url}`));
	if (request.ok) {
		return await request.json();
	}
	throw Error('Unable to fetch data');
};
