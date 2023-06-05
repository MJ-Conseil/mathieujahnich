<script>
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { CONTACT_LINKS } from '$lib/constants';
</script>

<Section>
	<h1>Page non trouvée</h1>
	<p class="font-extrabold mb-2">Erreur 404</p>

	<p class="mb-2">
		La page que vous cherchez est introuvable. Veuillez nous excusez pour la gêne occasionnée.
	</p>

	<p class="mb-2 leading-7">
		Si vous avez tapé l'adresse dans votre navigateur, veuillez vérifier qu'elle est correcte. La
		page n'est peut-être plus disponible. <br />

		Dans ce cas, pour continuer votre visite, vous pouvez visiter notre page d'acceuil. <br />

		Sinon, contactez-nous pour que l'on puisse vous rediriger vers la bonne information.
	</p>

	<div class="flex gap-2 mt-5">
		<div>
			<a
				class="bg-sand inline-block px-16 py-2 hover:bg-sand-dark font-bold rounded text-indigo"
				href="/">Page d'acceuil</a
			>
		</div>
		<div>
			<a
				class="bg-sand inline-block px-16 py-2 hover:bg-sand-dark font-bold rounded text-indigo"
				href={`mailto:${CONTACT_LINKS.email}`}
				>Contactez-nous
			</a>
		</div>
	</div>
</Section>
