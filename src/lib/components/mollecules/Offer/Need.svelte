<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import { SIZE } from '$lib/constants';
	export let title: string;
</script>

<div class="bg-gray p-6 relative rounded-xl font-ptsans lg:text-[1.2rem]">
	<div class=" absolute top-6">
		<Circle size={SIZE.SMALL} />
	</div>

	<h3 class="my-8 mj-h4">{title}</h3>

	<slot />
</div>
