<script lang="ts">
	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import { SIZE } from '$lib/constants';

	export let href: string;
	export let alt = false;
	export let arrowSize: SIZE = SIZE.SMALL;
	export let linkTitle = '';
</script>

<a
	class:text-sand={alt}
	class:text-indigo={!alt}
	title={linkTitle}
	class="text-indigo font-ptsans text-md font-bold flex items-center gap-2"
	{href}
>
	<span class="hover:decoration-sand hover:underline underline-offset-8  decoration-2">
		<slot />
	</span>
	<ArrowInCircle size={arrowSize} iconRotation={90} />
</a>
