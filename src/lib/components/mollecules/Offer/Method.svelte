<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import { SIZE } from '$lib/constants';
	export let title: string;
</script>

<div class="flex even:justify-end mb-6 lg:mb-10 font-ptsans">
	<article
		class="p-6 lg:p-10 relative rounded-xl bg-white w-full lg:w-[710px] overflow-hidden box-shadow"
	>
		<div class="absolute left-[-7px] top-[33px] lg:hidden">
			<Circle size={SIZE.SMALL} />
		</div>
		<div class="absolute left-[-36px] top-[22px] hidden lg:block">
			<Circle size={SIZE.MEDIUM} />
		</div>
		<h3 class="text-2xl lg:text-3xl font-extralight mb-6 lg:pl-6">{title}</h3>
		<div class="lg:text-[1.2rem]">
			<slot />
		</div>
	</article>
</div>

<style>
	.box-shadow {
		box-shadow: 0px 0px 10px rgba(41, 31, 156, 0.1);
	}
</style>
