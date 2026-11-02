<script lang="ts">
	interface Props {
		name: string;
		type?: 'secondary' | 'primary';
		onclick?: (e: MouseEvent) => void;
	}

	let { name, type = 'primary', onclick }: Props = $props();

	const classes = $derived(
		type === 'primary'
			? 'border-indigo border rounded-sm px-4 py-2 hover:bg-indigo hover:text-white font-bold min-w-[200px]  text-indigo'
			: ''
	);
</script>

<button {onclick} class={classes}> {name} </button>
