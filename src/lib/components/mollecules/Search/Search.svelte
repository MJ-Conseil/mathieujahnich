<script lang="ts">
	import type { Options } from '$lib/repositories/post';
	import slugify from 'slugify';
	import { createEventDispatcher } from 'svelte';
	import type { WP_REST_API_Category } from 'wp-types';

	export let label: string;
	export let buttonLabel: string;
	export let categories: WP_REST_API_Category[];
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

<form>
	<div>
		<label class="block text-white font-bold font-ptsans text-xl mb-4" for={id}>{label}</label>

		<div class="w-1/2 h-10 flex rounded-md ">
			<input on:input={handleOnInput} class="w-2/3 h-full p-2" on:change {id} {value} type="text" />
			<label class="sr-only" for="filter-by-category"
				>Rechercher un sujet pour une catégorie spécifique</label
			>
			<select on:change={handleSelectCategory} id="filter-by-category" class="flex-1 px-5">
				<option value={null}>Sujet</option>
				{#each categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
			<button on:click={handleSearch} type="button" class="bg-sand px-5 font-bold text-indigo">
				{buttonLabel}
			</button>
		</div>
	</div>
</form>
