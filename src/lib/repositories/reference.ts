import { transformWordpressReferenceToReference } from '$lib/transformers/reference';
import { api, buildQueryString } from '$lib/utils/api';
import type { Fetch, QueryOption, Reference } from 'src/definitions';

export const getReferences = async (
	fetch: Fetch,
	options: QueryOption = {}
): Promise<Reference[]> => {
	const query = buildQueryString(options);

	return (await api<Reference[]>(`/references${query}&_embed`, fetch)).map(
		transformWordpressReferenceToReference
	);
};
