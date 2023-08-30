<script lang="ts">
	import Accordion from '../Accordion/Accordion.svelte';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	export let id: number | string = '';
	export let title: string;
	export let content: string;
	export let imageUrl = '';
	export let href = '';
</script>

<Accordion id={`reference-${id}`}>
	<div title={`voir la référence ${title}`} slot="trigger-content" class="md:w-full flex md:gap-5">
		{#if imageUrl}
			<div class="w-1/10 flex items-center">
				<img class="object-cover max-h-20" src={imageUrl} aria-hidden="true" alt="" />
			</div>
		{/if}
		<p class="break-word md:max-w-[100%] max-w-[60%] flex items-center" class:pl-4={!imageUrl}>
			{title}
		</p>
	</div>
	<div class="[&>p]:mb-4  text-lg accordion-content html-wrapper" slot="panel-content">
		{@html content}

		{#if href}
			<div class="flex  justify-end">
				<ArrowLink {href}>Voir l'étude de cas</ArrowLink>
			</div>
		{/if}
	</div>
</Accordion>
