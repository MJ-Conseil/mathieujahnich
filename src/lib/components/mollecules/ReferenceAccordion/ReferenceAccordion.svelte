<script lang="ts">
	import type { CaseStudy } from 'definitions';
	import Accordion from '../Accordion/Accordion.svelte';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	export let id: number | string = '';
	export let focused = false;
	export let referenceName: string;
	export let content: string;
	export let imageUrl = '';
	export let caseStudy: CaseStudy | undefined = undefined;
</script>

<Accordion {focused} id={`reference-${id}`}>
	<div
		title={`voir la référence ${referenceName}`}
		slot="trigger-content"
		class="md:w-full flex md:gap-5"
	>
		{#if imageUrl}
			<div class="w-1/10 md:flex items-center hidden">
				<img class="object-cover max-h-20" src={imageUrl} aria-hidden="true" alt="" />
			</div>
		{/if}
		<p class="break-word md:max-w-[100%] max-w-[60%] flex items-center" class:pl-4={!imageUrl}>
			{referenceName}
		</p>
	</div>
	<div class="[&>p]:mb-4 !text-lg accordion-content html-wrapper" slot="panel-content">
		{@html content}

		{#if caseStudy?.url}
			<div class="flex justify-end">
				<ArrowLink href={caseStudy.url}>Voir l'étude de cas</ArrowLink>
			</div>
		{/if}
	</div>
</Accordion>
