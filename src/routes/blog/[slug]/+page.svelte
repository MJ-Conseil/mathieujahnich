<script lang="ts">
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - {data.post.title}</title>
</svelte:head>

<main class="blog-wrapper">
	<Section alt>
		<nav aria-label="fil d'ariane" class="mb-8">
			<ul class="flex list-none p-0 m-0">
				<li>
					<a class="hover:underline" href="/">Acceuil</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="pl-2">
					<a class="hover:underline" href={ROUTES.Blog}>Blog</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="pl-2">
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
			<div class="flex gap-2 md:gap-5 mt-5 flex-wrap ">
				{#each data.post.tags as tag}
					<Tag name={tag.name} />
				{/each}
			</div>
		{/if}
	</Section>
	<Section>
		<div class="w-full bg-white mb-10 flex justify-center">
			<img alt={`image de ${data.post.title}`} src={data.post.imageUrl} />
		</div>
		{@html data.post.content}
	</Section>
</main>
