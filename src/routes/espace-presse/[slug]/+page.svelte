<script lang="ts">
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - {data.mediaResource.title}</title>
</svelte:head>

<main class="blog-wrapper">
	<Section alt>
		<nav aria-label="fil d'ariane" class="mb-8">
			<ul class="flex list-none p-0 m-0">
				<li>
					<a class="hover:underline" href="/">Accueil</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="pl-2">
					<a class="hover:underline" href={ROUTES['Espace Presse']}>Espace Presse</a>
					<span aria-hidden="true">></span>
				</li>
				<li class="pl-2">
					{data.mediaResource.title}
				</li>
			</ul>
		</nav>

		<p class="text-indigo font-bold font-ptsans mb-8">Article</p>
		<h1 class="break-words">{data.mediaResource.title}</h1>
	</Section>
	<Section>
		<div class="w-full bg-white mb-10 flex justify-center">
			<img alt={`image de ${data.mediaResource.title}`} src={data.mediaResource.imageUrl} />
		</div>
		{@html data.mediaResource.associatedContent}
	</Section>
</main>
