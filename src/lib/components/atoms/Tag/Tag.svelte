<script lang="ts">
	export let name: string;
	export let active: boolean = false;
</script>

<button
	class:bg-indigo={active}
	class:text-white={active}
	class:text-indigo={!active}
	class="outline-2 outline font-bold outline-indigo  p-1 active:bg-indigo active:text-white min-w-[50px] hover:bg-indigo hover:text-white  rounded-xl"
	on:click
>
	{name}
</button>
