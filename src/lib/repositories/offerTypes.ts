import { transformWordpressOfferTypeToOfferType } from '$lib/transformers/offerType';
import { api } from '$lib/utils/api';
import type { Fetch, ReferenceType } from 'src/definitions';

export const getOfferTypes = async (fetch: Fetch): Promise<ReferenceType[]> => {
	return (await api<ReferenceType[]>(`/offer_type`, fetch)).map(
		transformWordpressOfferTypeToOfferType
	);
};
