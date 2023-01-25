<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { page } from '$app/stores';

	let isMenuOpen = false;

	const URLAndNameMap: Record<string, string> = {
		Acceuil: '/'
	};
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

		<div
			role="alertdialog"
			class:hidden={!isMenuOpen}
			aria-expanded={!isMenuOpen}
			on:keydown={e => console.log(e)}
			class="h-full hidden w-full fixed z-10 left-0 top-0 bg-gray overflow-x-hidden overflow-y-hidden p-4"
		>
			<div class="w-full flex  justify-end">
				<button
					on:click={() => (isMenuOpen = false)}
					aria-label="fermer le menu de navigation"
					class="text-blue-dark"
				>
					<Icon name="close" />
				</button>
			</div>
			<nav class="relative w-full">
				<ul class="flex flex-col gap-5">
					{#each Object.keys(URLAndNameMap) as key}
						<li class="text-2xl"><a href={URLAndNameMap[key]}>{key}</a></li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</div>
