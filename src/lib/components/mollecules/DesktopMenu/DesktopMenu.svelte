<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { ROUTES } from '$lib/constants';

	import { clickOutside } from '$lib/directives/clickoutside';
	import DesktopMenuItem from '../DesktopMenuItem/DesktopMenuItem.svelte';

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

<div class="p-2">
	<ul class="flex justify-end gap-8 ">
		<DesktopMenuItem isActive={activeRoute === ROUTES['Accueil']} href={ROUTES['Accueil']}
			>Accueil
		</DesktopMenuItem>

		<li
			class:underline={activeRoute ? activeRoute.match(regex) : null}
			class:text-sand={activeRoute ? activeRoute.match(regex) : null}
			class="text-xl relative hover:underline underline-offset-[8px] decoration-sand"
		>
			<button
				class="flex items-center"
				aria-haspopup="true"
				aria-expanded={activatedMenu}
				aria-controls="faire-monter-en-competence-menu"
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
					id="faire-monter-en-competence-menu"
					data-testid="faire-monter-en-competence-menu"
					class="bg-blue-xlight mt-2 min-w-[15rem] p-3 flex flex-col gap-2 rounded-lg left-[-15px] absolute z-50"
					on:keydown={(e) => handleKeyboardInterractions(e)}
					use:clickOutside={{ callback: () => (activatedMenu = false) }}
				>
					<li>
						<a
							class="text-white py-3  hover:underline underline-offset-[8px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES[`Donner de l'élan`]}
							aria-current={activeRoute === ROUTES[`Donner de l'élan`] ? 'page' : null}
						>
							Donner de l'élan
						</a>
					</li>
					<li>
						<a
							class="text-white py-3  hover:underline underline-offset-[8px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES['Trouver le juste équilibre']}
							aria-current={activeRoute === ROUTES['Trouver le juste équilibre'] ? 'page' : null}
						>
							Trouver le juste équilibre
						</a>
					</li>
					<li>
						<a
							class="text-white py-3 hover:underline underline-offset-[8px] decoration-sand"
							on:click={() => handleClickMenuButton()}
							href={ROUTES['Faire monter en compétences']}
							aria-current={activeRoute === ROUTES['Faire monter en compétences'] ? 'page' : null}
						>
							Faire monter en compétences
						</a>
					</li>
				</ul>
			{/if}
		</li>

		<DesktopMenuItem
			isActive={activeRoute === ROUTES['Espace presse']}
			href={ROUTES['Espace presse']}
			>Espace presse
		</DesktopMenuItem>
		<DesktopMenuItem isActive={activeRoute === ROUTES.Blog} href={ROUTES.Blog}
			>Blog
		</DesktopMenuItem>
	</ul>
</div>

<style>
	a:active {
		outline: none;
	}
</style>
