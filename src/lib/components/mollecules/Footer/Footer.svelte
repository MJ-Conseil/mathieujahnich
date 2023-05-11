<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { CONTACT_LINKS, ROUTES, SOCIAL_NETWORK_LINKS } from '$lib/constants';
</script>

<!-- svelte-ignore a11y-no-redundant-roles not redundant because this is the main footer -->
<footer role="contentinfo" class="bg-blue-dark  md:p-8 p-4">
	<div class="lg:flex  justify-between">
		<div class="w-1/5">
			<p class="lg:block font-ptsans text-blue-light hidden text-xl">
				<Icon name="mjConseilFull" width="220px" height="auto" />
			</p>
			<p class="lg:block font-ptsans text-blue-light hidden text-xl my-4">
				Nous mettons la communication au service de la transition écologique
			</p>
		</div>

		<nav aria-label="site-map">
			<h3 class="mj-h3--alt my-2">MJ Conseil</h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link--alt" href={ROUTES.Accueil}>Accueil</a>
				</li>
				<li class="text-white">
					Offre de services:
					<ul class="gap-3 flex flex-col pl-8 mt-2">
						<li>
							<a class="mj-link--alt" href="/offres-de-services/prendre-de-la-hauteur"
								>Prendre de la hauteur</a
							>
						</li>
						<li>
							<a class="mj-link--alt visited:underline" href="/toto">Trouver le juste équilibre</a>
						</li>
						<li><a class="mj-link--alt visited:underline" href="/tutu">Donner de l'élan</a></li>
					</ul>
				</li>
				<li>
					<a class="mj-link--alt" href={ROUTES.Références}>Références</a>
				</li>
			</ul>
		</nav>

		<nav aria-labelledby="resources-links">
			<h3 id="resources-links" class="mj-h3--alt my-2">Ressources</h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link--alt" href={ROUTES.Blog}>Blog</a>
				</li>
				<li>
					<a class="mj-link--alt" href={ROUTES['Espace Presse']}>Espace Presse</a>
				</li>

				<li>
					<a class="mj-link--alt" href={ROUTES['Newsletter']}>Newsletter</a>
				</li>
			</ul>
		</nav>

		<div>
			<h3 class="mj-h3--alt my-2">Contact</h3>
			<ul class="gap-1 flex flex-col">
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="phone" />
					</span>

					<a class="text-white" href={`tel:${CONTACT_LINKS.phone}`}>
						<span class="sr-only">téléphone :</span>
						{CONTACT_LINKS.phone}
					</a>
				</li>
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="letter" />
					</span>
					<a class="text-white" href={`mailto:${CONTACT_LINKS.email}`}>
						<span class="sr-only">email :</span>
						{CONTACT_LINKS.email}
					</a>
				</li>
			</ul>

			<div class="mt-5">
				<a
					href={ROUTES['newsletter']}
					class="bg-sand flex items-center gap-2 px-16 py-2 hover:bg-sand-dark font-bold  rounded  text-indigo"
				>
					<Icon width="24px" height="22px" name="letterFull" />
					S'inscrire à la newsletter
				</a>
			</div>

			<ul class="mt-8 flex items-center gap-2">
				<li>
					<a href={SOCIAL_NETWORK_LINKS.linkedin}>
						<span aria-hidden="true">
							<Icon name="linkedin" width="30px" height="auto" class="text-sand" /></span
						>
						<span class="sr-only">Linkedin</span>
					</a>
				</li>

				<li>
					<a href={SOCIAL_NETWORK_LINKS.youtube}>
						<span aria-hidden="true">
							<Icon name="youtube" width="auto" height="25px" class="text-sand" /></span
						>
						<span class="sr-only">Youtube</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<hr class="text-white my-4" />

	<div class="md:flex items-center justify-between">
		<div>
			<p class="text-white">© Copyright 2005 – {new Date().getFullYear()} | Tous droits réservés</p>
		</div>

		<nav aria-label="liens importants" class="md:m-0 mt-4">
			<ul class="md:flex md:gap-2">
				<li class="text-sand">
					<a class="text-sand font-bold decoration-dotted" href="/informations-legales"
						>Informations légales</a
					>
				</li>
				<li class="text-white hidden md:block">|</li>
				<li class="text-white">
					Conception et création : Anne Faubry , <a
						class="text-sand font-bold decoration-dotted"
						href="https://www.fairness.coop">Fairness Scop</a
					>,

					<a class="text-sand font-bold decoration-dotted" href="https://www.cyanne.fr/">Cyanne</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>
