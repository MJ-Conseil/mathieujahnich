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

	<div class="mt-2 p-4 flex-1 flex flex-col h-3/4">
		<div class=" flex-1">
			<p class="text-blue-dark text-sm">
				{createdDate}
			</p>
			<h3 class="text-blue-dark mt-2 text-xl mb-0  pb-4 font-bold">
				{@html title}
			</h3>

			{#if excerpt}
				<div class="text-blue-dark text-md">
					{@html excerpt}
				</div>
			{/if}
		</div>

		<div class="pt-8 flex items-end justify-end">
			<slot>
				{#if href}
					<ArrowLink linkTitle={`Lire l'article : ${title} `} {href}>Lire l'article</ArrowLink>
				{/if}
			</slot>
		</div>
	</div>
</div>
