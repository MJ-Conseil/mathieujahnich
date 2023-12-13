import { getNewsletters } from '$lib/repositories/newsletters';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const newsletters = await getNewsletters(fetch);

    return {
        newsletters
    };
};
