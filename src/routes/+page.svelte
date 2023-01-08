<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { SOCIAL_NETWORK_LINKS } from '$lib/constants';
</script>

<svelte:head>
	<title>MJ conseil - Acceuil</title>
</svelte:head>

<div class="clipped--bottom  w-full p-4 md:pb-9 relative bg-blue-dark">
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

<main class="container md:p-0 p-4 md:0 md:mx-auto grid grid-flow-row" id="main">
	<section class="mt-3">
		<h2>Signes particuliers</h2>
	</section>

	<section class="mt-3">
		<h2>Nos offres et services</h2>
	</section>

	<section class="mt-3">
		<h2>Formez-vous</h2>
	</section>

	<section class="mt-3">
		<h2>A la une du blog</h2>

		<p class="font-ptsans text-2xl">
			Depuis 2005, j’interroge l’alignement de la communication et du marketing avec les enjeux de
			transition écologique. Retrouvez ici mes analyses, des témoignages et des ressources. Ces
			contenus étaient précédemment publiés sur le site Sircome.
		</p>
	</section>
</main>

<!-- svelte-ignore a11y-no-redundant-roles not redundant because this is the main footer -->
<footer role="contentinfo" class="bg-blue-dark container mx-auto grid mt-5 p-4 w-full">
	<div class="lg:flex  justify-between ">
		<p class="lg:block font-ptsans text-blue-light hidden w-1/6 text-xl">
			<Icon name="mjConseilFull" width="180px" height="auto" />
			Nous mettons la communication au service de la transition écologique
		</p>

		<div>
			<h3 class="mj-h3--alt my-2">Offre conseil</h3>
			<ul class="gap-3 flex flex-col">
				<li><a class="mj-link--alt" href="/tata">Prendre de la hauteur</a></li>
				<li>
					<a class="mj-link--alt visited:underline" href="/toto">Trouver le juste équilibre</a>
				</li>
				<li><a class="mj-link--alt visited:underline" href="/tutu">Donner de l'élan</a></li>
			</ul>
		</div>

		<div class="">
			<h3 class="mj-h3--alt my-2">Contact</h3>
			<ul class="gap-1 flex flex-col">
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="phone" />
					</span>

					<span class="sr-only">téléphone :</span>
					+33 6 74 88 92 73
				</li>
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="letter" />
					</span>
					<a class="text-white" href="mailto:conseil@mathieu-jahnich.fr">
						<span class="sr-only">email :</span>
						conseil@mathieu-jahnich.fr
					</a>
				</li>
			</ul>

			<ul class="mt-4 flex gap-2">
				<li>
					<a href={SOCIAL_NETWORK_LINKS.linkedin}>
						<span aria-hidden="true">
							<Icon name="linkedin" width="25px" height="auto" class="text-sand" /></span
						>
						<span class="sr-only">Linkedin</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<hr class="text-white my-4" />

	<div class="lg:flex items-center justify-between">
		<div class="text-white">
			<p>© Copyright 2005 – 2022 | Tous droits réservés</p>
		</div>

		<nav class="lg:m-0 mt-4">
			<ul>
				<li class="text-white">
					Conception et création : <a
						class="text-white font-bold decoration-dotted"
						href="https://www.fairness.coop">Fairness Scop</a
					> et les Designers Ethiques
				</li>
			</ul>
		</nav>
	</div>
</footer>
