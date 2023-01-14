<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import type { IconNames } from 'src/definitions/Icon';
	export let title: string;
	export let offer: string;
	export let icon: IconNames;
</script>

<div>
	<div aria-hidden="true" class="mb-12 relative">
		<Circle size="regular" />
		<div class="absolute w-2/3 md:w-full mx-auto top-[-1rem] left-[-1.5rem]">
			<Icon height="15rem" width="18rem" name={icon} class="mx-auto" fill="#1E2345" />
		</div>
	</div>
	<h3 class="mb-4">{title}</h3>
	<p>
		{offer}
	</p>
</div>
