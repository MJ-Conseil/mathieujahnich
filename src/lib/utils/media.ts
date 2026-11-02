import type { WP_REST_API_Attachment } from 'wp-types';

export const getEmbeddedMedia = (item: unknown): WP_REST_API_Attachment[] => {
	if (!item['_embedded']) {
		return [];
	}
	return item['_embedded']['wp:featuredmedia'];
};

export const getEmbeddedAuthor = (item: unknown): { name: string }[] => {
	if (!item['_embedded']) {
		return [];
	}
	return item['_embedded']['author'];
};
