<script lang="ts">
	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import { SIZE } from '$lib/constants';

	export let href: string;
</script>

<a class="text-indigo font-ptsans text-lg font-bold flex items-center gap-2" {href}>
	<slot />
	<ArrowInCircle size={SIZE.SMALL} iconRotation={90} />
</a>
