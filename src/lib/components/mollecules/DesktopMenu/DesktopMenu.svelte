<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { ROUTES } from '$lib/constants';

	import { clickOutside } from '$lib/directives/clickoutside';
	import DesktopMenuItem from '../DesktopMenuItem/DesktopMenuItem.svelte';
	import HeaderDropDown from '../Header/HeaderDropDown.svelte';

	export let activeRoute: string | null = null;

	let activatedMenu = false;
</script>

<div class="p-2 h-full z-50">
	<ul class="flex justify-end gap-12">
		<DesktopMenuItem isActive={activeRoute === ROUTES['Accueil']} href={ROUTES['Accueil']}
			>Accueil
		</DesktopMenuItem>
		<DesktopMenuItem
			isActive={activeRoute === ROUTES['Qui sommes nous ?']}
			href={ROUTES['Qui sommes nous ?']}
			>Qui sommes-nous ?
		</DesktopMenuItem>

		<DesktopMenuItem isActive={activeRoute === ROUTES['Références']} href={ROUTES['Références']}
			>Nos références</DesktopMenuItem
		>

		<HeaderDropDown {activeRoute} {activatedMenu} />

		<DesktopMenuItem
			isActive={activeRoute === ROUTES['Espace presse']}
			href={ROUTES['Espace presse']}
			>Espace presse
		</DesktopMenuItem>
		<DesktopMenuItem isActive={activeRoute === ROUTES.Blog} href={ROUTES.Blog}
			>Blog
		</DesktopMenuItem>
	</ul>
</div>

<style>
	a:active {
		outline: none;
	}
</style>
