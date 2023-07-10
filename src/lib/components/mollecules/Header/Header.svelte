<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';
	import MenuMobile from '../MenuMobile/MenuMobile.svelte';
	import DesktopMenu from '../DesktopMenu/DesktopMenu.svelte';

	export let isMenuOpen = false;
</script>

<div class="bg-blue-dark sticky top-0 font-ptsans text-white md:px-16 p-4 z-50">
	<!-- Menu Desktop -->
	<nav
		class="md:flex w-full  top-0 items-center justify-between hidden"
		aria-label="menu principal"
	>
		<a class="text-white" title="Vers la page d'accueil" href="/">
			<Icon height="auto" width="150px" name="mjConseilFull" />
			<span class="sr-only">Accueil</span>
		</a>

		<DesktopMenu activeRoute={$page.route.id} />
	</nav>

	<!-- Menu Mobile -->
	<div class="flex md:hidden justify-between w-full">
		<Icon height="35px" width="auto" name="mjConseilFull" />
		<button on:click on:click={() => (isMenuOpen = true)} aria-label="ouvrir le menu de navigation">
			<Icon height="2rem" width="2rem" name="burger" />
		</button>
		<MenuMobile
			on:clickLink={() => (isMenuOpen = false)}
			on:clickLink
			on:click={() => (isMenuOpen = false)}
			on:closeModal={() => (isMenuOpen = false)}
			on:closeModal
			{isMenuOpen}
		/>
	</div>
</div>
