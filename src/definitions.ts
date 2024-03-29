export type Fetch = (request: Request) => Promise<Response>;
import type { WP_REST_API_Tag } from 'wp-types';

export type QueryOption = {
	page?: number;
	offset?: number;
	per_page?: number;
	highlight?: 0 | 1;
	offer_type?: number | null;
	categories?: number[];
	reference_types?: number[];
	search?: string;
	media_resource_type?: number[];
	slug?: string;
};

export type Post = {
	title: string;
	imageUrl: string;
	tags: WP_REST_API_Tag[];
	imageAltText?: string;
	createdDate: Date;
	slug: string;
	content: string;
	author: string;
	categories: number[];
};

export type ResourceType = {
	id: number;
	count: number;
	description: number;
	slug: string;
	taxonomy: string;
	name: string;
};

export type ReferenceType = ResourceType;

export type MediaResourceType = ResourceType;

export type MediaResourceRecord = {
	[index: number]: {
		total: number;
		remaining: number;
	};
};

export type OfferType = ResourceType;

export type MediaResource = {
	id: number;
	content: string;
	date: Date;
	mediaResourcesTypes: number[];
	imageUrl: string;
	imageAltText?: string;
	title: string;
	slug: string;
	associatedContent?: {
		externalResourceName: string;
		externalResourceURl: string;
	};
};

export type CaseStudy = {
	title: string;
	content: string;
	url?: string;
};

export type MetaData = {
	pageCount: number;
	totalItems: number;
};

export type Reference = {
	id: number;
	date: Date;
	title: string;
	slug: string;
	content: string;
	referenceTypes: number[];
	highlighted: boolean;
	imageUrl?: string;
	associatedContent?: string;
	caseStudy?: CaseStudy;
};

export type DataWithMeta<T> = {
	data: T;
	meta: MetaData;
};

export type IconNames =
	| 'burger'
	| 'mjConseil'
	| 'phone'
	| 'letter'
	| 'letterFull'
	| 'linkedin'
	| 'mjConseilFull'
	| 'youtube'
	| 'plane'
	| 'planeYellow'
	| 'stones'
	| 'stonesYellow'
	| 'ladder'
	| 'ladderYellow'
	| 'close'
	| 'envelop'
	| 'caret'
	| 'checkMark'
	| 'curve'
	| 'target'
	| 'external';

export type PostGroupedByCategories = {
	categoryId: number;
	categoryName: string;
	posts: Post[];
	firstNewPostItemIndex?: number;
};

export type MediaResourcesByTypes = {
	mediaResourceTypeId: number;
	mediaResourceTypeName: string;
	resource: MediaResource[];
	firstNewResourceItemIndex?: number;
};

export type PostWithCategory = {
	categoryId?: number;
	categoryName?: string;
} & Post;

export type Newsletter = {
	date: Date;
	imageUrl?: string;
	excerpt: string;
	imageAltText: string;
	title: string;
	id: number;
	sendInBlueData?: {
		url: string;
		urlLabel: string;
	};
	newsLetterNumber?: number;
};
