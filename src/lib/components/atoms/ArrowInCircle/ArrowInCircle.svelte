<script lang="ts">
	import { SIZE } from '$lib/constants';
	import Icon from '../Icon/Icon.svelte';
	export let ariaHidden = true;
	export let iconRotation: 90 | 180 | 0 = 0;
	export let size: SIZE = SIZE.REGULAR;

	let iconWidthAndHeight: string;

	$: switch (size) {
		case SIZE.EXTRASMALL:
			iconWidthAndHeight = '10px';

			break;

		case SIZE.SMALL:
			iconWidthAndHeight = '12px';

		default:
			iconWidthAndHeight = '12px';
			break;
	}
</script>

<span
	aria-hidden={ariaHidden}
	class:-rotate-90={iconRotation === 90}
	class:-rotate-180={iconRotation === 180}
	class={`rounded-full p-1 bg-sand text-indigo flex items-center justify-center `}
	><Icon width={iconWidthAndHeight} height={iconWidthAndHeight} name="caret" /></span
>
