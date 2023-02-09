<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	export let id: string;

	let isOpen = false;

	const handleClickIsOpen = () => {
		isOpen = !isOpen;
	};
</script>

<div class="my-2 py-2 px-3 border border-gray-light rounded-xl">
	<h3 class="accordion-trigger__title text-2xl w-full m-0 p-0">
		<button
			aria-expanded={isOpen}
			aria-controls={`sect-${id}`}
			id={`accordion-${id}`}
			type="button"
			on:click={handleClickIsOpen}
			name="display-card"
			title="Afficher les détails de cette référence"
			class="w-full"
		>
			<div class="flex items-center p-4 justify-between">
				<slot name="trigger-content" />
				<span
					class:rotate={isOpen}
					class="rounded-full p-2 bg-sand text-blue-dark text-blue rotate items-end"
					><Icon name="caret" /></span
				>
			</div>
		</button>
	</h3>
	{#if isOpen}
		<div id={`sect-${id}`} class="mt-5" role="region" aria-labelledby={`accordion-${id}`}>
			<slot name="panel-content" />
		</div>
	{/if}
</div>

<style>
	.rotate {
		transform: rotate(180deg);
	}
</style>
