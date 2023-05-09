<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	export let title: string;
	export let createdDate: string;

	export let pictureURL = '';
	export let testId = '';
	export let href = '';
	export let imageCover = true;
	export let excerpt = '';
	export let tagName = '';
</script>

<div
	data-testId={testId}
	class="w-full h-full border-2 border-gray flex flex-col  rounded-xl bg-white"
>
	<div class="relative h-1/2">
		{#if pictureURL}
			<div class="h-full w-full ">
				<img
					class="h-full w-full rounded-t-xl"
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

	<div class="mt-2 p-4 flex-1 flex flex-col">
		<div class=" flex-1">
			<p class="text-blue-dark text-xs">
				{createdDate}
			</p>
			<h3 class="text-blue-dark mt-2 text-xl mb-0  font-bold">
				{title}
			</h3>

			{#if excerpt}
				<div class="html-wrapper text-blue-dark p-4 text-md">
					{@html excerpt}
				</div>
			{/if}
		</div>

		<div class="h-1/3 pb-5 flex items-end justify-end">
			<slot>
				{#if href}
					<ArrowLink {href}>Lire l'article</ArrowLink>
				{/if}
			</slot>
		</div>
	</div>
</div>
