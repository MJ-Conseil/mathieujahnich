<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	export let title = '';
	export let content = '';
	let className = $$props.class;
</script>

<div class="bg-gray p-6 relative">
	<div class=" absolute top-4 right-6">
		<Circle size="small" />
	</div>

	<h3 class="my-4 mj-h4">{title}</h3>
	<p>{content}</p>
</div>
