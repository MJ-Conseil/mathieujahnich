<script>
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import '../app.css';

	let modalShown = false;
</script>

<Header
	on:click={() => {
		modalShown = true;
	}}
	on:closeModal={() => (modalShown = false)}
/>

<div class="h-full w-full" inert={modalShown} class:overflow-hidden={modalShown}>
	<slot />
</div>
