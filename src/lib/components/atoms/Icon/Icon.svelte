<script lang="ts">
	export let name: string;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable = false;

	type Icon = {
		box: number;

		svg: string;
	};

	let icons: { [key: string]: Icon } = {
		burger: {
			box: 24,
			svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
		}
	};

	$: displayIcon = icons[name];
</script>

<svg
	class={$$props.class}
	focusable={focusable.toString()}
	{width}
	{height}
	stroke="currentColor"
	viewBox="0 0 {displayIcon.box} {displayIcon.box}">{@html displayIcon.svg}</svg
>
