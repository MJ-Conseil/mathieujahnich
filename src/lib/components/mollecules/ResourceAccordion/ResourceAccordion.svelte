<script lang="ts">
	import type { CaseStudy } from 'definitions';
	import Accordion from '../Accordion/Accordion.svelte';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	interface Props {
		id?: number | string;
		focused?: boolean;
		resourceName: string;
		content: string;
		imageUrl?: string;
		caseStudy?: CaseStudy | undefined;
	}

	let {
		id = '',
		focused = false,
		resourceName,
		content,
		imageUrl = '',
		caseStudy = undefined
	}: Props = $props();
</script>

<Accordion {focused} id={`reference-${id}`}>
	<!-- @migration-task: migrate this slot by hand, `trigger-content` is an invalid identifier -->
	<div
		title={`voir la ressource ${resourceName}`}
		slot="trigger-content"
		class="md:w-full flex md:gap-5"
	>
		{#if imageUrl}
			<div class=" w-[5%] md:flex items-center hidden">
				<img class="object-cover max-h-15" src={imageUrl} aria-hidden="true" alt="" />
			</div>
		{/if}
		<p class="break-word md:max-w-[100%] max-w-[60%] flex items-center" class:pl-4={!imageUrl}>
			{resourceName}
		</p>
	</div>
	<!-- @migration-task: migrate this slot by hand, `panel-content` is an invalid identifier -->
	<div class="[&>p]:mb-4 !text-lg accordion-content html-wrapper" slot="panel-content">
		{@html content}

		{#if caseStudy?.url}
			<div class="flex justify-end">
				<ArrowLink href={caseStudy.url}>Voir l'étude de cas</ArrowLink>
			</div>
		{/if}
	</div>
</Accordion>
