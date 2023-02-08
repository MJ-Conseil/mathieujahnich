export type Fetch = (request: Request) => Promise<Response>;
import type { WP_REST_API_Tag } from 'wp-types';

export type Post = {
	title: string;
	imageUrl: string;
	tags: WP_REST_API_Tag[];
	createdDate: Date;
};

export type ReferenceType = {
	id: number,
	count: number
	description: number,
	slug: number,
	taxonomy: string
	name: string
}