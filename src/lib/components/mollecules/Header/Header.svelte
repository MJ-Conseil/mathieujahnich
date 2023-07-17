<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';
	import MenuMobile from '../MenuMobile/MenuMobile.svelte';
	import DesktopMenu from '../DesktopMenu/DesktopMenu.svelte';

	export let isMenuOpen = false;
</script>

<div class="bg-blue-dark sticky top-0 font-ptsans text-white md:px-16 p-4 z-50">
	<!-- Menu Desktop -->
	<nav class="lg:flex w-full top-0 items-center justify-between hidden" aria-label="menu principal">
		<a class="text-white lg:hidden xl:block" title="Vers la page d'accueil" href="/">
			<Icon height="auto" width="130px" name="mjConseilFull" />
		</a>

		<a class="text-white xl:hidden md:hidden lg:block" title="Vers la page d'accueil" href="/">
			<Icon height="auto" width="75px" name="mjConseilFull" />
		</a>

		<DesktopMenu activeRoute={$page.route.id} />
	</nav>

	<!-- Menu Mobile -->
	<div class="flex lg:hidden justify-between w-full">
		<a class="text-white" title="Vers la page d'accueil" href="/">
			<Icon height="35px" width="auto" name="mjConseilFull" />
		</a>
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
