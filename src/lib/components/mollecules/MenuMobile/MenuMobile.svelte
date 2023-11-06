<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	import { ROUTES } from '$lib/constants';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher<{ closeModal: boolean; clickLink: undefined }>();

	export let isMenuOpen: boolean;

	let modal: HTMLDialogElement | null;

	let focusableElementsItems: HTMLElement[];

	let firstFocusableElement: HTMLElement;
	let lastFocusableElement: HTMLElement;

	$: if (modal && isMenuOpen) {
		modal.show();
	}

	const handleCloseModal = () => {
		dispatch('closeModal', false);
	};

	const handleKeyboardInterractions = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			handleCloseModal();

			return;
		}

		let isTabPressed = e.key === 'Tab';

		if (!isTabPressed) {
			return;
		}

		// Heavilly inspired by https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700

		if (e.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus(); // add focus for the last focusable element
				e.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === lastFocusableElement) {
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				firstFocusableElement.focus(); // add focus for the first focusable element
				e.preventDefault();
			}
		}
	};

	onMount(async () => {
		/**
		 * This polyfill improves compatibility of dialog HTML element for older browsers (ie : Internet explorer ...)
		 */

		const dialogPolyfill = await (await import('dialog-polyfill')).default;

		modal = document.querySelector('dialog');
		if (!modal) {
			return;
		}
		dialogPolyfill.registerDialog(modal);

		const focusableElements =
			'button, a, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

		focusableElementsItems = Array.from(modal.querySelectorAll(focusableElements));

		firstFocusableElement = focusableElementsItems[0];
		lastFocusableElement = focusableElementsItems[focusableElementsItems.length - 1];
	});
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<dialog
	on:close={handleCloseModal}
	on:keydown={handleKeyboardInterractions}
	aria-labelledby="modal-title"
	aria-hidden={!isMenuOpen}
	class:hidden={!isMenuOpen}
	aria-modal={isMenuOpen}
	role="dialog"
	class="h-full hidden w-full fixed z-10 left-0 top-0 bg-gray overflow-x-hidden overflow-y-hidden p-4"
>
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
	<nav class="relative w-full">
		<ul class="flex flex-col gap-5">
			{#each Object.keys(ROUTES) as key, index}
				<!-- svelte-ignore a11y-autofocus -- Here this we want legitimely set autofocus on the first link -->
				<li class="text-2xl">
					<a on:click={() => dispatch('clickLink')} autofocus={index === 0} href={ROUTES[key]}
						>{key}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</dialog>
