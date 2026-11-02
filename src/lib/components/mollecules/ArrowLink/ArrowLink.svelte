<script lang="ts">
	import { run } from 'svelte/legacy';

	import ArrowInCircle from '$lib/components/atoms/ArrowInCircle/ArrowInCircle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { SIZE } from '$lib/constants';

	let element: HTMLElement | undefined = $state();

	interface Props {
		href: string;
		alt?: boolean;
		arrowSize?: SIZE;
		linkTitle?: string;
		external?: boolean;
		focused?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		alt = false,
		arrowSize = SIZE.SMALL,
		linkTitle = '',
		external = false,
		focused = false,
		children
	}: Props = $props();

	run(() => {
		if (focused && element) {
			element.focus();
		}
	});
</script>

<a
	class:text-sand={alt}
	class:text-indigo={!alt}
	title={linkTitle}
	target={external ? '_blank' : '_self'}
	rel="noreferrer"
	bind:this={element}
	class="text-indigo font-ptsans no-underline text-md font-bold flex items-center gap-2"
	{href}
>
	<span class="hover:decoration-sand hover:underline underline-offset-8 decoration-2">
		{@render children?.()}
	</span>

	{#if external}
		<Icon name="external" />
	{/if}
	<ArrowInCircle size={arrowSize} iconRotation={90} />
</a>
