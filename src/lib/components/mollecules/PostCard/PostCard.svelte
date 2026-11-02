<script lang="ts">
	import { SIZE, type SIZE as SIZEType } from '$lib/constants';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	interface Props {
		title: string;
		picureAlternativeText?: string;
		createdDate: string;
		pictureURL?: string;
		testId?: string;
		href?: string;
		imageCover?: boolean;
		focused?: boolean;
		excerpt?: string;
		tagName?: string;
		size?: SIZEType;
		children?: import('svelte').Snippet;
	}

	let {
		title,
		picureAlternativeText = '',
		createdDate,
		pictureURL = '',
		testId = '',
		href = '',
		imageCover = true,
		focused = false,
		excerpt = '',
		tagName = '',
		size = SIZE.REGULAR,
		children
	}: Props = $props();
</script>

<div
	data-testId={testId}
	class={`border-2 border-gray flex flex-col bg-white  rounded-xl ${
		size === SIZE.LARGE ? 'max-h-[600px]' : 'max-h-[500px]'
	}`}
>
	<div class="relative h-1/2">
		{#if pictureURL}
			<div class="h-full w-full flex items-center justify-center">
				<img
					class:rounded-t-xl={imageCover}
					class:h-full={imageCover}
					class:w-full={imageCover}
					class:object-cover={imageCover}
					class:object-contain={!imageCover}
					src={pictureURL}
					alt={picureAlternativeText}
				/>
			</div>
		{/if}

		{#if tagName}
			<p
				class="bg-blue-dark text-white absolute right-0 bottom-0 px-4 py-2 font-bold min-w-[60px] text-center"
			>
				{tagName}
			</p>
		{/if}
	</div>

	<div class="p-4 h-2/3">
		<div class="">
			<p class="text-blue-dark text-sm">
				{createdDate}
			</p>
			<h3 class="text-blue-dark mt-2 text-xl md:text-lg mb-0 pb-4 font-bold">
				{@html title}
			</h3>

			{#if excerpt}
				<div class="text-blue-dark text-md">
					{@html excerpt}
				</div>
			{/if}
		</div>
	</div>

	<div class="p-4 pt-0 mt-4 flex justify-end">
		{#if children}{@render children()}{:else}
			{#if href}
				<ArrowLink {focused} linkTitle={`Lire l'article : ${picureAlternativeText} `} {href}
					>Lire l'article</ArrowLink
				>
			{/if}
		{/if}
	</div>
</div>
