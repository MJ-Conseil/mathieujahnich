<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ParticularSign from '$lib/components/mollecules/ParticularSign/ParticularSign.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import type { PageData } from './$types';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME, SIZE } from '$lib/constants';

	import mathieuJahnich from '$lib/assets/images/mj-group-picture.jpg';
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import ButtonLink from '$lib/components/atoms/ButtonLink/ButtonLink.svelte';
	import OfferRow from '$lib/components/organisms/OfferRow.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Accueil</title>
</svelte:head>

<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
<header role="banner" class=" bg-blue-dark md:pt-4 pb-8 lg:pb-12 relative overflow-hidden">
	<Container>
		<div class="md:w-[70%] flex flex-col gap-4 break-words overflow-visible mb-8">
			<p class="text-sand text-xl font-bold">Mathieu Jahnich</p>
			<h1 class="mj-h1--alt lg:text-6xl text-4xl m-0 p-0">
				Je mets la <span class="font-bold"> communication</span> au service de la
				<span class="font-bold">transition écologique</span>
			</h1>

			<Headline>
				En tant que consultant-chercheur indépendant, j’aide les organisations et les entreprises à
				répondre aux attentes sociétales grâce à une communication plus responsable.
			</Headline>
		</div>
	</Container>

	<div class="flex justify-center">
		<div class="relative w-4/5 md:w-1/2">
			<img class="z-20 relative -rotate-3" src={mathieuJahnich} alt="" />

			<div
				class="z-0 absolute md:bottom-[-15px] md:right-[-60px] lg:bottom-[-15px] lg:right-[90px] hidden md:block"
			>
				<Circle size={SIZE.LARGE} />
			</div>

			<div class="z-0 absolute bottom-[-15px] right-[-20px] md:hidden">
				<Circle size={SIZE.REGULAR} />
			</div>
		</div>

		<div
			aria-hidden="true"
			class="md:block md:absolute top-4 right-[-20px] md:w-[250px] justify-center hidden opacity-80 text-white"
		>
			<Icon width="100%" height="100%" stroke="#ffffff33" fill="#ffffff33" name="mjConseil" />
		</div>
	</div>
</header>

<!-- svelte-ignore a11y-no-redundant-roles -- this is the main section of the page -->
<main role="main" class="md:p-0 md:0" id="main">
	<Section>
		<h2>Signes particuliers</h2>
		<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-3">
			<ParticularSign
				title="+ 25 ans d'experience"
				content="Depuis 1999, j’analyse les enjeux de communication des entreprises et des organisations dans le domaine de l’environnement et de la responsabilité sociétale."
			/>
			<ParticularSign
				title="De la recherche à l’action"
				content="Normalien en sciences pour l’ingénieur et titulaire d'un doctorat en communication, j’ai exercé en tant que chercheur, communicant puis consultant. J’enseigne à Sciences Po Paris.    "
			/>
			<ParticularSign
				title="Une expertise reconnue"
				content="Sollicité par l’ADEME depuis 2012, je suis notamment l’auteur principal du Guide de la communication responsable (2020, 2022) et du Guide anti-greenwashing (2025)."
			/>
		</div>
		<div class="lg:container h-full" />
	</Section>

	<OfferRow />

	<section class="pb-8 md:pb-8 md:p-0 md:py-4 p-4 bg-gray">
		<Container>
			<h2 class="mb-4">À la une du blog</h2>
			<p class="font-ptsans text-xl md:my-12 my-8">
				Depuis 2005, j'interroge l'alignement des pratiques communication et marketing avec les
				enjeux de transition écologique. Retrouvez ici mes analyses, des témoignages et des
				ressources.
			</p>

			<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-3">
				{#each data.posts as post}
					<PostCard
						createdDate={new Intl.DateTimeFormat('fr-FR', {
							day: '2-digit',
							month: 'long',
							year: 'numeric'
						}).format(post.createdDate)}
						title={post.title}
						picureAlternativeText={post.imageAltText}
						pictureURL={post.imageUrl}
						tagName={post.tags[0]?.name}
						href={`${ROUTES.Blog}/${post.slug}`}
					/>
				{/each}
			</div>

			<div class="mt-8 flex justify-center w-ful">
				<ButtonLink href={ROUTES['Blog']}>Découvrir tous les articles</ButtonLink>
			</div>
		</Container>
	</section>
</main>
