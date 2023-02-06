<script lang="ts">
	export let name: string;
</script>

<button
	class="border border-blue-dark p-1  min-w-[50px] hover:bg-blue-dark hover:text-white  rounded-xl text-blue-dark"
	on:click
>
	{name}
</button>
