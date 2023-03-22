import { getEmbeddedMedia } from '$lib/utils/media';
import type { Post } from 'src/definitions';

export const transformWordpressPostToPost = (post: any): Post => {
	const media = getEmbeddedMedia(post);
	return {
		imageUrl: media && media.length > 0 ? media[0].source_url : '',
		title: post.title.rendered,
		tags: post.tags,
		createdDate: new Date(post.date)
	};
};
