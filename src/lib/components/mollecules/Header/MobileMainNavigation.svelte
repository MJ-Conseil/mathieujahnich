<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import SkipLink from '$lib/components/atoms/SkipLink/SkipLink.svelte';
	import MobileMenu from './MobileMenu.svelte';

	let isMenuOpen = false;

	const handleCloseModal = () => {
		isMenuOpen = false;
	};
</script>

{#if isMenuOpen}
	<MobileMenu on:clickLink={handleCloseModal} on:closeModal={handleCloseModal} />
{/if}

<SkipLink />

<!-- svelte-ignore a11y-no-redundant-roles -->
<div class="h-full md:hidden">
	<div class="flex justify-between w-full bg-blue-dark text-white p-4">
		<a class="text-white" aria-label="Vers la page d'accueil" href="/">
			<Icon height="35px" width="auto" name="mjConseilFull" />
		</a>
		<button on:click on:click={() => (isMenuOpen = true)} aria-label="ouvrir le menu de navigation">
			<Icon height="2rem" width="2rem" name="burger" />
		</button>
	</div>
</div>
