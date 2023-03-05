<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';

	export let activeRoute: string | null = null;

	let activatedMenu = '';

	let button: HTMLElement;

	const handleClickMenuButton = (activeMenu: string) => {
		if (activatedMenu === activeMenu) {
			activatedMenu = '';

			return;
		}

		activatedMenu = activeMenu;
	};

	const regex = new RegExp(`^${ROUTES['Offres de services']}`);

	const handleKeyboardInterractions = (e: KeyboardEvent, activeMenu: string) => {
		switch (e.key) {
			case 'Escape':
				handleClickMenuButton('');

				if (button) {
					button.focus();
				}

			default:
				break;
		}
	};
</script>

<nav aria-label={SITE_WEB_NAME}>
	<ul class="flex justify-end gap-8 ">
		<li class="text-xl">
			<a
				class:text-white={activeRoute !== ROUTES.Acceuil}
				class:underline={activeRoute == ROUTES.Acceuil}
				class:text-sand={activeRoute == ROUTES.Acceuil}
				aria-current={activeRoute === ROUTES.Acceuil ? 'page' : null}
				class="hover:underline underline-offset-[10px] decoration-sand "
				href={ROUTES.Acceuil}>Acceuil</a
			>
		</li>

		<li
			class:underline={activeRoute ? activeRoute.match(regex) : null}
			class:text-sand={activeRoute ? activeRoute.match(regex) : null}
			class="text-xl relative hover:underline underline-offset-[10px] decoration-sand"
		>
			<button
				class="flex items-center"
				aria-haspopup="true"
				aria-expanded={activatedMenu == 'prendre-de-la-hauteur-menu'}
				aria-controls="prendre-de-la-hauteur-menu"
				on:click={() => handleClickMenuButton('prendre-de-la-hauteur-menu')}
				bind:this={button}
			>
				Offres de services
				<span
					aria-hidden="true"
					class:rotate-180={activatedMenu === 'prendre-de-la-hauteur-menu'}
					class="ml-2"><Icon name="caret" /></span
				>
			</button>

			{#if activatedMenu === 'prendre-de-la-hauteur-menu'}
				<ul
					id="prendre-de-la-hauteur-menu"
					data-testid="prendre-de-la-hauteur-menu"
					class="bg-dark-blue mt-2 min-w-[15rem] p-3 flex flex-col gap-2 rounded-lg left-[-15px] absolute z-50"
					on:keydown={(e) => handleKeyboardInterractions(e, "prendre-de-la-hauteur-menu'")}
				>
					<li>
						<a
							class="text-white hover:underline underline-offset-[10px] decoration-sand"
							on:click={() => (activatedMenu = '')}
							href={ROUTES['Prendre de la hauteur']}
							aria-current={activeRoute === ROUTES['Prendre de la hauteur'] ? 'page' : null}
							>Prendre de la hauteur</a
						>
					</li>
				</ul>
			{/if}
		</li>

		<li class="text-xl">
			<a
				class:text-white={activeRoute !== ROUTES.Références}
				class:underline={activeRoute == ROUTES.Références}
				class:text-sand={activeRoute == ROUTES.Références}
				class="text-white hover:underline underline-offset-[10px] decoration-sand "
				href={ROUTES.Références}
				aria-current={activeRoute === ROUTES.Références ? 'page' : null}>Références</a
			>
		</li>

		<li class="text-xl">
			<a
				class:text-white={activeRoute !== ROUTES.Blog}
				class:underline={activeRoute == ROUTES.Blog}
				class:text-sand={activeRoute == ROUTES.Blog}
				class="text-white hover:underline underline-offset-[10px] decoration-sand "
				href={ROUTES.Blog}
				aria-current={activeRoute === ROUTES.Blog ? 'page' : null}>Blog</a
			>
		</li>
	</ul>
</nav>

<style>
	a:active {
		outline: none;
	}
</style>
