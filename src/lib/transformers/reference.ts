import { getEmbeddedMedia } from '$lib/utils/media';
import type { Reference } from 'src/definitions';

export const transformWordpressReferenceToReference = (reference: any): Reference => {
	const embededMedias = getEmbeddedMedia(reference);
	return {
		content: reference.content.rendered,
		id: reference.id,
		title: reference.title.rendered,
		date: new Date(reference.date),
		referenceTypes: reference.reference_types,
		highlighted: reference.acf.mise_en_avant_reference || false,
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
