<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';

	export let alt = false;
	export let narrow = false;
</script>

<section class:bg-gray={alt} class="opacity-95 md:pt-12 md:p-0 p-4">
	<Container {narrow}>
		<slot />
	</Container>
</section>
