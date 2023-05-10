<script lang="ts">
	import type { IconNames } from 'src/definitions';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	import CircledIcon from '../CircledIcon/CircledIcon.svelte';
	export let title: string;
	export let offer: string;
	export let icon: IconNames;
	export let link: string = '';

	$: console.log({ link });
</script>

<div class="h-full w-full relative">
	<CircledIcon iconName={icon} />
	<h3 class="mb-4">{title}</h3>
	<p>
		{offer}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink href={link}>Lire la suite</ArrowLink>
		</div>
	{/if}
</div>
