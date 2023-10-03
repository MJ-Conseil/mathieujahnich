<script lang="ts">
	import { SIZE, type SIZE as SIZEType } from '$lib/constants';
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	export let title: string;
	export let createdDate: string;

	export let pictureURL = '';
	export let testId = '';
	export let href = '';
	export let imageCover = true;
	export let excerpt = '';
	export let tagName = '';

	export let size: SIZEType = SIZE.REGULAR;
</script>

<div
	data-testId={testId}
	class={`border-2 border-gray flex flex-col  rounded-xl bg-white ${
		size === SIZE.LARGE ? 'max-h-[600px]' : 'max-h-[500px]'
	}`}
>
	<div class="relative h-1/2">
		{#if pictureURL}
			<div class="h-full w-full flex items-center justify-center ">
				<img
					class:rounded-t-xl={imageCover}
					class:h-full={imageCover}
					class:w-full={imageCover}
					class:object-cover={imageCover}
					class:object-contain={!imageCover}
					src={pictureURL}
					alt={title}
				/>
			</div>
		{/if}

		{#if tagName}
			<div
				class="bg-blue-dark text-white absolute right-0 bottom-0 px-4 py-2 font-bold min-w-[60px] text-center"
			>
				{tagName}
			</div>
		{/if}
	</div>

	<div class="p-4 h-2/3">
		<div class="">
			<p class="text-blue-dark text-sm">
				{createdDate}
			</p>
			<h3 class="text-blue-dark mt-2 text-xl md:text-lg mb-0  pb-4 font-bold">
				{@html title}
			</h3>

			{#if excerpt}
				<div class="text-blue-dark text-md">
					{@html excerpt}
				</div>
			{/if}
		</div>
	</div>

	<div class="p-4 pt-0  mt-4 flex justify-end">
		<slot>
			{#if href}
				<ArrowLink linkTitle={`Lire l'article : ${title} `} {href}>Lire l'article</ArrowLink>
			{/if}
		</slot>
	</div>
</div>
