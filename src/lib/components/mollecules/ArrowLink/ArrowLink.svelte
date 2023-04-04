<script lang="ts">
	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import { SIZE } from '$lib/constants';

	export let href: string;
</script>

<a class="text-indigo font-ptsans text-md font-bold flex items-center gap-2" {href}>
	<span class="hover:decoration-sand hover:underline underline-offset-8  decoration-2">
		<slot />
	</span>
	<ArrowInCircle size={SIZE.SMALL} iconRotation={90} />
</a>
