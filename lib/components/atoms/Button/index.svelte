<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	export let name: string;

	let buttonText = 'Button';

	function handleClick() {
		buttonText = 'Button Clicked';
	}
</script>

<h2>Hello {name}!</h2>

<Icon name="burger" />

<button on:click={handleClick}>{buttonText}</button>
