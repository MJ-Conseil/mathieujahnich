<script lang="ts">
	import type { WP_REST_API_Tag } from 'wp-types';
	export let title: string;
	export let pictureURL: string;
	export let tag: WP_REST_API_Tag;
	export let createdDate: Date;
</script>

<div class="w-full h-full  rounded-xl shadow-xl bg-white">
	<div class="relative h-1/2">
		<div class="h-full w-full ">
			<img
				class="object-cover h-full w-full rounded-t-xl"
				src={pictureURL}
				alt="logo organisation"
			/>
		</div>

		{#if tag}
			<div
				class="bg-blue-dark text-white absolute right-0 bottom-0 p-1 font-bold min-w-[60px] text-center"
			>
				{tag.name}
			</div>
		{/if}
	</div>

	<div class="mt-2 p-4">
		<p class="text-blue-dark text-xs">
			{new Intl.DateTimeFormat('fr-FR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric'
			}).format(createdDate)}
		</p>
		<p class="text-blue-dark mt-2 font-bold">
			{title}
		</p>
	</div>
</div>
