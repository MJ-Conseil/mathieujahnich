<script lang="ts">
	import { page } from '$app/stores';
	import DesktopMainNavigation from './DesktopMainNavigation.svelte';
	import MobiileMainNavigation from './MobileMainNavigation.svelte';
</script>

<DesktopMainNavigation activeRoute={$page.route.id} />
<MobiileMainNavigation />
