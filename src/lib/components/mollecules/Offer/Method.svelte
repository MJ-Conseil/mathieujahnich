<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	export let title: string;
	export let paragraph: string;
	export let contents: string[];
</script>

<div class="bg-gray p-6 relative rounded-xl">
	<div class="absolute top-2 z-0 test">
		<Circle size="medium" />
	</div>
	<div>
		<h3 class="my-6 ml-14 mj-h3 font-extralight top-4">{title}</h3>
	</div>
	<p>{paragraph}</p>
	<ul class="mj-list--disc">
		{#each contents as content}
			<li>{content}</li>
		{/each}
	</ul>
</div>

<style>
	.test {
		opacity: 0.99;
	}
</style>
