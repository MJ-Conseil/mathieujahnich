import { getEmbeddedAuthor, getEmbeddedMedia } from '$lib/utils/media';
import type { Post } from '../../definitions';

export const transformWordpressPostToPost = (post: any): Post => {
	const media = getEmbeddedMedia(post);
	return {
		imageUrl: media && media.length > 0 ? media[0].source_url : '',
		imageAltText: media && media.length > 0 ? media[0].alt_text : 'tata',
		title: post.title.rendered,
		tags: post.tags,
		createdDate: new Date(post.date),
		slug: post.slug,
		content: post.content.rendered,
		author: getEmbeddedAuthor(post)[0].name,
		categories: post.categories
	};
};
