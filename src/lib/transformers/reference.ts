import { getEmbeddedMedia } from '$lib/utils/media';
import type { Reference } from 'definitions';

export const transformWordpressReferenceToReference = (reference: any): Reference => {
	const embededMedias = getEmbeddedMedia(reference);
	return {
		content: reference.content.rendered,
		id: reference.id,
		date: new Date(reference.date),
		title: reference.title.rendered,

		referenceTypes: reference.reference_types,
		highlighted: reference.acf?.highlight || false,
		imageUrl: embededMedias && embededMedias.length > 0 ? embededMedias[0].source_url : undefined,
		caseStudy:
			reference?.acf?.case_study_title && reference?.acf?.case_study
				? {
						content: reference?.acf?.case_study,
						title: reference?.acf?.case_study_title
					}
				: undefined,
		slug: reference.slug
	};
};
