<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ParticularSign from '$lib/components/mollecules/ParticularSign/ParticularSign.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import type { PageData } from './$types';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME, SIZE } from '$lib/constants';

	import groupPicture from '$lib/assets/images/mj-group-picture.png';
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
			<p class="text-sand text-xl font-bold">MJ Conseil</p>
			<h1 class="mj-h1--alt lg:text-6xl text-4xl m-0 p-0">
				Nous mettons la <span class="font-bold"> communication</span> au service de la
				<span class="font-bold">transition écologique</span>
			</h1>

			<Headline>
				Nous sommes un trio d’expertes en RSE et communication capables de vous aider de la
				définition de votre stratégie à la mise en place opérationnelle.
			</Headline>
		</div>
	</Container>

	<div class="flex justify-center">
		<div class="relative w-4/5 md:w-1/2">
			<img class="z-20 relative" src={groupPicture} alt="trio d'experts en communication" />

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

<main class="md:p-0 md:0" id="main">
	<Section>
		<h2>Signes particuliers</h2>
		<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-3">
			<ParticularSign
				title="Notre trio"
				content="Nous collaborons toutes les trois depuis de nombreuses années. Nous mettons nos expertises complémentaires en RSE et en communication, notre complicité et notre bienveillance au service de la transformation de votre organisation."
			/>
			<ParticularSign
				title="Notre engagement"
				content="Nous concevons notre activité de conseil comme un levier pour mettre la filière marketing et communication au service de la transformation des modèles économiques et de la transition écologique et solidaire. Nous cherchons à faire « bouger les lignes ». "
			/>
			<ParticularSign
				title="Notre écoute"
				content="Parce que tout projet commence par l’écoute de vos enjeux, de vos inquiétudes et de vos freins, nous vous aidons à identifier vos besoins réels et vos marges de progrès. Notre rôle est à la fois de vous soutenir et de vous « challenger ». "
			/>
		</div>
		<div class="lg:container h-full" />
	</Section>

	<OfferRow />

	<section class="pb-8 md:pb-8 md:p-0 md:py-4 p-4 bg-gray">
		<Container>
			<h2 class="mb-4">À la une du blog</h2>
			<p class="font-ptsans text-xl md:my-12 my-8">
				Depuis 2005, nous interrogeons l’alignement de la communication et du marketing avec les
				enjeux de transition écologique. Retrouvez ici nos analyses, des témoignages et des
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
