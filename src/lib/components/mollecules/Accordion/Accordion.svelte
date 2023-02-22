<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	export let id: string;

	let isOpen = false;

	const handleClickIsOpen = () => {
		isOpen = !isOpen;
	};

	let panel: HTMLElement;
</script>

<div data-testid={id} class="py-2  px-3 border border-gray-light rounded-xl">
	<h3
		class="accordion-trigger__title text-xl md:text-2xl w-full m-0 p-0 min-h-[65px] flex items-center"
	>
		<button
			aria-expanded={isOpen}
			aria-controls={`sect-${id}`}
			id={`accordion-${id}`}
			type="button"
			on:click={handleClickIsOpen}
			name="display-card"
			class="w-full"
		>
			<span bind:this={panel} class="flex items-center  justify-between">
				<slot name="trigger-content" />
				<span class:rotate-180={isOpen} class="rounded-full p-2 bg-sand text-indigo  items-end"
					><Icon name="caret" /></span
				>
			</span>
		</button>
	</h3>
	{#if isOpen}
		<div id={`sect-${id}`} class="mt-3 p-4" role="region" aria-labelledby={`accordion-${id}`}>
			<slot name="panel-content" />
		</div>
	{/if}
</div>

<style>
	p {
		text-align: distribute;
	}
</style>
