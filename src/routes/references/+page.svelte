<script lang="ts">
	import slugify from 'slugify';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import { getReferences } from '$lib/repositories/reference';
	import type { PageData } from './$types';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import ReferenceAccordion from '$lib/components/mollecules/ReferenceAccordion/ReferenceAccordion.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';

	export let data: PageData;

	let referenceIndexToBeFocused: number | undefined = undefined;

	$: filteredReferences = data.references.data;
	$: highlightedReferences = data.highlightedReferences;

	$: meta = data.references.meta;

	let selectedFilterIds: number[] = [];

	let currentPage = 1;
	$: if (selectedFilterIds.length === 0) {
		filteredReferences = data.references.data;
	}

	const handleClickReferenceType = async (id: number) => {
		if (selectedFilterIds.includes(id)) {
			selectedFilterIds = selectedFilterIds.filter((item) => item !== id);
		} else {
			selectedFilterIds = [...selectedFilterIds, id];
		}

		if (selectedFilterIds.length > 0) {
			filteredReferences = (
				await getReferences(fetch, {
					reference_types: selectedFilterIds
				})
			).data;
		} else {
			filteredReferences = (await getReferences(fetch)).data;
		}
	};

	const handleLoadMoreReferences = async () => {
		currentPage += 1;
		const newResults = (
			await getReferences(fetch, {
				per_page: 10,
				page: currentPage,
				offer_type: data.offerTypeId ? parseInt(data.offerTypeId) : undefined
			})
		).data;

		const oldReferences = filteredReferences;

		filteredReferences = [...oldReferences, ...newResults];

		referenceIndexToBeFocused = oldReferences.length;
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Références</title>
</svelte:head>

<PageHeader>
	<h1 class="mj-h1--alt">Références</h1>
	<Headline>
		Depuis plus de vingt ans, j’analyse les stratégies marketing et communication des entreprises
		dans les domaines de l’environnement et de la RSE. Découvrez comment je les accompagne vers des
		pratiques plus responsables, avec la posture « de la recherche à l’action » qui me caractérise.
	</Headline>
</PageHeader>

<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->

<main role="main" class="md:p-0 md:0" id="main-content">
	{#if highlightedReferences.length > 0}
		<Section>
			<h2>Références phares</h2>
			<div class="flex flex-col gap-4">
				{#each highlightedReferences as reference}
					<ReferenceAccordion
						id={slugify(reference.title)}
						content={reference.content}
						imageUrl={reference.imageUrl}
						referenceName={reference.title}
						caseStudy={reference.caseStudy
							? {
									...reference.caseStudy,
									url: `/references/${reference.slug}`
								}
							: undefined}
					/>
				{/each}
			</div>
		</Section>
	{/if}

	<Section>
		<h2>Toutes les références</h2>
		<p class="text-xl mb-5">
			Je travaille pour des secteurs variés. Vous pouvez filtrer les références à l’aide des
			mots-clés ci-dessous.
		</p>

		<div class="flex mt-7 gap-3 flex-wrap">
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
			{#each filteredReferences as reference, i}
				<ReferenceAccordion
					focused={i === referenceIndexToBeFocused}
					id={slugify(reference.title + i)}
					content={reference.content}
					imageUrl={reference.imageUrl}
					referenceName={reference.title}
					caseStudy={reference.caseStudy
						? {
								...reference.caseStudy,
								url: `/references/${reference.slug}`
							}
						: undefined}
				/>
			{/each}
		</div>

		{#if filteredReferences.length > 4 && currentPage < meta.pageCount}
			<div class="w-full mt-8 flex items-center justify-center">
				<button on:click={handleLoadMoreReferences} class="bg-indigo rounded text-white p-3"
					>Afficher plus de références
				</button>
			</div>{/if}
	</Section>
</main>
