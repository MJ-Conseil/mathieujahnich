<script lang="ts">
	import { SIZE } from '$lib/constants';
	import type { Size } from 'src/definitions/size';

	export let size: Size = SIZE.regular;
</script>

<div class={`bg-sand rounded-full mx-auto ${size}`} />

<style>
	.regular {
		height: 8.5rem;
		width: 8.5rem;
	}
</style>
