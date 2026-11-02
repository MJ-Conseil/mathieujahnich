<script lang="ts">
	import { capitalize } from '$lib/utils/string';
	import slugify from 'slugify';
	import Icon from '../Icon/Icon.svelte';

	interface Props {
		name: string;
		active?: boolean;
		onclick?: () => void;
	}

	let { name, active = false, onclick }: Props = $props();
</script>

<button
	class:bg-indigo={active}
	class:text-white={active}
	class:text-indigo={!active}
	aria-pressed={active}
	id={slugify(name)}
	class="border-[1.5px] font-bold hover:text-indigo flex items-center border-indigo py-[0.6rem] px-5 active:bg-indigo active:text-white min-w-[50px] hover:bg-gray-light rounded-xl"
	{onclick}
>
	{#if active}
		<span class="mr-2 font-normal">
			<Icon width="12px" height="12px" name="checkMark" />
		</span>
	{/if}
	{capitalize(name)}
</button>
