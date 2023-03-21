<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';
	import MenuMobile from '../MenuMobile/MenuMobile.svelte';
	import DesktopMenu from '../DesktopMenu/DesktopMenu.svelte';

	export let isMenuOpen = false;

	console.log($page.url.pathname);
</script>

<div class="bg-blue-dark text-white md:px-16 md:py-8 p-4">
	<!-- Menu Desktop -->
	<div class="md:flex w-full items-center justify-between hidden">
		<Icon height="auto" width="100px" name="mjConseilFull" />

		<DesktopMenu activeRoute={$page.route.id} />
	</div>

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
