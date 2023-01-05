<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
</script>

<div class="clipped--bottom  w-full md:p-4 pb-9 relative bg-blue-dark">
	<div class="md:container md:py-4 md:mx-auto">
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="md:w-[70%] flex flex-col gap-4  break-words overflow-visible  ">
			<p class="text-sand font-bold">Mj Conseil</p>
			<h1 class="mj-h1--alt text-4xl text">
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
		class="md:block md:absolute top-4 right-0   md:w-[190px] justify-center hidden opacity-80 text-white "
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
<footer role="contentinfo" class="mt-5">
	<nav>
		<ul>
			<li><a href="#"> lien 1</a></li>
			<li><a href="#"> lien 2</a></li>
		</ul>
	</nav>
</footer>
