<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import { SIZE } from '$lib/constants';
	interface Props {
		title: string;
		content: string;
	}

	let { title, content }: Props = $props();
</script>

<div class="bg-gray p-6 relative rounded-xl">
	<div class=" absolute top-4">
		<Circle size={SIZE.SMALL} />
	</div>

	<h3 class="mj-h3 mj-h4 mt-6 mb-6">{title}</h3>
	<p>{content}</p>
</div>
