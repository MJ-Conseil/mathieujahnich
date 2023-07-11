<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';
	export let offerName: string;
	export let offer: string;
	export let link: string = '';
	export let linkTitle: string = '';
</script>

<div class="h-full w-full flex flex-col justify-evenly relative">
	<slot />
	<h3 class="my-5">{offerName}</h3>
	<p class="min-h-[150px]">
		{offer}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink {linkTitle} href={link}>Lire la suite</ArrowLink>
		</div>
	{/if}
</div>
