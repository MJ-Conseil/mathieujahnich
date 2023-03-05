<script lang="ts">
	import type { IconNames } from 'src/definitions';

	import CircledIcon from '../CircledIcon/CircledIcon.svelte';
	export let title: string;
	export let offer: string;
	export let icon: IconNames;
	export let link: string = '';
</script>

<div class="h-full w-full relative">
	<CircledIcon iconName={icon} />
	<h3 class="mb-4">{title}</h3>
	<p>
		{offer}
	</p>
	{#if link}
		<div class="mt-6">
			<a class="text-blue-dark font-bold" href={link}
				>Lire la suite <span class="px-2 py-1 rounded-full bg-sand text-blue">></span></a
			>
		</div>
	{/if}
</div>
