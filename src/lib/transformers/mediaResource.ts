import { getEmbeddedMedia } from '$lib/utils/media';
import type { MediaResource } from 'definitions';

export const transformWordpressMediaResourceToMediaResource = (resource: any): MediaResource => {
	const embededMedias = getEmbeddedMedia(resource);

	const associatedContent = resource.acf?.intitule_du_lien
		? {
				externalResourceName: resource.acf?.intitule_du_lien,
				externalResourceURl: resource.acf.url_ressource_media
			}
		: undefined;

	return {
		id: resource.id,
		content: resource.content.rendered,
		date: new Date(resource.date),
		mediaResourcesTypes: resource.media_resource_type,
		imageUrl: embededMedias && embededMedias.length > 0 ? embededMedias[0].source_url : '',
		imageAltText: embededMedias && embededMedias.length > 0 ? embededMedias[0].alt_text : undefined,
		title: resource.title.rendered,
		slug: resource.slug,
		associatedContent
	};
};
