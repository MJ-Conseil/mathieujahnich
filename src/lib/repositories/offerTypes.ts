import { transformWordpressGenericResourceToResource } from '$lib/transformers/resourceType';
import { api } from '$lib/utils/api';
import type { Fetch, ReferenceType } from 'definitions';

export const getOfferTypes = async (fetch: Fetch): Promise<ReferenceType[]> => {
	return (await api<ReferenceType[]>(`/offer_type`, fetch)).map(
		transformWordpressGenericResourceToResource
	);
};
