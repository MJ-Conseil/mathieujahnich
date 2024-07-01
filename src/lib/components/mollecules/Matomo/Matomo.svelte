<script lang="ts">
	import * as ENV from '$env/static/public';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';

	let alert: HTMLElement;

	const url = `${ENV.PUBLIC_MATOMO_CDN_URL}/matomo.js`;

	let isOptOut = false;
	let showBannder = false;

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

		const storedOptOutValue = sessionStorage.getItem('showMatomoBanner');
		if (!storedOptOutValue) {
			showBannder = true;
		}
	});

	afterNavigate(() => {
		setTimeout(initializeMatomo, 100);
	});

	const handleOptOut = () => {
		if (!tracker) {
			return;
		}

		isOptOut = true;

		if (!alert) return;
		alert.focus();

		handleCloseBanner();
	};

	const handleCloseBanner = () => {
		showBannder = false;
		sessionStorage.setItem('showMatomoBanner', String(showBannder));
	};
</script>

<svelte:head>
	{#if ENV.PUBLIC_MATOMO_CDN_URL}
		<script async defer src={url}></script>
	{/if}
</svelte:head>

{#if showBannder}
	<div
		bind:this={alert}
		role="alert"
		class=" fixed w-full bg-sand bottom-0 text-blue-dark p-4 z-50"
	>
		{#if !isOptOut}
			<p>
				Ce site utilise <a class="underline" href="https://fr.matomo.org/">Matomo</a> pour réaliser des
				mesures d'audience.
			</p>

			<div class="flex gap-5">
				<Button on:click={handleOptOut} name="Je refuse le suivi matomo" type="primary" />

				<Button on:click={handleCloseBanner} name="J'accepte le suivi matomo" type="secondary" />
			</div>
		{:else}
			<p>Votre demande a bien été prise en compte. Merci</p>
		{/if}
	</div>
{/if}
