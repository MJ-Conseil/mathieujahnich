<script lang="ts">
	import { SIZE } from '$lib/constants';
	import type { Size } from 'src/definitions/size';

	export let size: Size = SIZE.regular;
</script>

<<<<<<< HEAD
<div class={`bg-sand rounded-full mx-auto ${size}`} />

<style>
	.regular {
		height: 8.5rem;
		width: 8.5rem;
	}
</style>
=======
<div class="bg-sand rounded-full" style=" width: {size}; height: {size}" />
>>>>>>> 95218574 (Add offers)
