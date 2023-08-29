<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';

	export let alt = false;
	export let narrow = false;
</script>

<section class:bg-gray={alt} class="opacity-95 py-6 px-4 md:p-0  pt-1">
	<Container {narrow}>
		<slot />
	</Container>
</section>
