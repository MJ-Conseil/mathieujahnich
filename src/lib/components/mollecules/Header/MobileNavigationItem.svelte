<script lang="ts">
	interface Props {
		href: string;
		isActive?: boolean;
		children?: import('svelte').Snippet;
	}

	let { href, isActive = false, children }: Props = $props();
</script>

<li class="text-lg">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<a class:underline={isActive} class="p-4 block" onclick={() => {}} {href}
		>{@render children?.()}</a
	>
</li>
