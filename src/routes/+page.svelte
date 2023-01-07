<script lang="ts">

	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import Offer from '$lib/components/mollecules/Offer/Offer.svelte';

</script>

<svelte:head>
	<title>MJ conseil - Acceuil</title>
</svelte:head>

<div class="clipped--bottom flex-1  w-full p-4 md:pb-9 relative bg-blue-dark">
	<div class="md:container md:py-4 md:mx-auto">
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
	</div>

	<div
		aria-hidden="true"
		class="md:block md:absolute top-4 right-0 md:w-[190px] justify-center hidden opacity-80 text-white "
	>
		<Icon width="auto" height="100%" name="mjConseil" />
	</div>
</div>

<main class="container md:p-0 p-4 md:0 md:mx-auto" id="main">
	<section class="my-4">
		<h2 class="mb-8">Signes particuliers</h2>
	</section>

	<section class="my-4">
		<h2 class="mb-8">Nos offres et services</h2>
		<div class="flex flex-col lg:flex-row gap-10">
			<Offer
				icon={'ladder'}
				title="Prendre de la hauteur"
				offer="Étudier les principaux enjeux environnementaux et sociaux et l’environnement concurrentiel
			de l’organisation, recueillir et analyser les attentes des parties-prenantes internes et
			externes pour enrichir les stratégies RSE et communication."
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
	</section>

	<section class="my-4">
		<h2 class="mb-4 font-bold">Formez-vous</h2>
	</section>

	<section class="my-4">
		<h2 class="mb-4 font-bold">A la une du blog</h2>

		<p class="font-ptsans text-2xl">
			Depuis 2005, j’interroge l’alignement de la communication et du marketing avec les enjeux de
			transition écologique. Retrouvez ici mes analyses, des témoignages et des ressources. Ces
			contenus étaient précédemment publiés sur le site Sircome.
		</p>
	</section>
</main>

<Footer />
