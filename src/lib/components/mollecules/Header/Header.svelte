<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';
	import MenuMobile from '../MenuMobile/MenuMobile.svelte';
	import DesktopMenu from '../DesktopMenu/DesktopMenu.svelte';
	import SkipLink from '$lib/components/atoms/SkipLink/SkipLink.svelte';
	import HeaderLogo from './HeaderLogo.svelte';

	export let isMenuOpen = false;
</script>

<div class="bg-blue-dark sticky top-0 font-ptsans text-white md:px-16 p-4 z-50">
	<SkipLink />
	<!-- Menu Desktop -->
	<!-- svelte-ignore a11y-no-redundant-roles -- this is the main navigation menu -->
	<nav
		class="lg:flex w-full top-0 items-center justify-between hidden"
		role="navigation"
		aria-label="menu principal"
	>
		<HeaderLogo />
		<DesktopMenu activeRoute={$page.route.id} />
	</nav>

	<!-- Menu Mobile -->
</div>

<style>
</style>
