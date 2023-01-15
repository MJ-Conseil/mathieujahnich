<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import type { IconNames } from 'src/definitions/Icon';
	export let iconName: IconNames;
</script>

<div aria-hidden="true" class="relative h-[200px]">
	<Circle size="regular" />
	<div class="absolute  top-0 left-[40px]">
		<Icon height="15rem" width="18rem" name={iconName} fill="#1E2345" />
	</div>
</div>
