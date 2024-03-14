<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	on:click
	class="bg-sand 2 inline-block px-5 no-underline md:px-14 py-3 hover:bg-sand-dark font-bold rounded text-indigo"
>
	<slot />
</a>
