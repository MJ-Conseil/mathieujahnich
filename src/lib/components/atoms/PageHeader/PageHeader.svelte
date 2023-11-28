<script>
	import Container from '../Container/Container.svelte';
</script>

<!-- svelte-ignore a11y-no-redundant-roles this is the main page's header -->
<header role="banner" class="py-8 bg-blue-dark p-4 pt-8">
	<Container>
		<slot />
	</Container>
</header>
