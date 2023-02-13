import type { WP_REST_API_Attachment } from 'wp-types';

export const getEmbeddedMedia = (item: any): WP_REST_API_Attachment[] => {
	if (!item['_embedded']) {
		return [];
	}
	return item['_embedded']['wp:featuredmedia'];
};
