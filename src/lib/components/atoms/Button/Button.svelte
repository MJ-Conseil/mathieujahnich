<script lang="ts">
	export const type: 'secondary' | 'primary' = 'primary';
	export let name: string;

	let classes = '';

	if (type == 'primary') {
		classes =
			'border-indigo border rounded px-4 py-2 hover:bg-indigo hover:text-white font-bold min-w-[200px]  text-indigo';
	}
</script>

<button on:click class={classes}> {name} </button>
