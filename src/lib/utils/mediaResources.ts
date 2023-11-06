import type {
	MediaResource,
	MediaResourceRecord,
	MediaResourcesByTypes,
	MediaResourceType
} from 'definitions';

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

export const buildRemainingMediaResourceRecord = (
	mediaResourceTypes: MediaResourceType[]
): MediaResourceRecord => {
	return mediaResourceTypes.reduce((prev, next) => {
		return {
			...prev,
			[next.id]: {
				count: next.count,
				remaining: next.count
			}
		};
	}, {});
};

export const getMediaResourceItemCount = (
	id: number,
	mediaResources: MediaResourceType[]
): number => {
	return mediaResources.find((item) => item.id === id)?.count || 0;
};

export const getRemainingNumberOfElements = (
	mediaResourceItemCount: number,
	itemsToBeRemoved: number
) => {
	if (mediaResourceItemCount === 0) return 0;
	return mediaResourceItemCount - itemsToBeRemoved;
};
