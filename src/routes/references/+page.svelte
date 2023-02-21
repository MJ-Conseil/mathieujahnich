<script lang="ts">
	import slugify from 'slugify';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import { getReferences } from '$lib/repositories/reference';
	import type { PageData } from './$types';
	import type { Reference } from 'src/definitions';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import ReferenceAccordion from '$lib/components/mollecules/ReferenceAccordion/ReferenceAccordion.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';

	export let data: PageData;

	let filteredReferences: Reference[] = data.references;
	let selectedFilterIds: number[] = [];

	let currentPage = 1;
	$: if (selectedFilterIds.length === 0) {
		filteredReferences = data.references;
	}

	const hasFilterId = (reference: Reference) =>
		reference.referenceTypes.some((item) => selectedFilterIds.includes(item));

	const handleClickReferenceType = (id: number) => {
		if (selectedFilterIds.includes(id)) {
			selectedFilterIds = selectedFilterIds.filter((item) => item !== id);
		} else {
			selectedFilterIds = [...selectedFilterIds, id];
		}
		filteredReferences = data.references.filter(hasFilterId);
	};

	const handleLoadMoreReferences = async () => {
		currentPage += 1;
		const newResults = await getReferences(fetch, {
			per_page: 10,
			page: currentPage
		});

		filteredReferences = [...filteredReferences, ...newResults];
	};
</script>

<svelte:head>
	<title>MJ Conseil - Références</title>
</svelte:head>

<header class="py-8 bg-blue-dark ">
	<Container>
		<h1 class="mj-h1--alt">Références</h1>
		<Headline>
			Depuis plus de vingt ans, nous analysons les stratégies marketing et communication des
			entreprises dans les domaines de l’environnement et de la RSE. Découvrez comment nous les
			accompagnons vers des pratiques plus responsables, avec la posture « de la recherche à
			l’action » qui nous caractérise.
		</Headline>
	</Container>
</header>

<main class="mt-8 mb-12">
	{#if data.highlightedReferences.length > 0}
		<Section>
			<h2>Références phares</h2>
			<div class="flex flex-col gap-4">
				{#each data.highlightedReferences as reference}
					<ReferenceAccordion
						id={slugify(reference.title)}
						content={reference.content}
						imageUrl={reference.imageUrl}
						title={reference.title}
					/>
				{/each}
			</div>
		</Section>
	{/if}

	<Section>
		<h2>Toutes nos références</h2>
		<p class="text-xl mb-5">
			Nous travaillons pour des secteurs variés. Vous pouvez filtrer nos références à l’aide des
			mots clés ci-dessous.
		</p>

		<div class="flex gap-2 md:gap-5 mt-5 flex-wrap ">
			{#each data.referenceTypes as referenceType}
				<Tag
					active={selectedFilterIds.includes(referenceType.id)}
					on:click={() => handleClickReferenceType(referenceType.id)}
					name={referenceType.name}
				/>
			{/each}
		</div>

		<div class="mt-8 flex flex-col gap-4">
			{#if filteredReferences.length === 0}
				<p class="text-xl">Pas de résultat</p>
			{/if}
			{#each filteredReferences as reference}
				<ReferenceAccordion
					id={slugify(reference.title)}
					content={reference.content}
					imageUrl={reference.imageUrl}
					title={reference.title}
				/>
			{/each}
		</div>

		{#if filteredReferences.length > 4}
			<div class="w-full mt-8 flex items-center justify-center">
				<button on:click={handleLoadMoreReferences} class="bg-indigo text-white p-3"
					>Afficher plus</button
				>
			</div>{/if}
	</Section>
</main>
