export type Post = {
	id: number;
	date: Date;
	date_gmt: Date;
	guid: {
		rendered: string;
	};
	modified: Date;
	modified_gmt: Date;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: boolean;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	comment_status: string;
	ping_status: string;
	sticky: boolean;
	template: string;
	format: string;
	meta: [];
	categories: number[];
	tags: [];
	yoast_head: string;
	yoast_head_json: {
		title: string;
		description: string;
		robots: {
			index: string;
			follow: string;
			'max-snippet': string;
			'max-image-preview': string;
			'max-video-preview': string;
		};
		canonical: string;
		og_locale: string;
		og_type: string;
		og_title: string;
		og_description: string;
		og_url: string;
		og_site_name: string;
		article_published_time: Date;
		article_modified_time: Date;
		og_image: {
			width: number;
			height: number;
			url: string;
			type: string;
		};
		author: string;
		twitter_card: string;
		twitter_misc: {
			'Écrit par': string;
			'Durée de lecture estimée': string;
		};
		schema: {
			'@content': string;
			'@graph': [
				{
					'@type': string;
					'@id': string;
					url?: string;
					name?: string;
					isPartOf?: {
						'@id': string;
					};
					datePublished?: Date;
					dateModified?: Date;
					author?: {
						'@id': string;
					};
					description?: string;
					breadcrumb?: {
						'@id': string;
					};
					inLanguage?: string;
					potentialAction?: [
						{
							'@type': string;
							target: string[];
						}
					];
					itemListElement?: [
						{
							'@type'?: string;
							position?: number;
							name?: string;
							item?: string;
						}
					];
				}
			];
		};
	};
	_links: {
		self: [
			{
				href: string;
			}
		];
		collection: [
			{
				href: string;
			}
		];
		about: [
			{
				href: string;
			}
		];
		authors: [
			{
				embeddable: boolean;
				href: string;
			}
		];
		replies: [
			{
				embeddable: boolean;
				href: string;
			}
		];
		'version-history': [
			{
				count: number;
				href: string;
			}
		];
		'redecessor-version': [
			{
				id: number;
				href: string;
			}
		];
		'wp:featuredmedia': [
			{
				embeddable: boolean;
				href: string;
			}
		];
		'wp:attachment': [
			{
				href: string;
			}
		];
		'wp:term': [
			{
				taxonomy: string;
				embeddable: boolean;
				href: string;
			}
		];
		curies: [
			{
				name: string;
				href: string;
				templated: boolean;
			}
		];
	};
};
