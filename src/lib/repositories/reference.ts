import { transformWordpressReferenceToReference } from '$lib/transformers/reference';
import { apiWithHeaders, buildQueryString } from '$lib/utils/api';
import type { DataWithMeta, Fetch, QueryOption, Reference } from 'definitions';

export const getReferences = async (
	fetch: Fetch,
	options: QueryOption = {}
): Promise<DataWithMeta<Reference[]>> => {
	const query = buildQueryString(options);

	const response = await apiWithHeaders<Reference[]>(`/references${query}&_embed`, fetch);

	const data = response[0].map(transformWordpressReferenceToReference);

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
