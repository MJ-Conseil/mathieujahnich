<script lang="ts">
	import { SIZE } from '$lib/constants';

	export let size: SIZE = SIZE.REGULAR;
</script>

<div class={`bg-sand rounded-full mx-auto ${size}`} />

<style>
	.regular {
		height: 8.5rem;
		width: 8.5rem;
	}

	.medium {
		height: 4.5rem;
		width: 4.5rem;
	}

	.small {
		height: 1rem;
		width: 1rem;
	}
</style>
