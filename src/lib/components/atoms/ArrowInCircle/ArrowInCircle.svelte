<script lang="ts">
	import { run } from 'svelte/legacy';

	import { SIZE } from '$lib/constants';
	import Icon from '../Icon/Icon.svelte';
	interface Props {
		ariaHidden?: boolean;
		iconRotation?: 90 | 180 | 0;
		size?: SIZE;
	}

	let { ariaHidden = true, iconRotation = 0, size = SIZE.REGULAR }: Props = $props();

	let iconWidthAndHeight: string | undefined = $state();

	run(() => {
		switch (size) {
			case SIZE.EXTRASMALL:
				iconWidthAndHeight = '10px';
				break;

			case SIZE.SMALL:
				iconWidthAndHeight = '12px';

				break;

			case SIZE.LARGE:
				iconWidthAndHeight = '2rem';
				break;

			default:
				iconWidthAndHeight = '16px';
				break;
		}
	});
</script>

<span
	aria-hidden={ariaHidden}
	class:-rotate-90={iconRotation === 90}
	class:-rotate-180={iconRotation === 180}
	class={`rounded-full p-2 bg-sand text-indigo flex items-center justify-center `}
	><Icon width={iconWidthAndHeight} height={iconWidthAndHeight} name="caret" /></span
>
