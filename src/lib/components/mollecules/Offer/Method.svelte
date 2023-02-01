<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	export let title: string;
	export let paragraph: string;
	export let contents: string[];
</script>

<div class="bg-gray p-6 relative rounded-xl">
	<div class="absolute top-4 z-0">
		<Circle size="medium" />
	</div>

	<h3 class="z-50 my-6 ml-10 mj-h3 font-extralight top-4">{title}</h3>
	<p>{paragraph}</p>
	<ul class="mj-list--disc">
		{#each contents as content}
			<li>{content}</li>
		{/each}
	</ul>
</div>
