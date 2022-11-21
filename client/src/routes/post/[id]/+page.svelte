<script lang="ts">
    import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { api } from '$lib/utils/api';
	import type { Post } from 'src/definitions/post';

    const {id} = $page.params
    let post : Post 

    onMount(async () => {
		const data = await api(`/posts/${id}`);
		post = data;       
	});
</script>


<h1>{post?.title.rendered}</h1>
<p>{post?.date}</p>

{@html post?.content.rendered}