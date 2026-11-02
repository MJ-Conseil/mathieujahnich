<script lang="ts">
	import ArrowLink from '../ArrowLink/ArrowLink.svelte';
	interface Props {
		title: string;
		content: string;
		link?: string;
		linkTitle?: string;
		linkContent: string;
		children?: import('svelte').Snippet;
	}

	let { title, content, link = '', linkTitle = '', linkContent, children }: Props = $props();
</script>

<div class="h-full w-full flex flex-col justify-evenly relative">
	<div class="min-h-[250px]">
		{@render children?.()}
	</div>

	<h3 class="my-5">{title}</h3>
	<p class="min-h-[100px]">
		{content}
	</p>
	{#if link}
		<div class="mt-6">
			<ArrowLink {linkTitle} href={link}>{linkContent}</ArrowLink>
		</div>
	{/if}
</div>
