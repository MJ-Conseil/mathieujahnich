<script>
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import '../app.css';
	let modalShown = false;

	import { navigating } from '$app/stores';

	if ($navigating?.delta) {
		alert('tata');
	}
</script>

<Header />

<div class="relative h-full" inert={modalShown ? true : null} class:overflow-hidden={modalShown}>
	<slot />

	<Footer />
</div>
