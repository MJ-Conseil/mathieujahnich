import { getEmbeddedMedia } from '$lib/utils/media';
import type { Newsletter } from 'src/definitions';

export const transformRawNewsletterToNewsletter = (rawNewsletter: any): Newsletter => {
	const media = getEmbeddedMedia(rawNewsletter);
	const newsLetterNumber = rawNewsletter.acf?.numero_newsletter;

	return {
		id: rawNewsletter.id,
		excerpt: rawNewsletter.content.rendered,
		title: rawNewsletter.title.rendered,
		date: new Date(rawNewsletter.date),
		imageUrl: media && media.length > 0 ? media[0].source_url : '',
		newsLetterNumber: newsLetterNumber ? parseInt(newsLetterNumber) : undefined,
		previewUrl: rawNewsletter.acf?.newsletter_sendinblue
	};
};
