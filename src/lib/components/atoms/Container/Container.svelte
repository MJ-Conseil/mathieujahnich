<script lang="ts">
	export let narrow = false;
</script>

<div
	class:lg:max-w-[1440px]={!narrow}
	class:lg:max-w-[800px]={narrow}
	class="mx-auto px-4 md:pb-8 md:px-8"
>
	<slot />
</div>
