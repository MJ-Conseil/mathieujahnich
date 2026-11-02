<script lang="ts">
	import Header from '$lib/components/mollecules/Header/Header.svelte';
	import Footer from '$lib/components/mollecules/Footer/Footer.svelte';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let node: HTMLElement | undefined = $state();

	// note : this is a bit hacking ... After navigating to a page with a "subroute" (aka notre-offre/xxxx) the focus was not correctly reset
	// this code ensure that ...
	afterNavigate((navigation) => {
		if (navigation.from?.url.pathname !== navigation.to?.url.pathname) {
			node!.focus();
		}
	});
</script>

<div bind:this={node} tabindex="-1" class="relative h-full">
	<Header />

	{@render children?.()}

	<Footer />
</div>
