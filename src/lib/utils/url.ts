import type { Options } from '$lib/repositories/post';

export const patchQueryString = (options: Options) => {
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
