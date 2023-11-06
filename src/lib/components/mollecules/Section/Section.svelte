<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';

	export let alt = false;
	export let narrow = false;
</script>

<section class:bg-gray={alt} class="opacity-95 md:pt-8 md:pb-8 py-8 px-4 md:p-0 pt-1">
	<Container {narrow}>
		<slot />
	</Container>
</section>
