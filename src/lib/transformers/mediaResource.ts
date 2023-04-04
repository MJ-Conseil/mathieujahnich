import { getEmbeddedMedia } from '$lib/utils/media';
import type { MediaResource } from 'src/definitions';

export const transformWordpressMediaResourceToMediaResource = (resource: any): MediaResource => {
	const embededMedias = getEmbeddedMedia(resource);

	return {
		id: resource.id,
		content: resource.content.rendered,
		date: new Date(resource.date),
		mediaResourcesTypes: resource.media_resource_type,
		imageUrl: embededMedias && embededMedias.length > 0 ? embededMedias[0].source_url : '',
		title: resource.title.rendered,
		slug: resource.slug
	};
};
