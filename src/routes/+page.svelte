<script lang="ts">
	import { onMount } from 'svelte';

	import type { Post } from 'src/definitions/post';
	import { getPosts } from '$lib/repositories/post';

	let posts: Post[] = [];

	onMount(async () => {
		try {
			posts = await getPosts();
		} catch (e) {
			console.log(e);
		}
	});
</script>

<h1 class="text-3xl font-ptsans text-blue-dark font-bold underline">Hello world!</h1>
<h1 class="text-3xl text-blue-dark font-bold underline">Hello world!</h1>
<ul>
	{#each posts as post}
		<li>
			<a href={`/post/${post.slug}`}>
				{post.title.rendered}
			</a>
		</li>
	{/each}
</ul>
