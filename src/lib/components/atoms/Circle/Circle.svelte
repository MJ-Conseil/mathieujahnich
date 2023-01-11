<script lang="ts">
<<<<<<< HEAD
	import { SIZE } from '$lib/constants';
	import type { Size } from 'src/definitions/size';

	export let size: Size = SIZE.regular;
=======
	export let size = '0rem';
>>>>>>> 4a68dfd3 (Add Offer component)
</script>

<div class={`bg-sand rounded-full mx-auto ${size}`} />

<style>
	.regular {
		height: 8.5rem;
		width: 8.5rem;
	}
</style>
