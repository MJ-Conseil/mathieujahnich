<script lang="ts">
	import type { Options } from '$lib/repositories/post';
	import slugify from 'slugify';
	import { createEventDispatcher } from 'svelte';
	import type { WP_REST_API_Category } from 'wp-types';

	export let label: string;
	export let buttonLabel: string;
	export let categories: Pick<WP_REST_API_Category, 'id' | 'name'>[];
	export let value = '';

	let searchOptions: Options = {
		per_page: 6,
		search: undefined
	};

	$: id = slugify(label);

	const dispatch = createEventDispatcher<{
		search: Options;
	}>();

	const handleSelectCategory = (e: Event) => {
		const target = e?.target as HTMLInputElement;
		const value = JSON.parse(target.value);

		if (!value) {
			searchOptions = {
				...searchOptions,
				categories: undefined
			};
		} else {
			const parsedValue = parseInt(value);
			searchOptions = {
				...searchOptions,
				categories: [parsedValue]
			};
		}
	};

	const handleOnInput = (e: Event) => {
		const target = e.currentTarget as HTMLInputElement;

		searchOptions = {
			...searchOptions,
			search: target.value || ''
		};
	};

	const handleSearch = () => {
		dispatch('search', searchOptions);
	};
</script>

<form role="search">
	<label class="block text-white font-bold font-ptsans text-xl mb-4" for={id}>{label}</label>

	<div class="lg:w-2/3 w-full md:h-10 md:flex rounded-md ">
		<input
			on:input={handleOnInput}
			class="lg:w-2/3 w-full h-full p-2"
			on:change
			required
			{id}
			{value}
			type="text"
		/>
		<label class="sr-only" for="filter-by-category"
			>Rechercher un sujet pour une catégorie spécifique</label
		>
		<select
			on:change={handleSelectCategory}
			id="filter-by-category"
			class="md:w-1/3 md:h-full w-full h-10 px-5"
		>
			<option value={null}>Sujet</option>
			{#each categories as category}
				<option value={category.id}>{category.name}</option>
			{/each}
		</select>
		<button
			on:click={handleSearch}
			type="submit"
			class="bg-sand px-5 md:w-1/3 font-bold md:h-full h-10 w-full text-indigo"
		>
			{buttonLabel}
		</button>
	</div>
</form>
