import { getMediaResources } from '$lib/repositories/mediaResources';
import { getMediaResourceTypes } from '$lib/repositories/mediaResourceTypes';
import {
	buildRemainingMediaResourceRecord,
	groupMediaResourceByType
} from '$lib/utils/mediaResources';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch: serverFetch }) => {
	const mediaResourceTypes = await getMediaResourceTypes(serverFetch);

	const mediaResourcePromises = mediaResourceTypes.map((item) =>
		getMediaResources(serverFetch, {
			per_page: 3,
			media_resource_type: [item.id]
		})
	);

	const mediaResource = await Promise.all(mediaResourcePromises);

	const postGrouppedByCategories = groupMediaResourceByType(mediaResource, mediaResourceTypes);
	const remainingMediaResourceTypeRecord = buildRemainingMediaResourceRecord(mediaResourceTypes);

	console.log(remainingMediaResourceTypeRecord);

	return {
		mediaResources: postGrouppedByCategories,
		remainingMediaResourceTypeRecord
	};
};
