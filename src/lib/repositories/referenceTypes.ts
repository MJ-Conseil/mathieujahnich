import { transformWordpressReferenceTypeToReferenceType } from '$lib/transformers/referenceTypes';
import { api } from '$lib/utils/api';
import type { Fetch, ReferenceType } from 'src/definitions';

export const getRefereneTypes = async (fetch: Fetch): Promise<ReferenceType[]> => {
	// By default Wordpress send 10 items only and a maxium of 100. Here we want to have as many elements as possible.
	return (await api<ReferenceType[]>(`/reference_types?per_page=100`, fetch)).map(
		transformWordpressReferenceTypeToReferenceType
	);
};
