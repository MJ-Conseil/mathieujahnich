<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	/**
	 * This polyfill improves compatibility of dialog HTML element for older browsers (ie : Internet explorer ...)
	 */

	import dialogPolyfill from 'dialog-polyfill';

	import { URLAndNameMap } from '$lib/constants';
	import { createEventDispatcher, onMount } from 'svelte';

	const dispatch = createEventDispatcher<{ closeModal: boolean }>();

	export let isMenuOpen: boolean;

	let modal: HTMLDialogElement | null;

	$: if (modal && isMenuOpen) {
		modal.show();
	}

	const handleCloseModal = () => {
		dispatch('closeModal');
	};

	onMount(() => {
		modal = document.querySelector('dialog');
		if (!modal) {
			return;
		}
		dialogPolyfill.registerDialog(modal);
	});
</script>

<dialog
	on:close={handleCloseModal}
	aria-labelledby="modal-title"
	aria-hidden={!isMenuOpen}
	class:hidden={!isMenuOpen}
	class="h-full hidden w-full fixed z-10 left-0 top-0 bg-gray overflow-x-hidden overflow-y-hidden p-4"
>
	<h3 id="modal-title" class="sr-only">Menu de navigation</h3>
	<div class="w-full flex  justify-end">
		<button
			on:click={handleCloseModal}
			aria-label="fermer le menu de navigation"
			class="text-blue-dark"
		>
			<Icon name="close" />
		</button>
	</div>
	<nav class="relative w-full">
		<ul class="flex flex-col gap-5">
			{#each Object.keys(URLAndNameMap) as key}
				<li class="text-2xl"><a href={URLAndNameMap[key]}>{key}</a></li>
			{/each}
		</ul>
	</nav>
</dialog>

<style>
	dialog::backdrop {
		display: none;
	}

	dialog {
		margin: 0;
		width: 100vw;
	}
</style>
