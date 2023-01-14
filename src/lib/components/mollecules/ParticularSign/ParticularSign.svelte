<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	export let title = '';
	export let content = '';
	let className = $$props.class;
</script>

<div class="bg-gray mx-auto p-6 rounded-md md:w-1/3">
	<Circle size="small" />
	<h3 class="my-4 mj-h4">{title}</h3>
	<p>{content}</p>
</div>
