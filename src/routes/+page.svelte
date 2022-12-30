<script lang="ts">
	import Header from '$lib/components/mollecules/Header/Header.svelte';
</script>

<Header />

<main class="bg-blue-dark mt-3" id="main-content">
	<h1 class="mj-h1--alt">Nous mettons la communication au service de la transition écologique</h1>

	<p class="mt-3 text-white">
		Nous sommes un trio d’experts en RSE et communication capables de vous aider de la définition de
		votre stratégie à la mise en place opérationnelle.
	</p>
</main>

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

<!-- svelte-ignore a11y-no-redundant-roles not redundant because this is the main footer -->
<footer role="contentinfo" class="mt-5">
	<nav>
		<ul>
			<li><a href="#"> lien 1</a></li>
			<li><a href="#"> lien 2</a></li>
		</ul>
	</nav>
</footer>
