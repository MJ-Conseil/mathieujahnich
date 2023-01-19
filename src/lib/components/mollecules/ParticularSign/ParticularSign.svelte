<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	export let title: string;
	export let content: string;
</script>

<div class="bg-gray p-6 relative rounded-lg">
	<div class=" absolute top-4">
		<Circle size="small" />
	</div>

	<h3 class="my-6 mj-h4">{title}</h3>
	<p>{content}</p>
</div>
