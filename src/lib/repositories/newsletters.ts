import { transformRawNewsletterToNewsletter } from '$lib/transformers/newsletters';
import { api } from '$lib/utils/api';
import type { Fetch, Newsletter } from 'definitions';

export const getNewsletters = async (fetch: Fetch): Promise<Newsletter[]> => {
	return (await api<any[]>(`/newsletters?_embed`, fetch)).map(transformRawNewsletterToNewsletter);
};
