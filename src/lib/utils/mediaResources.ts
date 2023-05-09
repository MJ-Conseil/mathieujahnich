import type { MediaResource, MediaResourcesByTypes } from 'src/definitions';

export const groupMediaResourceByType = (
	mediaResource: MediaResource[][],
	mediaResourceTypes: { id: number; name: string }[]
): MediaResourcesByTypes[] => {
	return mediaResourceTypes.map((mediaResourceType, index) => {
		return {
			mediaResourceTypeId: mediaResourceType.id,
			mediaResourceTypeName: mediaResourceType.name,
			resource: mediaResource[index]
		};
	});
};
