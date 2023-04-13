<script lang="ts">
	import { SIZE } from '$lib/constants';
	import Icon from '../Icon/Icon.svelte';
	export let ariaHidden = true;
	export let iconRotation: 90 | 180 | 0 = 0;
	export let size: SIZE = SIZE.REGULAR;

	let iconWidthAndHeight = size === SIZE.SMALL ? '14px' : '1rem';
</script>

<span
	aria-hidden={ariaHidden}
	class:-rotate-90={iconRotation === 90}
	class:-rotate-180={iconRotation === 180}
	class={`rounded-full p-2 bg-sand text-indigo flex items-center justify-center `}
	><Icon width={iconWidthAndHeight} height={iconWidthAndHeight} name="caret" /></span
>
