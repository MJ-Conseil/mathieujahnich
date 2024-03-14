<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { ROUTES } from '$lib/constants';

	export let activeRoute: string | null;

	export let activatedMenu = false;

	const handleOpenMenu = () => {
		activatedMenu = !activatedMenu;
	};

	const handleCloseMenu = () => {
		activatedMenu = false;
	};

	let button: HTMLElement;

	const regex = new RegExp(`^${ROUTES['Offres de services']}`);

	const handleKeyboardInterractions = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				if (button) {
					button.focus();
					handleCloseMenu();
				}

			default:
				break;
		}
	};
</script>

<li
	class:underline={activeRoute ? activeRoute.match(regex) : null}
	class:text-sand={activeRoute ? activeRoute.match(regex) : null}
	class="text-xl relative hover:underline underline-offset-[8px] decoration-sand"
>
	<button
		class="flex items-center text-lg"
		aria-haspopup="true"
		aria-expanded={activatedMenu}
		aria-controls={activatedMenu ? 'faire-monter-en-competence-menu' : undefined}
		on:click={handleOpenMenu}
		bind:this={button}
	>
		Notre offre
		<span aria-hidden="true" class:rotate-180={activatedMenu} class="ml-2"
			><Icon name="caret" /></span
		>
	</button>

	{#if activatedMenu}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<ul
			id="faire-monter-en-competence-menu"
			data-testid="faire-monter-en-competence-menu"
			class="bg-blue-xlight mt-2 min-w-[18rem] p-3 flex flex-col gap-2 rounded-lg left-[-15px] absolute z-50"
			on:keydown={handleKeyboardInterractions}
		>
			<li>
				<a
					class="text-white hover:underline decoration-2 no-underline underline-offset-[8px] decoration-sand text-lg"
					on:click={handleCloseMenu}
					href={ROUTES[`Donner de l'élan`]}
					aria-current={activeRoute === ROUTES[`Donner de l'élan`] ? 'page' : null}
				>
					Donner de l'élan
				</a>
			</li>
			<li>
				<a
					class="text-white hover:underline decoration-2 no-underline underline-offset-[8px] decoration-sand text-lg"
					on:click={handleCloseMenu}
					href={ROUTES['Trouver le juste équilibre']}
					aria-current={activeRoute === ROUTES['Trouver le juste équilibre'] ? 'page' : null}
				>
					Trouver le juste équilibre
				</a>
			</li>
			<li>
				<a
					class="text-white hover:underline decoration-2 no-underline underline-offset-[8px] decoration-sand text-lg"
					on:click={handleCloseMenu}
					href={ROUTES['Faire monter en compétences']}
					aria-current={activeRoute === ROUTES['Faire monter en compétences'] ? 'page' : null}
				>
					Faire monter en compétences
				</a>
			</li>
		</ul>
	{/if}
</li>
