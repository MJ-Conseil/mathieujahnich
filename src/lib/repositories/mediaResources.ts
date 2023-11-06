import { transformWordpressMediaResourceToMediaResource } from '$lib/transformers/mediaResource';
import { api, buildQueryString } from '$lib/utils/api';
import type { Fetch, MediaResource, QueryOption } from 'definitions';

export const getMediaResources = async (
	fetch: Fetch,
	options: QueryOption
): Promise<MediaResource[]> => {
	const query = buildQueryString(options);

	return (await api<MediaResource[]>(`/media_resource${query}&_embed`, fetch)).map(
		transformWordpressMediaResourceToMediaResource
	);
};
