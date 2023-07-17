<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { SIZE } from '$lib/constants';

	export let iconName: 'plane' | 'stones' | 'ladder';
</script>

<div aria-hidden="true" class=" text-blue-dark flex justify-center">
	<div class="relative">
		<div class=" absolute top-0 left-[55px]">
			<Circle size={SIZE.REGULAR} />
		</div>
		<div class="relative z-2">
			<Icon height="150px" width="150px" name={iconName} fill="currentColor" />
		</div>
	</div>
</div>
