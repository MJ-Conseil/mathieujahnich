<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Input from '$lib/components/atoms/Input/Input.svelte';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
	import type { ActionData, PageData } from './$types';

	export let form: ActionData;
	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Newsletter</title>
</svelte:head>

<div class="py-8 bg-blue-dark ">
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
	<Section>
		<h2>Inscription à la newsletter de MJ Conseil</h2>
		<p>
			Inscrivez-vous à notre newsletter afin de retrouver une sélection mensuelle de contenus
			originaux, reliant les enjeux de soutenabilité aux pratiques marketing et communication.
		</p>

		<form method="POST" class="mt-8 md:w-1/2 w-full">
			{#if form?.contactCreationFailed}
				<p class="font-bold mt-5 text-red">
					Impossible de vous abonner à la newsletter vueillez réassayer plus tard
				</p>
			{/if}

			{#if form?.success}
				<p class="font-bold mt-5 from-sand-dark">
					Votre inscription à la newsletter a bien été prise en compte. Merci.
				</p>
			{/if}
			<Input
				error={form && !form?.email ? 'Ce champs est obligatoire' : ''}
				id="email"
				type="email"
				label="Adresse email:"
				name="email"
				required
			/>
			<Input
				error={form && !form?.firstname ? 'Ce champs est obligatoire' : ''}
				id="firstname"
				type="text"
				label="Prénom:"
				required
				name="firstname"
			/>

			<input
				required
				id="cgu"
				name="cgu"
				class="mt-5 bg-gray-dark border-2 border-gray"
				type="checkbox"
			/>
			<label for="cgu"
				>J'accepte de recevoir des e-mails de MJ Conseil et confirme avoir pris connaissance de la
				politique de confidentialité et des <a href="/informations-legales">mentions légales.</a
				></label
			>

			<p class="my-5">
				Vous pouvez vous désinscrire à tout moment en cliquant sur le lien présent dans nos emails.
			</p>

			<button type="submit" class="bg-indigo mt-5 font-ptsans  rounded text-white py-3 px-6 block"
				>S'abonner</button
			>
		</form>
	</Section>

	<Section alt>
		<h2>Les numéros précédents</h2>

		<div class="h-full md:gap-x-10 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-2">
			{#each data.newsletters as newsletter}
				<PostCard
					createdDate={new Intl.DateTimeFormat('fr-FR', {
						month: 'long',
						year: 'numeric'
					}).format(newsletter.date)}
					title={newsletter.title}
					pictureURL={newsletter.imageUrl}
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
