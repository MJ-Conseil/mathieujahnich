<script lang="ts">
	interface Props {
		narrow?: boolean;
		children?: import('svelte').Snippet;
	}

	let { narrow = false, children }: Props = $props();
</script>

<div
	class:lg:max-w-[75%]={!narrow}
	class:lg:max-w-[800px]={narrow}
	class="mx-auto px-4 md:pb-8 md:px-8"
>
	{@render children?.()}
</div>
