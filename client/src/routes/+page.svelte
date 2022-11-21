<script lang="ts">
	import { onMount } from 'svelte';
	import { api } from '$lib/utils/api';

	import type { Post } from 'src/definitions/post';

    let posts: Post[] = [];

	onMount(async () => {
		const data = await api(`/posts`);
		posts = data; 
	});
    
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>
<ul>
    {#each posts as post}
        <li>
            <a href={`/post/${post.id}`}>
                {post.title.rendered}
            </a>
        </li>
    {/each}
</ul>



