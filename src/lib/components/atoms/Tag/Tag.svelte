<script lang="ts">
	import { capitalize } from '$lib/utils/string';
	import Icon from '../Icon/Icon.svelte';

	export let name: string;
	export let active: boolean = false;
</script>

<button
	class:bg-indigo={active}
	class:text-white={active}
	class:text-indigo={!active}
	class="border-2 font-bold flex items-center border-indigo py-[0.6rem] px-7 active:bg-indigo active:text-white min-w-[50px] hover:bg-indigo hover:text-white rounded-3xl"
	on:click
>
	{#if active}
		<span class="mr-2 font-normal">
			<Icon width="12px" height="12px" name="checkMark" />
		</span>
	{/if}
	{capitalize(name)}
</button>
