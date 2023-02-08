<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>MJ Conseil - Références</title>
</svelte:head>

<header class="pt-8 bg-blue-dark">
	<Container>
		<h1 class="mj-h1--alt">Références</h1>
		<p class="text-white">
			Depuis plus de vingt ans, nous analysons les stratégies marketing et communication des
			entreprises dans les domaines de l’environnement et de la RSE. Découvrez comment nous les
			accompagnons vers des pratiques plus responsables, avec la posture « de la recherche à
			l’action » qui nous caractérise.
		</p>
	</Container>
</header>

<main class="mt-5">
	<section>
		<Container>
			<h2>Toutes nos références</h2>
			<p>
				Nous travaillons pour des secteurs variés. Vous pouvez filtrer nos références à l’aide des
				mots clés ci-dessous.
			</p>

			<div class="flex gap-5 mt-5">
				{#each data.referenceTypes as referenceType}
					<Tag name={referenceType.name} />
				{/each}
			</div>
		</Container>
	</section>
</main>
