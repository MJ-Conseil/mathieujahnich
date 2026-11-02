<script lang="ts">
	interface Props {
		href: string;
		children?: import('svelte').Snippet;
		onclick?: (e: MouseEvent) => void;
	}

	let { href, children, onclick }: Props = $props();
</script>

<a
	{href}
	{onclick}
	class="bg-sand 2 inline-block px-5 no-underline md:px-14 py-3 hover:bg-sand-dark font-bold rounded text-indigo"
>
	{@render children?.()}
</a>
