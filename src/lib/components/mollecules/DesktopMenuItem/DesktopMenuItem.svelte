<script lang="ts">
	export let isActive = false;
	export let href: string;
</script>

<li class="text-xl">
	<a
		class:text-white={!isActive}
		class:underline={isActive}
		class:text-sand={isActive}
		class="text-white hover:underline underline-offset-[8px] decoration-sand "
		{href}
		aria-current={isActive ? 'page' : null}><slot /></a
	>
</li>
