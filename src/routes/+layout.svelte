<script>
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import '../app.css';
	import SkipLink from '$lib/components/atoms/SkipLink/SkipLink.svelte';

	let modalShown = false;
</script>

<SkipLink />
<Header
	on:click={() => {
		modalShown = true;
	}}
	on:clickLink={() => {
		modalShown = false;
	}}
	on:closeModal={() => (modalShown = false)}
/>

<div class="relative" inert={modalShown ? true : null} class:overflow-hidden={modalShown}>
	<slot />

	<Footer />
</div>
