<script lang="ts">
	import { page } from '$app/state';
	import DesktopMainNavigation from './DesktopMainNavigation.svelte';
	import MobiileMainNavigation from './MobileMainNavigation.svelte';
</script>

<DesktopMainNavigation activeRoute={page.route.id} />
<MobiileMainNavigation />
