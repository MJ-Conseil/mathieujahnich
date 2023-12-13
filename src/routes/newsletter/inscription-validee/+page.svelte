<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME, SIZE } from '$lib/constants';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Validation Inscription</title>
</svelte:head>

<div class="py-8 bg-blue-dark">
	<Container>
		<header>
			<p class="text-sand text-xl mb-3">Réconcilier communication et transition</p>
			<h1 class="mj-h1--alt">Newsletter</h1>
		</header>
	</Container>
</div>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="md:p-0 md:0" id="main-content">
	<Section>
		<p>Votre inscription à la newsletter est désormais validée. Merci !</p>
		<p class="my-5">
			Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
		</p>
	</Section>
	<Section alt>
		<h2>Les numéros précédents</h2>

		<div class="h-full md:gap-x-10 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-2">
			{#each data.newsletters as newsletter}
				<PostCard
					createdDate={new Intl.DateTimeFormat('fr-FR', {
						month: 'long',
						year: 'numeric'
					}).format(newsletter.date)}
					pictureURL={newsletter.imageUrl}
					size={SIZE.LARGE}
					title={newsletter.title}
					picureAlternativeText={newsletter.imageAltText}
					tagName={newsletter.newsLetterNumber ? `n° ${newsletter.newsLetterNumber}` : ''}
					excerpt={newsletter.excerpt}
				>
					{#if newsletter.sendInBlueData}
						<ArrowLink
							linkTitle={`${newsletter.sendInBlueData.urlLabel} (vers un site externe)`}
							external
							href={newsletter.sendInBlueData.url}>{newsletter.sendInBlueData.urlLabel}</ArrowLink
						>
					{/if}
				</PostCard>
			{/each}
		</div>
	</Section>
</main>
