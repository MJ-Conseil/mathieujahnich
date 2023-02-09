<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	export let id: string;

	let isOpen = false;

	let offset = 0;

	const handleClickIsOpen = () => {
		isOpen = !isOpen;
	};

	let panel: HTMLElement;

	$: if (isOpen == true && panel) {
		offset = panel.offsetTop;
	}
</script>

<svelte:window bind:scrollY={offset} />

<div class="my-2 py-2 px-3 border border-gray-light rounded-xl">
	<h3 class="accordion-trigger__title text-2xl w-full m-0 p-0">
		<button
			aria-expanded={isOpen}
			aria-controls={`sect-${id}`}
			id={`accordion-${id}`}
			type="button"
			on:click={handleClickIsOpen}
			name="display-card"
			class="w-full"
		>
			<div bind:this={panel} class="flex items-center p-4 justify-between">
				<slot name="trigger-content" />
				<span
					class:rotate-180={isOpen}
					class="rounded-full p-2 bg-sand text-blue-dark text-blue  items-end"
					><Icon name="caret" /></span
				>
			</div>
		</button>
	</h3>
	{#if isOpen}
		<div id={`sect-${id}`} class="mt-3 p-4" role="region" aria-labelledby={`accordion-${id}`}>
			<slot name="panel-content" />
		</div>
	{/if}
</div>
