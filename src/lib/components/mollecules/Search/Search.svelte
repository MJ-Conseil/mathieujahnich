<script lang="ts">
	import slugify from 'slugify';
	import { createEventDispatcher } from 'svelte';
	import type { WP_REST_API_Category } from 'wp-types';

	export let label: string;
	export let buttonLabel: string;
	export let categories: WP_REST_API_Category[];

	$: id = slugify(label);

	const dispatch = createEventDispatcher<{
		selectCategory: string;
	}>();

	const handleSelectCategory = (e: Event) => {
		const target = e?.target as HTMLInputElement;
		const value = target.value;
		dispatch('selectCategory', value);
	};
</script>

<form>
	<div>
		<label class="block text-white font-bold font-ptsans text-xl mb-4" for={id}>{label}</label>

		<div class="w-1/2 h-10 flex rounded-md ">
			<input class="w-2/3 h-full" on:change {id} type="text" />
			<label class="sr-only" for="filter-by-category"
				>Rechercher un sujet pour une catégorie spécifique</label
			>
			<select on:change={handleSelectCategory} id="filter-by-category" class="flex-1 px-5">
				<option value={null}>Sujet</option>
				{#each categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
			<button type="button" class="bg-sand px-5 font-bold text-indigo">
				{buttonLabel}
			</button>
		</div>
	</div>
</form>
