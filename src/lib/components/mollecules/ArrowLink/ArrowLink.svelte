<script lang="ts">
	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { SIZE } from '$lib/constants';

	export let href: string;
	export let alt = false;
	export let arrowSize: SIZE = SIZE.SMALL;
	export let linkTitle = '';
	export let external = false;
</script>

<a
	class:text-sand={alt}
	class:text-indigo={!alt}
	title={linkTitle}
	target={external ? '_blank' : '_self'}
	rel="noreferrer"
	class="text-indigo font-ptsans text-md font-bold flex items-center gap-2"
	{href}
>
	<span class="hover:decoration-sand hover:underline underline-offset-8  decoration-2">
		<slot />
	</span>

	{#if external}
		<Icon name="external" />
	{/if}
	<ArrowInCircle size={arrowSize} iconRotation={90} />
</a>
