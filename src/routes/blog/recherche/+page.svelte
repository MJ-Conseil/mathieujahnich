<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Search from '$lib/components/mollecules/Search/Search.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
	import { getPosts } from '$lib/repositories/post';

	import { patchQueryString } from '$lib/utils/url';
	import type { QueryOption } from 'definitions';

	import type { PageData } from './$types';

	export let data: PageData;

	$: searchParams = data.searchParams;
	$: posts = data.posts;

	const handleSearch = async (e: CustomEvent<QueryOption>) => {
		const searchParams = {
			...e.detail,
			per_page: 9
		};
		const queryString = patchQueryString(searchParams);

		await goto(`/blog/recherche?${queryString}`);
	};

	const handleFilterByCategory = async (id: number) => {
		let categoryIds = (searchParams.categories || []) as number[];

		searchParams = {
			...searchParams,
			page: 1
		};

		if (categoryIds.includes(id)) {
			categoryIds = categoryIds.filter((item) => item !== id);
		} else {
			categoryIds = [...categoryIds, id];
		}

		searchParams = {
			...searchParams,
			categories: categoryIds.length > 0 ? categoryIds : []
		};

		posts = await getPosts(fetch, searchParams);
		const queryString = patchQueryString(searchParams);

		await goto(`${ROUTES.Blog}/recherche?${queryString}`, {
			noScroll: true
		});
	};

	const handleLoadMorePosts = async () => {
		const currentPage = (searchParams.page || 1) + 1;

		searchParams = {
			...searchParams,
			page: currentPage
		};

		const newPosts = await getPosts(fetch, searchParams);

		posts = [...posts, ...newPosts];
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Blog</title>
</svelte:head>

<div class="py-12 bg-gray">
	<Container>
		<header>
			<h1 class="mj-h1">Résultats de recherche</h1>
		</header>

		<div class="mt-8">
			<Search
				alt
				categories={data.categories.map((item) => {
					return {
						id: item.id,
						name: item.name
					};
				})}
				buttonLabel={'Rechercher'}
				label="Rechercher un article précis :"
				value={searchParams.search}
				on:search={handleSearch}
			/>
		</div>
	</Container>
</div>

<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" id="main">
	<Section>
		<h2>
			{`${posts.length} résultat${posts.length > 1 ? 's' : ''} trouvé${
				posts.length > 1 ? 's' : ''
			} ${searchParams.search ? `pour "${searchParams.search}"` : ''}`}
		</h2>

		<div class="flex mt-12 gap-3 flex-wrap">
			{#each data.categories as category}
				<Tag
					active={searchParams.categories ? searchParams.categories.includes(category.id) : false}
					on:click={() => handleFilterByCategory(category.id)}
					name={category.name}
				/>
			{/each}
		</div>

		<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-3">
			{#if posts.length > 0}
				{#each posts as post}
					<PostCard
						createdDate={new Intl.DateTimeFormat('fr-FR', {
							day: '2-digit',
							month: 'long',
							year: 'numeric'
						}).format(post.createdDate)}
						picureAlternativeText={post.title}
						pictureURL={post.imageUrl}
						tagName={post.categoryName}
						href={`${ROUTES.Blog}/${post.slug}`}
					/>
				{/each}
			{:else}
				<p>Pas de résultat trouvé</p>
			{/if}
		</div>

		{#if posts.length > 0}
			<div class="w-full mt-12 flex items-center justify-center">
				<Button on:click={handleLoadMorePosts} name="Afficher plus d'articles" type="primary" />
			</div>
		{/if}
	</Section>
</main>
