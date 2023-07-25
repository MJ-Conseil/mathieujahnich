<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="bg-sand 2 inline-block px-5 md:px-14 py-3 hover:bg-sand-dark font-bold  rounded text-indigo"
>
	<slot />
</a>
