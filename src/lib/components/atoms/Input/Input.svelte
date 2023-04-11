<script lang="ts">
	export let name: string;
	export let label: string;
	export let id: string;
	export let type: 'text' | 'number' | 'email' = 'text';
	export let required = false;
	export let error = '';
</script>

<label class="block font-ptsans my-2 font-bold text-blue-dark" for={id}> {label}</label>
<input
	{id}
	{name}
	class:text-red={error}
	class:border-red={error}
	class="bg-gray-dark w-full h-8 rounded border-2 border-gray-light"
	{required}
	{type}
/>

{#if error}
	<p class="text-red">{error}</p>
{/if}
