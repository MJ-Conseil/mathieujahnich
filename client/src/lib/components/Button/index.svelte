<script lang="ts">
	export let name: string;

	let buttonText = 'Button';

	function handleClick() {
		buttonText = 'Button Clicked';
	}
</script>

<h2>Hello {name}!</h2>

<button on:click={handleClick}>{buttonText}</button>
