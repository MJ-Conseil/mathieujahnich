<script lang="ts">
	export let name: string;
	export let active: boolean = false;
</script>

<button
	class:bg-indigo={active}
	class:text-white={active}
	class:text-indigo={!active}
	class="border-2 font-bold border-indigo p-1 active:bg-indigo min-w-[50px] hover:bg-indigohover:text-white  rounded-xl"
	on:click
>
	{name}
</button>
