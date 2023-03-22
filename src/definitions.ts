export type Fetch = (request: Request) => Promise<Response>;
import type { WP_REST_API_Tag } from 'wp-types';

export type QueryOption = {
	page?: number;
	offset?: number;
	per_page?: number;
	highlight?: 0 | 1;
	offerTypeId?: number;
};

export type Post = {
	title: string;
	imageUrl: string;
	tags: WP_REST_API_Tag[];
	createdDate: Date;
	slug: string;
	content: string;
	author: string;
};

export type ReferenceType = {
	id: number;
	count: number;
	description: number;
	slug: string;
	taxonomy: string;
	name: string;
};

export type OfferType = {
	id: number;
	count: number;
	description: number;
	slug: string;
	taxonomy: string;
	name: string;
};

export type Reference = {
	id: number;
	date: Date;
	title: string;
	content: string;
	referenceTypes: number[];
	highlighted: boolean;
	imageUrl?: string;
};

export type IconNames =
	| 'burger'
	| 'mjConseil'
	| 'phone'
	| 'letter'
	| 'linkedin'
	| 'mjConseilFull'
	| 'youtube'
	| 'plane'
	| 'stones'
	| 'ladder'
	| 'close'
	| 'envelop'
	| 'caret'
	| 'checkMark';

export type PostGroupedByCategories = {
	categoryId: number;
	categoryName: string;
	posts: Post[];
};
