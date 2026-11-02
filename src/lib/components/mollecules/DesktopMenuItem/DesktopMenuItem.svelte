<script lang="ts">
	interface Props {
		isActive?: boolean;
		href: string;
		children?: import('svelte').Snippet;
	}

	let { isActive = false, href, children }: Props = $props();
</script>

<li class="text-xl">
	<a
		class:text-white={!isActive}
		class:underline={isActive}
		class:text-sand={isActive}
		class="text-white no-underline hover:underline decoration-2 underline-offset-[8px] decoration-sand text-lg"
		{href}
		aria-current={isActive ? 'page' : null}>{@render children?.()}</a
	>
</li>
