<script lang="ts">
	export let href: string;
	export let isActive = false;
</script>

<li class="text-lg">
	<a class:underline={isActive} class="p-4 block" on:click {href}><slot /></a>
</li>
