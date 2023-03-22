<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import { CONTACT_LINK, SOCIAL_NETWORK_LINKS } from '$lib/constants';
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

		<div>
			<h3 class="mj-h3--alt my-2">Offre conseil</h3>
			<ul class="gap-3 flex flex-col">
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
		</div>

		<div class="">
			<h3 class="mj-h3--alt my-2">Contact</h3>
			<ul class="gap-1 flex flex-col">
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="phone" />
					</span>

					<a class="text-white" href={`tel:${CONTACT_LINK.phone}`}>
						<span class="sr-only">téléphone :</span>
						{CONTACT_LINK.phone}
					</a>
				</li>
				<li class="flex items-center text-white">
					<span aria-hidden="true">
						<Icon class="pr-1 text-sand" width="18px" height="auto" name="letter" />
					</span>
					<a class="text-white" href={`mailto:${CONTACT_LINK.email}`}>
						<span class="sr-only">email :</span>
						{CONTACT_LINK.email}
					</a>
				</li>
			</ul>

			<ul class="mt-4 flex items-center gap-2">
				<li>
					<a href={SOCIAL_NETWORK_LINKS.linkedin}>
						<span aria-hidden="true">
							<Icon name="linkedin" width="20px" height="auto" class="text-sand" /></span
						>
						<span class="sr-only">Linkedin</span>
					</a>
				</li>

				<li>
					<a href={SOCIAL_NETWORK_LINKS.youtube}>
						<span aria-hidden="true">
							<Icon name="youtube" width="auto" height="18px" class="text-sand" /></span
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
			<p class="text-white">© Copyright 2005 – 2022 | Tous droits réservés</p>
		</div>

		<nav aria-label="liens importants" class="md:m-0 mt-4">
			<ul class="md:flex md:gap-2">
				<li class="text-sand">
					<a class="text-sand font-bold decoration-dotted" href="/informations-legales"
						>Informations légales</a
					>
				</li>
				<li class="text-white">|</li>
				<li class="text-white">
					Conception et création : Anne Faubry & <a
						class="text-sand font-bold decoration-dotted"
						href="https://www.fairness.coop">Fairness Scop</a
					>
				</li>
			</ul>
		</nav>
	</div>
</footer>
