import type { Post } from 'src/definitions';
import type { WP_REST_API_Attachment } from 'wp-types';

const getEmbeddedMedia = (post: any): WP_REST_API_Attachment[] => {
	return post['_embedded']['wp:featuredmedia'];
};

export const transformWordpressPostToPost = (post: any): Post => {

	console.log(post.date)
	return {
		imageUrl: getEmbeddedMedia(post)[0].source_url,
		title: post.title.rendered,
		tags: post.tags,
		createdDate : new Date(post.date)
	};
};