import { transformWordpressGenericResourceToResource } from '$lib/transformers/resourceType';
import { api } from '$lib/utils/api';
import type { Fetch, GreenWhasingCaseType } from 'definitions';

export const getGreenWhasingCasesTypes = async (fetch: Fetch): Promise<GreenWhasingCaseType[]> => {
	// By default Wordpress send 10 items only and a maxium of 100. Here we want to have as many elements as possible.
	return (await api<GreenWhasingCaseType[]>(`/greenwashing_case_types?per_page=100`, fetch)).map(
		transformWordpressGenericResourceToResource
	);
};
