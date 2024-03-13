<script lang="ts">
	import slugify from 'slugify';
	import type { QueryOption } from 'definitions';
	import { createEventDispatcher } from 'svelte';

	export let label: string;
	export let buttonLabel: string;
	export let categories: { id: unknown; name: unknown }[] | undefined = undefined;
	export let value = '';
	export let alt = false;

	let errorMessage: HTMLElement;

	let hasError = false;

	let input: HTMLInputElement;

	let searchOptions: QueryOption = {
		search: undefined
	};

	let inputTouched = false;

	$: id = slugify(label);

	const dispatch = createEventDispatcher<{
		search: QueryOption;
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

		hasError = false;

		searchOptions = {
			...searchOptions,
			search: target.value || ''
		};

		inputTouched = true;
	};

	const handleSearch = () => {
		console.log(input.validity);
		if (!input.validity.valueMissing) {
			return dispatch('search', searchOptions);
		}

		if (input.dataset.errorRequired) {
			input.setCustomValidity(input.dataset?.errorRequired);
			hasError = true;
			input.reportValidity();
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

	<strong class:hidden={!hasError} class="text-red font-bold block" id="name-validation-error"
		>Ce champs est requis</strong
	>
	<div class="lg:w-2/3 w-full md:h-10 md:flex md:rounded-l">
		<input
			aria-required="true"
			data-error-required="Veuillez remplir ce champs"
			aria-errormessage="name-validation-error"
			aria-invalid={hasError}
			on:input={handleOnInput}
			bind:this={input}
			class="lg:w-2/3 w-full h-full p-2 md:rounded-l-lg"
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
				class="md:w-1/3 md:h-full w-full h-10 px-5 cursor-pointer"
			>
				<option class="cursor-pointer" value={null}>Toutes les catégories</option>
				{#each categories as category}
					<option class="cursor-pointer" value={category.id}>{category.name}</option>
				{/each}
			</select>
		{/if}

		<button
			type="button"
			on:click={handleSearch}
			class="bg-sand hover:bg-sand-dark px-5 md:w-1/4 font-bold md:h-full h-10 w-full md:rounded-r-lg text-indigo"
		>
			{buttonLabel}
		</button>
	</div>
</form>
