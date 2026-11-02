<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div
	class="bg-blue-dark font-ptsans rounded-xl text-white flex md:flex-row flex-col gap-8 md:gap-3 lg:gap-32 py-8 px-8"
>
	{@render children?.()}
</div>
