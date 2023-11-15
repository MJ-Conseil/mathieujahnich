<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Input from '$lib/components/atoms/Input/Input.svelte';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME, SIZE } from '$lib/constants';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Newsletter</title>
</svelte:head>

<div class="py-8 bg-blue-dark">
	<Container>
		<header>
			<p class="text-sand text-xl mb-3">Réconcilier communication et transition</p>
			<h1 class="mj-h1--alt">Newsletter</h1>
			<Headline>
				Nous vous proposons une sélection de contenus originaux pas plus d’une fois par mois,
				reliant les enjeux de soutenabilité aux pratiques marketing et communication. Notre objectif
				est de nourrir votre réflexion et d’éclairer votre champ d’actions. Notre ambition est de
				contribuer à (ré)concilier communication et transition. Au plaisir de lire vos commentaires.
			</Headline>
		</header>
	</Container>
</div>

<main id="main-content">
	<Section alt>
		<h2>Les numéros précédents</h2>

		<div class="h-full md:gap-x-10 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-2">
			{#each data.newsletters as newsletter}
				<PostCard
					createdDate={new Intl.DateTimeFormat('fr-FR', {
						month: 'long',
						year: 'numeric'
					}).format(newsletter.date)}
					title={newsletter.title}
					pictureURL={newsletter.imageUrl}
					size={SIZE.LARGE}
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
