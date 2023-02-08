import { getRefereneTypes } from '$lib/repositories/referenceTypes';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
    const referenceTypes = await getRefereneTypes(fetch);
    return { referenceTypes };
};
