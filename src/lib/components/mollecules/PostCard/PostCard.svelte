<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';

	export let title: string;
	export let pictureURL: string;
	export let tagName: string = '';
	export let createdDate: Date;
	export let testId = '';
	export let href: string;
</script>

<div
	data-testId={testId}
	class="w-full h-full border-2 border-gray flex flex-col  rounded-xl bg-white"
>
	<div class="relative h-1/2">
		<div class="h-full w-full ">
			<img
				class="object-cover h-full w-full rounded-t-xl"
				src={pictureURL}
				alt="logo organisation"
			/>
		</div>

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
				{new Intl.DateTimeFormat('fr-FR', {
					day: '2-digit',
					month: 'long',
					year: 'numeric'
				}).format(createdDate)}
			</p>
			<p class="text-blue-dark mt-2  font-bold">
				{title}
			</p>
		</div>

		<div class="h-1/3 flex justify-end">
			<ArrowLink {href}>Lire l'article</ArrowLink>
		</div>
	</div>
</div>
