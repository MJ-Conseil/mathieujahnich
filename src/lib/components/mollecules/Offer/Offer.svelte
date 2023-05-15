<script lang="ts">
	import type { IconNames } from 'src/definitions';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';
	export let title: string;
	export let offer: string;
	export let link: string = '';
</script>

<div class="h-full w-full flex flex-col justify-evenly relative">
	<slot />
	<h3 class="mb-4">{title}</h3>
	<p class="min-h-[150px]">
		{offer}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink href={link}>Lire la suite</ArrowLink>
		</div>
	{/if}
</div>
