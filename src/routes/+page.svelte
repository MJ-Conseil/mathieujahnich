<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ParticularSign from '$lib/components/mollecules/ParticularSign/ParticularSign.svelte';
	import Offer from '$lib/components/mollecules/Offer/Offer.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import type { PageData } from './$types';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME, SIZE } from '$lib/constants';
	import logoQualiopi from '$lib/assets/pictures/LogoQualiopi.jpg';
	import logoMasterClass from '$lib/assets/pictures/Logo-MASTERCLASS-carre-200x200.jpg';
	import groupPicture from '$lib/assets/images/mj-group-picture.png';
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Accueil</title>
</svelte:head>
<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
<header role="banner" class="clipped--bottom w-full   md:pt-4 md:pb-96 pb-48 relative bg-blue-dark">
	<Container>
		<div class="md:w-[70%] flex flex-col gap-4  break-words overflow-visible mb-8  ">
			<p class="text-sand font-bold">MJ Conseil</p>
			<h1 class="mj-h1--alt lg:text-6xl text-4xl m-0 p-0">
				Nous mettons la <span class="font-bold"> communication</span> au service de la
				<span class="font-bold">transition écologique</span>
			</h1>

			<Headline>
				Nous sommes un trio d’experts en RSE et communication capables de vous aider de la
				définition de votre stratégie à la mise en place opérationnelle.
			</Headline>
		</div>
	</Container>

	<div class="flex  justify-center ">
		<div class="relative md:w-1/2 w-4/5 ">
			<img src={groupPicture} alt="trio d'experts en communication" />

			<div class="-z-10 absolute bottom-[-15px] right-[90px] hidden md:block">
				<Circle size={SIZE.LARGE} />
			</div>

			<div class="-z-10 absolute bottom-[-15px] right-[-30px] md:hidden">
				<Circle size={SIZE.REGULAR} />
			</div>
		</div>
	</div>

	<div
		aria-hidden="true"
		class="md:block md:absolute top-4 right-4 md:w-[200px] justify-center hidden opacity-80 text-white "
	>
		<Icon width="120%" height="100%" stroke="#ffffff33" fill="#ffffff33" name="mjConseil" />
	</div>
</header>

<main class="md:p-0 md:0" id="main">
	<Section>
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
	</Section>

	<Section>
		<h2 class="mb-8">Nos offres et services</h2>
		<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-12 lg:grid-cols-3 pt-8">
			<Offer
				icon={'ladder'}
				title="Prendre de la hauteur"
				offer="Étudier les principaux enjeux environnementaux et sociaux et l’environnement concurrentiel
	de l’organisation, recueillir et analyser les attentes des parties-prenantes internes et
	externes pour enrichir les stratégies RSE et communication."
				link={ROUTES['Prendre de la hauteur']}
			/>
			<Offer
				icon="stones"
				title="Trouver le juste équilibre"
				offer="Analyser les arguments écologiques des supports marketing et communication pour vérifier
	leur cohérence avec la stratégie RSE et avec les règles déontologiques, mettre en place
	des filets de sécurité pour limiter les accusations de greenwashing."
				link={ROUTES['Trouver le juste équilibre']}
			/>
			<Offer
				icon="plane"
				title="Donner de l’élan"
				offer="Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les
	fonctions marketing, pub, com et toutes leurs interfaces (autres directions, business
	units, partenaires…), vers des pratiques plus responsables."
				link={ROUTES["Donner de l'élan"]}
			/>
		</div>
	</Section>

	<section class="clipped--top pt-[11rem] md:pt-80 pb-8 md:pb-8 md:p-0 md:py-4 p-4 bg-gray">
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

			<div class="mt-8 flex  justify-center w-ful">
				<a
					href={ROUTES['Blog']}
					class="bg-sand 2 px-16 py-5 hover:bg-sand-dark font-bold  rounded  text-indigo"
				>
					Découvrir tous les articles
				</a>
			</div>
		</Container>
	</section>

	<Section>
		<h2>Formez-vous</h2>

		<div class="md:flex items-center flex-row  gap-8 border-[3px] p-5 border-gray rounded-lg">
			<div class="hidden md:block">
				<img src={logoMasterClass} alt="formation Master Class de MJ Conseil" />
				<img class="h-[60px] w-auto" src={logoQualiopi} alt="certification qualiopi" />
			</div>

			<div>
				<h3>Des formations en communication responsable certifiées Qualiopi</h3>
				<p>
					Formations à la communication responsable conçues et animées avec Thierry Libaert. Des
					séances courtes, 100% à distance, qui donnent l’envie et les moyens d’agir. Satisfaction
					globale des participant·es : 8,4/10.
				</p>

				<a
					href={'https://master-class-communication-responsable.fr/'}
					class="bg-sand px-12 p-5 flex items-center gap-2  md:w-[324px] mt-5 hover:bg-sand-dark font-bold  rounded  text-indigo"
				>
					Découvrir les formations
					<Icon width="30px" height="auto" name="external" />
				</a>
			</div>
		</div>
	</Section>
</main>
