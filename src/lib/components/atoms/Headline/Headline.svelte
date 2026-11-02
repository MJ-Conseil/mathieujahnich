<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<p class="text-white md:w-3/4 font-ptsans text-lg md:text-xl">
	{@render children?.()}
</p>
