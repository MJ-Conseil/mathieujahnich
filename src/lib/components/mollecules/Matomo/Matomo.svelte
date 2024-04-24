<script lang="ts">
	import * as ENV from '$env/static/public';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	let alert: HTMLElement;

	const url = `${ENV.PUBLIC_MATOMO_CDN_URL}/matomo.js`;

	let isOptOut = false;

	let tracker: any;

	const initializeMatomo = async () => {
		if (!ENV.PUBLIC_MATOMO_CDN_URL || !ENV.PUBLIC_MATOMO_URL) {
			return;
		}
		const matomo = (<any>window).Matomo;

		if (!matomo) {
			console.warn('Matomo not loaded. Please check the matomo CDN URL');

			return;
		}

		tracker = matomo.getTracker(`${ENV.PUBLIC_MATOMO_URL}/matomo.php`, 1);

		if (!tracker) {
			console.warn('Matomo not loaded. Please check the matomo URL');
			return;
		}

		tracker.disableCookies();
		tracker.setDoNotTrack(true);

		tracker.setCustomUrl($page.url.href);
		tracker.trackPageView();
	};

	onMount(async () => {
		setTimeout(initializeMatomo, 100);
	});

	afterNavigate(() => {
		setTimeout(initializeMatomo, 100);
	});

	const handleOptOut = () => {
		if (!tracker) {
			return;
		}

		tracker.optUserOut();

		isOptOut = true;

		if (!alert) return;

		alert.focus();
	};
</script>

<svelte:head>
	{#if ENV.PUBLIC_MATOMO_CDN_URL}
		<script async defer src={url}></script>
	{/if}
</svelte:head>

<div bind:this={alert} role="alert" class=" fixed w-full bg-sand bottom-0 text-blue-dark p-4 z-50">
	<div class="w-full text-blue-dark flex justify-end font-bold">
		<button on:click aria-label="fermer le menu"> <Icon width="25px" name="close" /></button>
	</div>

	{#if !isOptOut}
		<p>
			Ce site utilise <a class="underline" href="https://fr.matomo.org/">Matomo</a> pour réaliser des
			mesures d'audience. Pour refuser le suivi par Matomo vous pouvez cocher la case.
		</p>

		<form>
			<label class="font-bold" for="opt-out">Je refuse d'être suivi par Matomo</label>
			<input
				id="opt-out"
				checked={isOptOut}
				on:keydown={handleOptOut}
				on:input={handleOptOut}
				on:change={handleOptOut}
				type="checkbox"
			/>
		</form>
	{:else}
		<p>Votre demande a bien été prise en compte. Merci</p>
	{/if}
</div>
