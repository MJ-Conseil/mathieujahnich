import { API_URL } from './config';
import type { Fetch, QueryOption } from 'src/definitions';

export const api = async <T>(url: string, fetch: Fetch): Promise<T> => {
	const request = await fetch(new Request(`${API_URL}/wp-json/wp/v2${url}`));
	if (request.ok) {
		return await request.json();
	}
	throw Error('Unable to fetch data');
};

const buildOptionRecord = (options: QueryOption): Record<string, string> => {
	return Object.keys(options).reduce((prev, next) => {
		const currentOption = options[next as keyof QueryOption];

		if (currentOption || currentOption === 0) {
			return {
				...prev,
				[next]: currentOption.toString()
			};
		}

		return prev;
	}, {} as Record<string, string>);
};

export const buildQueryString = (options: QueryOption): string => {
	const query = buildOptionRecord(options);

	return '?' + new URLSearchParams(query).toString();
};
