<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';
	interface Props {
		offerName: string;
		offer: string;
		link?: string;
		linkTitle?: string;
		children?: import('svelte').Snippet;
	}

	let { offerName, offer, link = '', linkTitle = '', children }: Props = $props();
</script>

<div class="h-full w-full flex flex-col justify-evenly relative">
	{@render children?.()}
	<h3 class="my-5 mj-h3">{offerName}</h3>
	<p class="min-h-37.5">
		{offer}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink {linkTitle} href={link}>Découvrir l'offre</ArrowLink>
		</div>
	{/if}
</div>
