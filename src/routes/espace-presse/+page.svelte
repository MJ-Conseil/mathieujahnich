<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';

	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';

	import type { PageData } from './$types';

	export let data: PageData;

	$: mediaResources = data.mediaResources;

	// const handleLoadMorePostFormCategory = async (categoryId: number) => {
	// 	const newPage = (categoryPageRecord[categoryId] || 1) + 1;

	// 	categoryPageRecord = {
	// 		...categoryPageRecord,
	// 		[categoryId]: newPage
	// 	};

	// 	const matchingPostCategory = postGrouppedByCategories.find(
	// 		(item) => item.categoryId === categoryId
	// 	);

	// 	if (!matchingPostCategory) {
	// 		return;
	// 	}

	// 	const newPosts = await getPosts(fetch, {
	// 		categories: [categoryId],
	// 		per_page: 3,
	// 		page: newPage
	// 	});

	// 	const forgedMatchningPostCategory: PostGroupedByCategories = {
	// 		categoryId: matchingPostCategory.categoryId,
	// 		categoryName: matchingPostCategory.categoryName,
	// 		posts: [...matchingPostCategory.posts, ...newPosts]
	// 	};

	// 	postGrouppedByCategories = postGrouppedByCategories.map((item) =>
	// 		item.categoryId == categoryId ? forgedMatchningPostCategory : item
	// 	);
	// };
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Espace Presse</title>
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
	</Container>
</div>

<main>
	{#each mediaResources as mediaResourceItem, index}
		{#if mediaResourceItem.resource.length > 0}
			{@const isOdd = index % 2 != 0}

			<Section alt={isOdd}>
				<h2>{mediaResourceItem.mediaResourceTypeName}</h2>

				<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-3">
					{#each mediaResourceItem.resource as mediaResource}
						<PostCard
							createdDate={mediaResource.date}
							title={mediaResource.title}
							pictureURL={mediaResource.imageUrl}
							href={''}
						/>
					{/each}
				</div>

				<!-- <div class="w-full mt-8 mb-12 flex items-center justify-center">
            <Button
                on:click={() => handleLoadMorePostFormCategory(postGrouppedByCategory.categoryId)}
                name={`Afficher plus d'articles pour  ${postGrouppedByCategory.categoryName.toLowerCase()}`}
                type="primary"
            />
        </div> -->
			</Section>
		{/if}
	{/each}
</main>
