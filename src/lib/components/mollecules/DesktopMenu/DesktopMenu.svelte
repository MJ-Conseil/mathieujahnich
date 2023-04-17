<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';

	export let activeRoute: string | null = null;

	let activatedMenu = false;

	let button: HTMLElement;

	const handleClickMenuButton = () => {
		activatedMenu = !activatedMenu;
	};

	const regex = new RegExp(`^${ROUTES['Offres de services']}`);

	const handleKeyboardInterractions = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				handleClickMenuButton();

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
				class:text-white={activeRoute !== ROUTES.Accueil}
				class:underline={activeRoute == ROUTES.Accueil}
				class:text-sand={activeRoute == ROUTES.Accueil}
				aria-current={activeRoute === ROUTES.Accueil ? 'page' : null}
				class="hover:underline underline-offset-[10px] decoration-sand "
				href={ROUTES.Accueil}>Accueil</a
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
				aria-expanded={activatedMenu}
				aria-controls="prendre-de-la-hauteur-menu"
				on:click={() => handleClickMenuButton()}
				bind:this={button}
			>
				Offres de services
				<span aria-hidden="true" class:rotate-180={activatedMenu} class="ml-2"
					><Icon name="caret" /></span
				>
			</button>

			{#if activatedMenu}
				<ul
					id="prendre-de-la-hauteur-menu"
					data-testid="prendre-de-la-hauteur-menu"
					class=" bg-blue-dark mt-2 min-w-[15rem] p-3 flex flex-col gap-2 rounded-lg left-[-15px] absolute z-50"
					on:keydown={(e) => handleKeyboardInterractions(e)}
				>
					<li>
						<a
							class="text-white hover:underline underline-offset-[10px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES[`Donner de l'élan`]}
							aria-current={activeRoute === ROUTES[`Donner de l'élan`] ? 'page' : null}
						>
							Donner de l'élan
						</a>
					</li>
					<li>
						<a
							class="text-white hover:underline underline-offset-[10px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES['Trouver le juste équilibre']}
							aria-current={activeRoute === ROUTES['Trouver le juste équilibre'] ? 'page' : null}
						>
							Trouver le juste équilibre
						</a>
					</li>
					<li>
						<a
							class="text-white hover:underline underline-offset-[10px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES['Prendre de la hauteur']}
							aria-current={activeRoute === ROUTES['Prendre de la hauteur'] ? 'page' : null}
						>
							Prendre de la hauteur
						</a>
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
