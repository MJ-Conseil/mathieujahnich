
import { transformWordpressReferenceTypeToPost } from '$lib/transformers/referenceTypes';
import { api } from '$lib/utils/api';
import type { Fetch, ReferenceType } from 'src/definitions';

export const getRefereneTypes = async (fetch: Fetch): Promise<ReferenceType[]> => {
    return (await api<ReferenceType[]>(`/reference_types`, fetch)).map(
        transformWordpressReferenceTypeToPost
    );
};
