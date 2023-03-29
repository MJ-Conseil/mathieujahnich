<script lang="ts">
	import type { Options } from '$lib/repositories/post';
	import slugify from 'slugify';
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let buttonLabel: string;
	export let categories: { id: unknown; name: unknown }[] | undefined = undefined;
	export let value = '';
	export let alt = false;

	let input: HTMLInputElement;

	let searchOptions: Options = {
		search: undefined
	};

	let inputTouched = false;

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

		inputTouched = true;
	};

	const handleSearch = () => {
		if (!input.validity.valueMissing) {
			dispatch('search', searchOptions);
		}
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			dispatch('search', searchOptions);

			return;
		}
	};
</script>

<form
	on:submit={(e) => {
		e.preventDefault();
		handleSearch();
	}}
	role="search"
>
	<label
		class:text-white={!alt}
		class:text-blue-dark={alt}
		class="block font-bold font-ptsans text-xl mb-4"
		for={id}>{label}</label
	>

	{#if input && input.validity.valueMissing && inputTouched}
		<span class="text-red border-red font-bold" id={`${id}-error-desc`}>Ce champs est requis</span>
	{/if}

	<div class="lg:w-2/3 w-full md:h-10 md:flex rounded-l ">
		<input
			aria-describedby={input && input.validity.valueMissing && inputTouched
				? `${id}-error-desc`
				: null}
			on:input={handleOnInput}
			bind:this={input}
			class="lg:w-2/3 w-full h-full p-2 rounded-l-lg"
			on:change
			on:keydown={handleKeyDown}
			required
			{id}
			bind:value
			type="text"
		/>

		{#if categories}
			<label class="sr-only" for="filter-by-category"
				>Rechercher un sujet pour une catégorie spécifique</label
			>
			<select
				on:change={handleSelectCategory}
				id="filter-by-category"
				class="md:w-1/3 md:h-full w-full h-10 px-5"
			>
				<option value={null}>Toutes les catégories</option>
				{#each categories as category}
					<option value={category.id}>{category.name}</option>
				{/each}
			</select>
		{/if}

		<button
			type="button"
			on:click={handleSearch}
			class="bg-sand px-5 md:w-1/4 font-bold md:h-full h-10 w-full md:rounded-r-lg text-indigo"
		>
			{buttonLabel}
		</button>
	</div>
</form>
