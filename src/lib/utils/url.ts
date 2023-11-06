import type { QueryOption } from 'definitions';

export const patchQueryString = (options: QueryOption) => {
	const params = new URLSearchParams();
	Object.entries(options).forEach(([key, value]) => {
		if (value) {
			params.set(key, JSON.stringify(value));
		} else {
			params.delete(key);
		}
	});

	return params.toString();
};
