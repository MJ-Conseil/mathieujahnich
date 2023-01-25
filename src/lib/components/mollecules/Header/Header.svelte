<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';
	import MenuMobile from '../MenuMobile/MenuMobile.svelte';
	import { URLAndNameMap } from '$lib/constants';

	let isMenuOpen = false;
</script>

<div class="bg-blue-dark text-white md:p-8 p-4">
	<!-- Menu Desktop -->
	<div class="md:flex w-full items-center justify-between hidden">
		<Icon height="60px" width="auto" name="mjConseilFull" />
		<nav class="text-white flex-">
			<ul class="flex justify-end gap-32 text-white">
				{#each Object.keys(URLAndNameMap) as key}
					<li class="text-xl">
						<a
							class:underline={$page.route.id === URLAndNameMap[key]}
							class="text-white hover:underline underline-offset-[10px] decoration-sand "
							href={URLAndNameMap[key]}>{key}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<!-- Menu Mobile -->
	<div class="flex md:hidden justify-between w-full">
		<Icon height="35px" width="auto" name="mjConseilFull" />
		<button on:click={() => (isMenuOpen = true)} aria-label="ouvrir le menu de navigation">
			<Icon height="2rem" width="2rem" name="burger" />
		</button>
		<MenuMobile
			on:click={() => (isMenuOpen = false)}
			on:close={() => (isMenuOpen = false)}
			{isMenuOpen}
		/>
	</div>
</div>
