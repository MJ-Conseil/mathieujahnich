<script lang="ts">
	import ButtonLink from '$lib/components/atoms/ButtonLink/ButtonLink.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { CONTACT_LINKS, ROUTES, SOCIAL_NETWORK_LINKS } from '$lib/constants';
	import { focusableElementStore } from '$lib/stores/setFocusableElement';

	let phoneLink: HTMLElement;

	$: if (phoneLink && $focusableElementStore.findIndex((item) => item === '#phone-link') !== -1) {
		phoneLink.focus();
	}
</script>

<!-- svelte-ignore a11y-no-redundant-roles not redundant because this is the main footer -->
<footer role="contentinfo" class="bg-blue-dark md:p-8 p-4 md:pt-12">
	<div class="md:flex md:justify-around justify-between">
		<div class="hidden lg:block lg:w-1/5">
			<p class="md:block font-ptsans text-blue-light hidden text-xl">
				<Icon
					role="img"
					ariaLabel={'MJ Communication & transition écologique'}
					name="mjConseilFull"
					width="220px"
					height="auto"
				/>
			</p>
			<p class="lg:block font-ptsans text-blue-light hidden text-xl my-4">
				Je mets la communication au service de la transition écologique
			</p>
		</div>

		<nav aria-label="navigation pied de page">
			<h3 class="mj-h4--alt">MJ Conseil</h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link--alt" href={ROUTES.Accueil}>Accueil</a>
				</li>
				<li>
					<a class="mj-link--alt" href={ROUTES['A propos']}>A propos</a>
				</li>
				<li class="text-white">
					Offres :
					<ul class="gap-3 flex flex-col pl-8 mt-2 list-disc text-sand">
						<li>
							<a class="mj-link--alt" href={ROUTES["Donner de l'élan"]}>Donner de l'élan</a>
						</li>
						<li>
							<a class="mj-link--alt visited:underline" href={ROUTES['Trouver le juste équilibre']}
								>Trouver le juste équilibre</a
							>
						</li>
						<li>
							<a class="mj-link--alt visited:underline" href={ROUTES['Faire monter en compétences']}
								>Faire monter en compétences</a
							>
						</li>
					</ul>
				</li>
				<li>
					<a class="mj-link--alt" href={ROUTES.Références}>Références</a>
				</li>
			</ul>
		</nav>

		<nav aria-labelledby="resources-links">
			<h3 id="resources-links" class="mj-h4--alt">Ressources</h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link--alt" href={ROUTES.Blog}>Blog</a>
				</li>
				<li>
					<a class="mj-link--alt" href={ROUTES['Espace presse']}>Espace presse</a>
				</li>

				<li>
					<a class="mj-link--alt" href={ROUTES['Newsletter']}>Newsletter</a>
				</li>
			</ul>
		</nav>

		<div>
			<h3 class="mj-h3--alt">Contact</h3>
			<ul class="gap-4 flex flex-col">
				<li class="flex items-center text-white">
					<span aria-hidden="true" class="pr-3">
						<Icon class="text-sand" width="18px" height="auto" name="phone" />
					</span>

					<a
						id="phone-link"
						bind:this={phoneLink}
						class="text-white no-underline"
						href={`tel:${CONTACT_LINKS.phone.replaceAll(' ', '')}`}
					>
						<span class="sr-only">téléphone :</span>
						{CONTACT_LINKS.phone} (Mathieu)
					</a>
				</li>
				<li class="flex items-center text-white">
					<span aria-hidden="true" class="pr-3">
						<Icon class="text-sand" width="18px" height="auto" name="letter" />
					</span>
					<a class="text-white no-underline" href={`mailto:${CONTACT_LINKS.email}`}>
						<span class="sr-only">email :</span>
						{CONTACT_LINKS.email}
					</a>
				</li>
			</ul>

			<div class="mt-5">
				<ButtonLink href="/newsletter">
					<Icon class="inline" width="24px" height="22px" name="letterFull" />
					S'inscrire à la newsletter
				</ButtonLink>
			</div>

			<ul class="mt-8 items-center gap-5 flex">
				<li>
					<a href={SOCIAL_NETWORK_LINKS.linkedin}>
						<span aria-hidden="true">
							<Icon
								name="linkedin"
								width="30px"
								height="auto"
								class="text-sand hover:text-sand-dark "
							/></span
						>
						<span class="sr-only">Nous suivre sur Linkedin</span>
					</a>
				</li>

				<li>
					<a href={SOCIAL_NETWORK_LINKS.youtube}>
						<span aria-hidden="true">
							<Icon
								name="youtube"
								width="auto"
								height="25px"
								class="text-sand rounded hover:text-sand-dark"
							/></span
						>
						<span class="sr-only">Nous suivre sur Youtube</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<hr class="text-white my-7" />

	<div class="md:flex items-center justify-between">
		<div>
			<p class="text-white">
				© Copyright 2005 – {new Date().getFullYear()} | Tous droits réservés
			</p>
		</div>

		<nav aria-label="liens importants" class="md:m-0 mt-4">
			<ul class="md:flex md:gap-2">
				<li class="text-sand">
					<a class="text-sand font-bold decoration-dotted" href="/informations-legales"
						>Informations légales</a
					>
				</li>
				<li class="text-white hidden md:block">|</li>

				<li class="text-sand">
					<a class="text-sand font-bold decoration-dotted" href="/declaration-accessibilité"
						>Déclaration d'accessibilité : non évaluée</a
					>
				</li>

				<li class="text-white hidden md:block">|</li>

				<li class="text-sand">
					<a class="text-sand font-bold decoration-dotted" href="/plan-de-site">Plan de site</a>
				</li>

				<li class="text-white hidden md:block">|</li>
				<li class="text-white">
					Conception et création : <a
						href="https://www.linkedin.com/in/anne-faubry-3b2b8390/"
						class="text-sand font-bold decoration-dotted">Anne Faubry</a
					>,
					<a class="text-sand font-bold decoration-dotted" href="https://www.fairness.coop"
						>Fairness Scop</a
					>,

					<a class="text-sand font-bold decoration-dotted" href="https://www.cyanne.fr/">Cyanne</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
