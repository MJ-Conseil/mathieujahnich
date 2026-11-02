<script lang="ts">
	interface Props {
		name: string;
		label: string;
		id: string;
		type?: 'text' | 'number' | 'email';
		required?: boolean;
		error?: string;
		autocomplete?: 'email' | 'given-name' | undefined;
	}

	let {
		name,
		label,
		id,
		type = 'text',
		required = false,
		error = '',
		autocomplete = undefined
	}: Props = $props();
</script>

<label class="block font-ptsans my-2 mt-4 font-bold text-blue-dark" for={id}> {label}</label>
<input
	{id}
	{name}
	class:text-red={error}
	class:border-red={error}
	class="bg-gray-dark w-full h-8 px-2 py-1 rounded border-2 border-blue-dark"
	aria-describedby={error ? `error-message-${name}` : undefined}
	{required}
	{type}
	{autocomplete}
/>

{#if error}
	<p id={`error-message-${name}`} class="text-red">{error}</p>
{/if}
