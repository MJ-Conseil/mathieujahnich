<script lang="ts">
	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import { SIZE } from '$lib/constants';
	export let id: string;

	let element: HTMLElement;

	let isOpen = false;

	export let focused = false;

	$: if (focused && element) {
		element.focus();
	}

	const handleClickIsOpen = () => {
		isOpen = !isOpen;
	};
</script>

<div data-testid={id} class="py-2 px-3 border rounded-b-xl border-gray-light rounded-xl tata">
	<h3
		class="accordion-trigger__title text-xl md:text-2xl w-full m-0 p-0 min-h-[65px] flex items-center"
	>
		<button
			bind:this={element}
			tabindex={focused ? 0 : undefined}
			aria-expanded={isOpen}
			aria-controls={`sect-${id}`}
			id={`accordion-${id}`}
			type="button"
			on:click={handleClickIsOpen}
			name="display-card"
			class="w-full"
		>
			<span class="flex items-center justify-between">
				<slot name="trigger-content" />

				<span class="hidden md:block">
					<ArrowInCircle size={SIZE.LARGE} iconRotation={isOpen ? 180 : 0} />
				</span>

				<span class="md:hidden">
					<ArrowInCircle iconRotation={isOpen ? 180 : 0} />
				</span>
			</span>
		</button>
	</h3>
	{#if isOpen}
		<div id={`sect-${id}`} class="mt-3 p-4" role="region" aria-labelledby={`accordion-${id}`}>
			<slot name="panel-content" />
		</div>
	{/if}
</div>
