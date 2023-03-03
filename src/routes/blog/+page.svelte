<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
	import { getPosts } from '$lib/repositories/post';
	import type { PostGroupedByCategories } from 'src/definitions';
	import type { PageData } from './$types';

	export let data: PageData;

	$: posts = data.posts;
	$: postGrouppedByCategories = data.postGrouppedByCategories;

	let currentPage = 1;

	let categoryIds: number[] = [];

	let categoryPageRecord: Record<number, number> = {};

	const handleFilterByCategory = async (id: number) => {
		currentPage = 0;
		if (categoryIds.includes(id)) {
			categoryIds = categoryIds.filter((item) => item !== id);
		} else {
			categoryIds = [...categoryIds, id];
		}

		posts = await getPosts(fetch, {
			categories: categoryIds.length > 0 ? categoryIds : undefined,
			page: currentPage
		});
	};

	const handleLoadMorePosts = async () => {
		currentPage = currentPage + 1;
		const newPosts = await getPosts(fetch, {
			categories: categoryIds.length > 0 ? categoryIds : undefined,
			page: currentPage
		});

		posts = [...posts, ...newPosts];
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
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Références</title>
</svelte:head>

<header class="py-8 bg-blue-dark ">
	<Container>
		<h1 class="mj-h1--alt">
			<span class="text-sand text-4xl block mb-3">Vers une communication et un marketing</span>
			Plus responsables
		</h1>
		<Headline>
			Depuis 2005, je partage mes analyses, des témoignages et des ressources sur un blog pour aider
			les actrices et les acteurs de la filière marketing et communication à mieux saisir les enjeux
			de soutenabilité et à s’engager vers des pratiques plus responsables. Ces contenus étaient
			précédemment publiés sur le site Sircome.fr.
		</Headline>
	</Container>
</header>

<main>
	<Section alt>
		<h2>Les derniers posts</h2>
		<p>Vous pouvez filtrer nos articles à l’aide des mots clés ci-dessous.</p>
		<div class="flex justify-between mt-12  gap-3 flex-wrap">
			{#each data.categories as category}
				<Tag
					active={categoryIds.includes(category.id)}
					on:click={() => handleFilterByCategory(category.id)}
					name={category.name}
				/>
			{/each}
		</div>
		<div class="h-full md:gap-x-20 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-3">
			{#each posts as post}
				<PostCard
					createdDate={post.createdDate}
					title={post.title}
					pictureURL={post.imageUrl}
					tagName={post.tags && post.tags.length > 0 ? post.tags[0].name : ''}
				/>
			{/each}
		</div>
		<div class="w-full mt-8 flex items-center justify-center">
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

			<div class="w-full mt-8 flex items-center justify-center">
				<Button
					on:click={() => handleLoadMorePostFormCategory(postGrouppedByCategory.categoryId)}
					name={`Afficher plus d'articles pour  ${postGrouppedByCategory.categoryName.toLowerCase()}`}
					type="primary"
				/>
			</div>
		</Section>
	{/each}
</main>
