<script>
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';

	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Références</title>
</svelte:head>

<PageHeader>
	<h1 class="mj-h1--alt">Plan de site</h1>
</PageHeader>

<main class="mt-8 mb-12" id="main-content">
	<Section>
		{#each Object.entries(ROUTES) as [key, value]}
			<a class="block text-2xl" href={value}> {key}</a>
		{/each}
	</Section>
</main>
