<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ParticularSign from '$lib/components/mollecules/ParticularSign/ParticularSign.svelte';
	import Offer from '$lib/components/mollecules/Offer/Offer.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import type { PageData } from './$types';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>MJ Conseil - Accueil</title>
</svelte:head>

<div class="clipped--bottom w-full md:p-0 md:pt-4 md:pb-36 p-4 relative bg-blue-dark">
	<Container>
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="md:w-[70%] flex flex-col gap-4  break-words overflow-visible  ">
			<p class="text-sand font-bold">Mj Conseil</p>
			<h1 class="mj-h1--alt lg:text-6xl text-4xl text">
				Nous mettons la <span class="font-bold"> communication</span> au service de la
				<span class="font-bold">transition écologique</span>
			</h1>

			<p class="text-white">
				Nous sommes un trio d’experts en RSE et communication capables de vous aider de la
				définition de votre stratégie à la mise en place opérationnelle.
			</p>
		</header>
	</Container>

	<div
		aria-hidden="true"
		class="md:block md:absolute top-4 right-4 md:w-[200px] justify-center hidden opacity-80 text-white "
	>
		<Icon width="120%" height="100%" stroke="#ffffff33" fill="#ffffff33" name="mjConseil" />
	</div>
</div>

<main class="md:p-0 md:0" id="main">
	<section class="md:p-0 md:mt-8 md:py-4 p-4">
		<Container>
			<h2>Signes particuliers</h2>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5  lg:grid-cols-3">
				<ParticularSign
					title="A l’interface de la RSE et de la Com"
					content="Réconcilier les deux en co-construction Vu l’évolution grâce à nos +60 ans d’expérience"
				/>
				<ParticularSign
					title="De la recherche à l’action"
					content="Parce que nous nous positionnons en complément des agences de com et des  cabinets conseil nous vous proposons une vision qui va de la recherche à l’action"
				/>
				<ParticularSign
					title="Écoute & qualité de services"
					content="Parce que tout projet commence par l’écoute de nos clients (disponibilité), de vos inquiétudes, de vos freins nous vous aidons à identifier vos besoins réels et challenger vos marges de projet."
				/>
			</div>
			<div class="lg:container h-full" />
		</Container>
	</section>

	<section class="md:p-0 md:pt-4 p-4">
		<Container>
			<h2 class="mb-8">Nos offres et services</h2>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-12 lg:grid-cols-3 pt-8">
				<Offer
					icon={'ladder'}
					title="Prendre de la hauteur"
					offer="Étudier les principaux enjeux environnementaux et sociaux et l’environnement concurrentiel
			de l’organisation, recueillir et analyser les attentes des parties-prenantes internes et
			externes pour enrichir les stratégies RSE et communication."
					link="/offres-de-services/prendre-de-la-hauteur"
				/>
				<Offer
					icon="stones"
					title="Trouver le juste équilibre"
					offer="Analyser les arguments écologiques des supports marketing et communication pour vérifier
			leur cohérence avec la stratégie RSE et avec les règles déontologiques, mettre en place
			des filets de sécurité pour limiter les accusations de greenwashing."
				/>
				<Offer
					icon="plane"
					title="Donner de l’élan"
					offer="Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les
			fonctions marketing, pub, com et toutes leurs interfaces (autres directions, business
			units, partenaires…), vers des pratiques plus responsables."
				/>
			</div>
		</Container>
	</section>

	<section class="clipped--top md:pt-80 pt-10 pb-8 md:pb-8 md:p-0 md:py-4 p-4 bg-gray">
		<Container>
			<h2 class="mb-4">A la une du blog</h2>

			<p class="font-ptsans text-xl md:my-12 my-8 lg:text-2xl">
				Depuis 2005, j’interroge l’alignement de la communication et du marketing avec les enjeux de
				transition écologique. Retrouvez ici mes analyses, des témoignages et des ressources. Ces
				contenus étaient précédemment publiés sur le site Sircome.
			</p>

			<div class="h-full md:gap-x-20 md:gap-y-10 grid gap-y-5  md:grid-cols-3">
				{#each data.posts as post}
					<PostCard
						createdDate={post.createdDate}
						title={post.title}
						pictureURL={post.imageUrl}
						tag={post.tags[0]}
					/>
				{/each}
			</div>
		</Container>
	</section>
</main>
