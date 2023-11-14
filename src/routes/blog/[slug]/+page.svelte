<script lang="ts">
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - {data.post.title}</title>
</svelte:head>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="blog-wrapper" id="main-content">
	<Section alt>
		<nav aria-label="fil d'ariane" class="mb-8">
			<ul class="md:flex list-none p-0 m-0">
				<li>
					<a class="hover:underline" href="/">Accueil</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="md:pl-2">
					<a class="hover:underline" href={ROUTES.Blog}>Blog</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="md:pl-2">
					{data.post.title}
				</li>
			</ul>
		</nav>

		<p class="text-indigo font-bold font-ptsans mb-8">Article</p>
		<h1 class="break-words">{data.post.title}</h1>
		<p>
			Rédigé par {data.post.author}, publié le {new Intl.DateTimeFormat('fr-FR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			}).format(data.post.createdDate)}
		</p>

		{#if data.post.tags.length > 0}
			<div class="flex gap-2 md:gap-5 mt-5 flex-wrap">
				{#each data.post.tags as tag}
					<Tag name={tag.name} />
				{/each}
			</div>
		{/if}
	</Section>
	<Section narrow>
		<div class="w-full bg-white mb-10 flex justify-center">
			<img alt={`image de ${data.post.title}`} src={data.post.imageUrl} />
		</div>
		{@html data.post.content}
	</Section>

	<Section alt>
		<h3>Les derniers articles</h3>

		<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-3">
			{#each data.lastPosts as post}
				<PostCard
					href={`${ROUTES.Blog}/${post.slug}`}
					title={post.title}
					createdDate={new Intl.DateTimeFormat('fr-FR', {
						day: '2-digit',
						month: 'long',
						year: 'numeric'
					}).format(post.createdDate)}
					pictureURL={post.imageUrl}
				/>
			{/each}
		</div>

		<div class="w-full mt-8 mb-12 flex items-center justify-center">
			<a
				class="border-indigo border rounded block px-4 py-2 text-center hover:no-underline hover:bg-indigo hover:text-white font-bold min-w-[200px] text-indigo"
				href={ROUTES.Blog}>Voir tous les articles</a
			>
		</div>
	</Section>
</main>
