<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import type { Post } from 'src/definitions/post';
	import { getPostBySlug } from '$lib/repositories/post';

	const { slug } = $page.params;
	let post: Post;

	onMount(async () => {
		try {
			post = await getPostBySlug(slug);
		} catch (e) {
			console.log(e);
		}
	});
</script>

<h1>{post?.title.rendered}</h1>
<p>{post?.date}</p>

{@html post?.content.rendered}
