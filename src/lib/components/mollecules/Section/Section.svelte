<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';

	export let alt = false;
</script>

<section class:bg-gray={alt} class="opacity-95 md:pt-14 md:p-0 p-4">
	<Container>
		<slot />
	</Container>
</section>
