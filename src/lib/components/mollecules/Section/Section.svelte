<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';

	interface Props {
		alt?: boolean;
		narrow?: boolean;
		children?: import('svelte').Snippet;
	}

	let { alt = false, narrow = false, children }: Props = $props();
</script>

<section class:bg-gray={alt} class="opacity-95 md:pt-8 md:pb-8 py-8 px-4 md:p-0 pt-1">
	<Container {narrow}>
		{@render children?.()}
	</Container>
</section>
