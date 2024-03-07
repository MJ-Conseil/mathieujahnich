<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { ROUTES, focusableElements } from '../../../constants';
	import { handleKeyboardTrapFocus } from '$lib/directives/trapfocus';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	let button: HTMLElement;
	let navigation: HTMLElement;

	let focusableElementsItems: HTMLElement[];

	let firstFocusableElement: HTMLElement;
	let lastFocusableElement: HTMLElement;

	const dispatch = createEventDispatcher();

	let handleCloseModal = () => {
		dispatch('closeModal');
	};

	onMount(() => {
		if (button) {
			button.focus();
		}

		focusableElementsItems = Array.from(navigation.querySelectorAll(focusableElements));

		firstFocusableElement = focusableElementsItems[0];
		lastFocusableElement = focusableElementsItems[focusableElementsItems.length - 1];
	});
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-no-redundant-roles -->
<section
	on:keydown={(e) =>
		handleKeyboardTrapFocus(e, firstFocusableElement, lastFocusableElement, handleCloseModal)}
	bind:this={navigation}
	class="fixed z-50 h-full w-full inset-0 bg-gray p-4"
	role="navigation"
>
	<header>
		<h3 id="modal-title" class="sr-only">Menu de navigation</h3>
		<div class="w-full flex justify-end">
			<button
				on:click={handleCloseModal}
				aria-label="fermer le menu de navigation"
				class="text-blue-dark"
			>
				<Icon width="20px" height="20px" name="close" />
			</button>
		</div>
	</header>

	<nav role="navigation">
		<ul class="flex flex-col gap-5">
			{#each Object.keys(ROUTES) as key, index}
				<li class="text-2xl">
					<!-- svelte-ignore a11y-autofocus -->
					<a on:click={() => dispatch('clickLink')} autofocus={index == 0} href={ROUTES[key]}
						>{key}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</section>
