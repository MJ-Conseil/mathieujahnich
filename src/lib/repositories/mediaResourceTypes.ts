import { transformWordpressGenericResourceToResource } from '$lib/transformers/resourceType';
import { api } from '$lib/utils/api';
import type { Fetch, MediaResourceType } from 'definitions';

export const getMediaResourceTypes = async (fetch: Fetch): Promise<MediaResourceType[]> => {
	return (await api<MediaResourceType[]>(`/media_resource_type`, fetch)).map(
		transformWordpressGenericResourceToResource
	);
};
