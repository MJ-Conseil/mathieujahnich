<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';
	export let title: string;
	export let content: string;
	export let link: string = '';
	export let linkTitle: string = '';
    export let linkContent : string
</script>

<div class="h-full w-full flex flex-col justify-evenly relative">

	<div class="min-h-[250px]">
	<slot />
	</div>

	<h3 class="my-5">{title}</h3>
	<p class="min-h-[100px]">
		{content}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink {linkTitle} href={link}>{linkContent}</ArrowLink>
		</div>
	{/if}
</div>
