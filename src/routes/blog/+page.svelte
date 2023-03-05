<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Search from '$lib/components/mollecules/Search/Search.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
	import { getPosts, type Options } from '$lib/repositories/post';
	import type { PostGroupedByCategories } from 'src/definitions';
	import type { PageData } from './$types';

	const patchQueryString = async (options: Options) => {
		Object.entries(options).forEach(([key, value]) => {
			if (value) {
				$page.url.searchParams.set(key, JSON.stringify(value));
			} else {
				$page.url.searchParams.delete(key);
			}
		});

		await goto($page.url.toString(), { noScroll: true, replaceState: false });
	};

	export let data: PageData;

	$: posts = data.posts;
	$: postGrouppedByCategories = data.postGrouppedByCategories;

	$: searchParams = data.searchParams;

	let categoryPageRecord: Record<number, number> = {};

	const handleFilterByCategory = async (id: number) => {
		let categoryIds = searchParams.categories || [];

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
			categories: categoryIds.length > 0 ? categoryIds : undefined
		};

		posts = await getPosts(fetch, searchParams);
		patchQueryString(searchParams);
	};

	const handleLoadMorePosts = async () => {
		const currentPage = (searchParams.page || 1) + 1;

		let categoryIds = searchParams.categories || [];
		const newPosts = await getPosts(fetch, {
			categories: categoryIds.length > 0 ? categoryIds : undefined,
			page: currentPage
		});

		searchParams = {
			...searchParams,
			page: currentPage
		};

		posts = [...posts, ...newPosts];

		patchQueryString(searchParams);
	};

	const handleLoadMorePostFormCategory = async (categoryId: number) => {
		const newPage = (categoryPageRecord[categoryId] || 1) + 1;

		categoryPageRecord = {
			...categoryPageRecord,
			[categoryId]: newPage
		};

		const matchingPostCategory = postGrouppedByCategories.find(
			(item) => item.categoryId === categoryId
		);

		if (!matchingPostCategory) {
			return;
		}

		const newPosts = await getPosts(fetch, {
			categories: [categoryId],
			per_page: 3,
			page: newPage
		});

		const forgedMatchningPostCategory: PostGroupedByCategories = {
			categoryId: matchingPostCategory.categoryId,
			categoryName: matchingPostCategory.categoryName,
			posts: [...matchingPostCategory.posts, ...newPosts]
		};

		postGrouppedByCategories = postGrouppedByCategories.map((item) =>
			item.categoryId == categoryId ? forgedMatchningPostCategory : item
		);
	};

	const handleSearch = async (e: CustomEvent<Options>) => {
		posts = await getPosts(fetch, e.detail);

		searchParams = e.detail;

		patchQueryString(searchParams);
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Blog</title>
</svelte:head>

<div class="py-8 bg-blue-dark ">
	<Container>
		<header>
			<h1 class="mj-h1--alt">
				<span class="text-sand text-4xl block mb-3">Vers une communication et un marketing</span>
				Plus responsables
			</h1>
			<Headline>
				Depuis 2005, je partage mes analyses, des témoignages et des ressources sur un blog pour
				aider les actrices et les acteurs de la filière marketing et communication à mieux saisir
				les enjeux de soutenabilité et à s’engager vers des pratiques plus responsables. <br /> Ces contenus
				étaient précédemment publiés sur le site Sircome.fr.
			</Headline>
		</header>

		<div class="mt-8">
			<Search
				categories={data.categories}
				buttonLabel={'Recherchez'}
				label="Recherchez un article précis :"
				on:search={handleSearch}
				value={searchParams.search}
			/>
		</div>
	</Container>
</div>

<main>
	<Section alt>
		<h2>Les derniers posts</h2>
		<p>Vous pouvez filtrer nos articles à l’aide des mots clés ci-dessous.</p>
		<div class="flex justify-between mt-12  gap-3 flex-wrap">
			{#each data.categories as category}
				<Tag
					active={searchParams.categories ? searchParams.categories.includes(category.id) : false}
					on:click={() => handleFilterByCategory(category.id)}
					name={category.name}
				/>
			{/each}
		</div>
		<div class="h-full md:gap-x-20 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-3">
			{#if posts.length > 0}
				{#each posts as post}
					<PostCard
						createdDate={post.createdDate}
						title={post.title}
						pictureURL={post.imageUrl}
						tagName={post.tags && post.tags.length > 0 ? post.tags[0].name : ''}
					/>
				{/each}
			{:else}
				<p>Pas de résultat trouvé</p>
			{/if}
		</div>
		<div class="w-full mt-12 flex items-center justify-center">
			<Button on:click={handleLoadMorePosts} name="Afficher plus d'articles" type="primary" />
		</div>
	</Section>

	{#each postGrouppedByCategories as postGrouppedByCategory, index}
		{@const isOdd = index % 2 != 0}

		<Section alt={isOdd}>
			<h2>{postGrouppedByCategory.categoryName}</h2>

			<div class="h-full md:gap-x-20 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-3">
				{#each postGrouppedByCategory.posts as post}
					<PostCard
						createdDate={post.createdDate}
						title={post.title}
						pictureURL={post.imageUrl}
						tagName={postGrouppedByCategory.categoryName.toLocaleLowerCase()}
					/>
				{/each}
			</div>

			<div class="w-full mt-12 flex items-center justify-center">
				<Button
					on:click={() => handleLoadMorePostFormCategory(postGrouppedByCategory.categoryId)}
					name={`Afficher plus d'articles pour  ${postGrouppedByCategory.categoryName.toLowerCase()}`}
					type="primary"
				/>
			</div>
		</Section>
	{/each}
</main>
