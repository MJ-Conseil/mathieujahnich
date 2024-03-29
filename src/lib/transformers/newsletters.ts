import { getEmbeddedMedia } from '$lib/utils/media';
import type { Newsletter } from 'definitions';

export const transformRawNewsletterToNewsletter = (rawNewsletter: any): Newsletter => {
	const media = getEmbeddedMedia(rawNewsletter);
	const newsLetterNumber = rawNewsletter.acf?.numero_newsletter;

	return {
		id: rawNewsletter.id,
		excerpt: rawNewsletter.content.rendered,
		title: rawNewsletter.title.rendered,
		date: new Date(rawNewsletter.date),
		imageUrl: media && media.length > 0 ? media[0].source_url : '',
		imageAltText: media && media.length > 0 ? media[0].alt_text : '',
		newsLetterNumber: newsLetterNumber ? parseInt(newsLetterNumber) : undefined,
		sendInBlueData: {
			url: rawNewsletter.acf?.newsletter_sendinblue_url,
			urlLabel: rawNewsletter.acf?.intitule_du_lien_sendinblue
		}
	};
};
