<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { SIZE } from '$lib/constants';
	import type { IconNames } from 'definitions';

	export let iconName: IconNames;
</script>

<div aria-hidden="true" class="relative h-[200px]">
	<Circle size={SIZE.REGULAR} />
	<div class="absolute top-[-6px] left-[9%] md:top-[0] md:left-[27%] lg:top-[0px] lg:left-[12%]">
		<Icon height="15rem" width="18rem" name={iconName} fill="#1E2345" />
	</div>
</div>
