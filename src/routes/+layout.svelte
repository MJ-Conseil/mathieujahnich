<script lang="ts">
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';
	import Matomo from '$lib/components/mollecules/Matomo/Matomo.svelte';

	let showMatomoMenu = true;

	const handleCloseMatomoMenu = () => {
		showMatomoMenu = false;
	};

	let node: HTMLElement;

	// note : this is a bit hacking ... After navigating to a page with a "subroute" (aka notre-offre/xxxx) the focus was not correctly reset
	// this code ensure that ...
	afterNavigate((navigation) => {
		node.focus();
	});
</script>

<div bind:this={node} tabindex="-1" class="relative h-full">
	<Header />

	<slot />

	<Footer />

	{#if showMatomoMenu}
		<Matomo on:click={handleCloseMatomoMenu} />
	{/if}
</div>
