<script>
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import '../app.css';

	let modalShown = false;
</script>

<Header
	on:click={() => {
		modalShown = true;
	}}
	on:clickLink={() => {
		modalShown = false;
	}}
	on:closeModal={() => (modalShown = false)}
/>

<div class="w-full h-full" inert={modalShown} class:overflow-hidden={modalShown}>
	<slot />

	<Footer />
</div>
