import type { QueryOption } from 'src/definitions';
import { buildQueryString } from './api';

describe('buildQueryString', () => {
	it('should return a proper query string', () => {
		const options: QueryOption = {
			page: 1,
			per_page: 10,
			offset: 2
		};
		const query = buildQueryString(options);
		expect(query).toBe(
			`?page=${options.page}&per_page=${options.per_page}&offset=${options.offset}`
		);
	});

	it('should return a proper query string even if missing values', () => {
		const options: QueryOption = {
			page: 1,
			offset: 2
		};
		const query = buildQueryString(options);
		expect(query).toBe(`?page=${options.page}&offset=${options.offset}`);
	});
});
