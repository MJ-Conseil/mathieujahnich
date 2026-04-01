<script lang="ts">
	import slugify from 'slugify';
	import Tag from '$lib/components/atoms/Tag/Tag.svelte';
	import type { PageData } from './$types';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';
	import { getGreenWhasingCases } from '$lib/repositories/greenWashingCases';
	import ResourceAccordion from '$lib/components/mollecules/ResourceAccordion/ResourceAccordion.svelte';
	import caseClosed from '$lib/assets/images/foo.jpg';
	import notGuity from '$lib/assets/images/case-closed-not-guilty.jpg';
	import stillPending from '$lib/assets/images/case-still-pending.jpg';

	export let data: PageData;

	let greenWashingCaseIndexToBeFocused: number | undefined = undefined;

	$: filteredgrennWashingCases = data.grennWashingCases.data;

	$: meta = data.grennWashingCases.meta;

	let selectedFilterIds: number[] = [];

	let currentPage = 1;
	$: if (selectedFilterIds.length === 0) {
		filteredgrennWashingCases = data.grennWashingCases.data;
	}

	const handleClickgreenWashingCaseType = async (id: number) => {
		if (selectedFilterIds.includes(id)) {
			selectedFilterIds = selectedFilterIds.filter((item) => item !== id);
		} else {
			selectedFilterIds = [...selectedFilterIds, id];
		}

		if (selectedFilterIds.length > 0) {
			filteredgrennWashingCases = (
				await getGreenWhasingCases(fetch, {
					greenwashing_case_types: selectedFilterIds
				})
			).data;
		} else {
			filteredgrennWashingCases = (await getGreenWhasingCases(fetch)).data;
		}
	};

	const handleLoadMoregrennWashingCases = async () => {
		currentPage += 1;
		const newResults = (
			await getGreenWhasingCases(fetch, {
				per_page: 10,
				page: currentPage
			})
		).data;

		const oldgrennWashingCases = filteredgrennWashingCases;

		filteredgrennWashingCases = [...oldgrennWashingCases, ...newResults];

		greenWashingCaseIndexToBeFocused = oldgrennWashingCases.length;
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Greenwashing Cases</title>
</svelte:head>

<PageHeader>
	<h1 class="mj-h1--alt">Greenwashing Cases</h1>
	<Headline>
		In this section, you will find the main court decisions or ongoing cases related to the fight
		against greenwashing in France, Europe, and elsewhere in the world. This list is updated
		regularly. Please feel free to send me any information you may have on other greenwashing cases. <br
		/> <br />
		My name is Mathieu Jahnich. I’m a freelance consultant in responsible marketing and communication.
		I help committed companies promote their CSR strategy without falling into the trap of greenwashing.
	</Headline>
</PageHeader>

<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->

<main role="main" class="md:p-0 md:0" id="main-content">
	<Section>
		<h2>Greenwashing cases</h2>

		
	

		<div class=" mt-7">
			<h3>Legend</h3>

			<ul class="flex flex-col gap-3">
				<li class=" flex items-center gap-3"><img class="max-h-[40px] w-auto" src={notGuity} alt="" /> <p> Case ruled : no greenwashing </p> </li>
				<li class=" flex items-center gap-3"><img class="max-h-[40px] w-auto" src={caseClosed} alt="" /> <p> Case ruled : greenwashing confirmed </p> </li>
				<li class=" flex items-center gap-3"><img class="max-h-[40px] w-auto" src={stillPending} alt="" /> <p> Case still pending</p> </li>

			</ul>
		</div>

	<p class="text-xl mb-5 mt-7">You can filter them by industry sector and topic.</p>
		<div class="flex mt-7 gap-3 flex-wrap">
			{#each data.greenWashingCaseTypes as greenWashingCaseType}
				<Tag
					active={selectedFilterIds.includes(greenWashingCaseType.id)}
					on:click={() => handleClickgreenWashingCaseType(greenWashingCaseType.id)}
					name={greenWashingCaseType.name}
				/>
			{/each}
		</div>

		<div class="mt-8 flex flex-col gap-4">
			{#if filteredgrennWashingCases.length === 0}
				<p class="text-xl">Pas de résultat</p>
			{/if}
			{#each filteredgrennWashingCases as greenWashingCase, i}
				<ResourceAccordion
					focused={i === greenWashingCaseIndexToBeFocused}
					id={slugify(greenWashingCase.title + i)}
					content={greenWashingCase.content}
					imageUrl={greenWashingCase.imageUrl}
					resourceName={greenWashingCase.title}
				/>
			{/each}
		</div>

		{#if filteredgrennWashingCases.length > 4 && currentPage < meta.pageCount}
			<div class="w-full mt-8 flex items-center justify-center">
				<button on:click={handleLoadMoregrennWashingCases} class="bg-indigo rounded text-white p-3"
					>See more
				</button>
			</div>{/if}
	</Section>
</main>
