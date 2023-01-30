<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	import { CONTACT_LINK, SOCIAL_NETWORK_LINKS } from '$lib/constants';
</script>

<!-- svelte-ignore a11y-no-redundant-roles not redundant because this is the main footer -->
<footer role="contentinfo" class="bg-blue-dark md:p-8 p-4">
	<div class="bg-white rounded-xl text-center p-5 mb-8">
		<h3 class="mj-h3 mb-3">Restons en contact</h3>
		<p>Recevez nos dernières actualités et publications ou prenons rendez-vous.</p>
		<div class="flex flex-col md:flex-row gap-5 align-center justify-center mt-5 mb-2">
			<a class="mj-link--btn" href={CONTACT_LINK.reservio}>Prendre rendez-vous</a>
		</div>
	</div>

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
				<li><a class="mj-link--alt" href="/tata">Prendre de la hauteur</a></li>
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

	<div class="lg:flex items-center justify-between">
		<div class="text-white">
			<p>© Copyright 2005 – 2022 | Tous droits réservés</p>
		</div>

		<nav aria-label="liens importants" class="lg:m-0 mt-4">
			<ul>
				<li class="text-white">
					Conception et création : <a
						class="text-white font-bold decoration-dotted"
						href="https://www.fairness.coop">Fairness Scop</a
					> et les Designers Ethiques
				</li>
			</ul>
		</nav>
	</div>
</footer>
