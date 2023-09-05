<script lang="ts">
	import { capitalize } from '$lib/utils/string';
	import slugify from 'slugify';
	import Icon from '../Icon/Icon.svelte';

	export let name: string;
	export let active: boolean = false;
</script>

<button
	class:bg-indigo={active}
	class:text-white={active}
	class:text-indigo={!active}
	id={slugify(name)}
	class="border-[1.5px] font-bold flex items-center border-indigo py-[0.6rem] px-5 active:bg-indigo active:text-white min-w-[50px] hover:bg-gray-light rounded-xl"
	on:click
>
	{#if active}
		<span class="mr-2 font-normal">
			<Icon width="12px" height="12px" name="checkMark" />
		</span>
	{/if}
	{capitalize(name)}
</button>
