<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import { SIZE } from '$lib/constants';
	export let title: string;
</script>

<div class="bg-gray p-6 relative rounded-xl">
	<div class=" absolute top-4">
		<Circle size={SIZE.SMALL} />
	</div>

	<h3 class="my-6 mj-h4">{title}</h3>

	<slot />
</div>
