import { api } from '$lib/utils/api';
import type { Fetch } from 'definitions';
import type { WP_REST_API_Category } from 'wp-types';

export const getCategories = async (fetch: Fetch): Promise<WP_REST_API_Category[]> => {
	return await api<WP_REST_API_Category[]>(`/categories/`, fetch);
};
