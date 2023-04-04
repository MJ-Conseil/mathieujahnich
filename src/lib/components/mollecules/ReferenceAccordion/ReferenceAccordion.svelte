<script lang="ts">
	import Accordion from '../Accordion/Accordion.svelte';

	export let id: number | string = '';
	export let title: string;
	export let content: string;
	export let imageUrl = '';
</script>

<Accordion id={`reference-${id}`}>
	<span title={`voir la référence ${title}`} slot="trigger-content" class="md:w-full flex md:gap-5">
		{#if imageUrl}
			<div class="w-1/10 flex items-center">
				<img class="object-cover max-h-20" src={imageUrl} aria-hidden="true" alt="" />
			</div>
		{/if}
		<p class="break-all md:max-w-[60%] flex items-center" class:pl-4={!imageUrl}>
			<span class=" "> {title}</span>
		</p>
	</span>
	<div class="[&>p]:mb-4 [&>p]:text-justify text-xl accordion-content" slot="panel-content">
		{@html content}
	</div>
</Accordion>
