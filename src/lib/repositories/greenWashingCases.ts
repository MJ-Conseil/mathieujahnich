import { transformWordpressGreenWhasingCaseToGreenWhasingCase } from '$lib/transformers/greenwhasingCase';
import { apiWithHeaders, buildQueryString } from '$lib/utils/api';
import type { DataWithMeta, Fetch, GreenWhasingCase, QueryOption } from 'definitions';

export const getGreenWhasingCases = async (
	fetch: Fetch,
	options: QueryOption = {}
): Promise<DataWithMeta<GreenWhasingCase[]>> => {
	const query = buildQueryString(options);
	const response = await apiWithHeaders<GreenWhasingCase[]>(
		`/green-washing-cases${query}&_embed`,
		fetch
	);

	const data = response[0].map(transformWordpressGreenWhasingCaseToGreenWhasingCase);

	const totalItems = parseInt(response[1].get('x-wp-total') || '0');
	const pageCount = parseInt(response[1].get('x-wp-totalpages') || '0');

	return {
		data,
		meta: {
			pageCount,
			totalItems
		}
	};
};
