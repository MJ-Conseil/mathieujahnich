<script lang="ts">
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { CONTACT_HOSTING, CONTACT_LINKS, SITE_WEB_NAME } from '$lib/constants';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Informations Légales</title>
</svelte:head>

<div class="py-8 bg-blue-dark">
	<Container>
		<header>
			<h1 class="mj-h1--alt break-words">Déclaration d'accessibilité</h1>
		</header>
	</Container>
</div>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="md:p-0 md:0" id="main-content">
	<Section>
		<p class="mb-8">Chères utilisatrices et utilisateurs,</p>

		<p class="mb-8">
			Nous souhaitons vous informer que nous avons entamé le processus d'audit d'accessibilité de
			notre site web. Actuellement, cet audit n'a pas encore été réalisé et nous ne pouvons donc pas
			établir la déclaration d'accessibilité. Cependant, nous sommes déterminés à le faire
			conformément aux normes du RGAA (Référentiel Général d'Amélioration de l'Accessibilité).
		</p>

		<p class="mb-8">
			Le RGAA établit des règles visant à rendre les sites web accessibles à un public diversifié, y
			compris les personnes en situation de handicap. Nous sommes engagés dans cette démarche pour
			créer une expérience en ligne inclusive pour tous nos visiteurs.
		</p>

		<p class="mb-8">
			Nous vous tiendrons informés des progrès réalisés dans notre démarche d'accessibilité
			conformément au RGAA. Si vous avez des commentaires ou des suggestions à ce sujet, n'hésitez
			pas à nous contacter à <a class="mj-link--ternary" href={CONTACT_LINKS.email}
				>conseil@mathieu-jahnich.fr</a
			>.
		</p>

		<p>Cordialement,</p>
		<p>Mathieu Jahnich</p>
	</Section>
</main>
