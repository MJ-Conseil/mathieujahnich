<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import type { IconNames } from 'src/definitions/Icon';
	import CircledIcon from '../CircledIcon/CircledIcon.svelte';
	export let title: string;
	export let offer: string;
	export let icon: IconNames;
</script>

<div class="h-full w-full relative">
	<CircledIcon iconName={icon} />
	<h3 class="mb-4">{title}</h3>
	<p>
		{offer}
	</p>
</div>
