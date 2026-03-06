import { getEmbeddedMedia } from '$lib/utils/media';
import type { GreenWhasingCase } from 'definitions';

export const transformWordpressGreenWhasingCaseToGreenWhasingCase = (greenWhasingCase: any): GreenWhasingCase => {
	const embededMedias = getEmbeddedMedia(greenWhasingCase);
	return {
		content: greenWhasingCase.content.rendered,
		id: greenWhasingCase.id,
		title: greenWhasingCase.title.rendered,
		date: new Date(greenWhasingCase.date),
		greenwashingCaseTypes: greenWhasingCase.greenwashing_case_types,
		imageUrl: embededMedias && embededMedias.length > 0 ? embededMedias[0].source_url : undefined,
		slug: greenWhasingCase.slug
	};
};
