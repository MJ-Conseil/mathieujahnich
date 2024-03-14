<script lang="ts">
	import SkipLink from '$lib/components/atoms/SkipLink/SkipLink.svelte';
	import DesktopMenu from '../DesktopMenu/DesktopMenu.svelte';

	import HeaderLogo from './HeaderLogo.svelte';

	export let activeRoute: string | null;
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<div
	class="lg:block h-full bg-blue-dark sticky top-0 font-ptsans text-white md:px-16 z-50 p-4 hidden"
>
	<SkipLink />
	<!-- svelte-ignore a11y-no-redundant-roles -- this is the main navigation menu -->
	<nav
		class="w-full top-0 items-center justify-between flex"
		role="navigation"
		aria-label="menu principal"
	>
		<HeaderLogo />
		<DesktopMenu {activeRoute} />
	</nav>
</div>
