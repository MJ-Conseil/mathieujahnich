<script lang="ts">
	import Container from '../Container/Container.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_redundant_roles this is the main page's header -->
<header role="banner" class="py-8 bg-blue-dark p-4 pt-8">
	<Container>
		{@render children?.()}
	</Container>
</header>
