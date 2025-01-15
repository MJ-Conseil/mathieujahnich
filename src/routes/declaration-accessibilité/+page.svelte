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
		<h2 class="mj-h2 sr-only">Nos engagements</h2>
		<p>
			La société MJ Conseil s’engage à rendre son site Web accessible conformément à l’article 47 de
			la loi n° 2005-102 du 11 février 2005. Cette déclaration d’accessibilité s’applique au site MJ
			Conseil : https://mathieu-jahnich.fr/
		</p>

		<h2 class="mj-h2">Etat de conformité</h2>

		<p class="mb-8">
			MJ Conseil est en conformité partielle avec le référentiel général d’amélioration de
			l’accessibilité en raison des non-conformités ci-dessous.
		</p>

		<h2 class="mj-h2">Résultats des tests</h2>

		<p class="mb-8">
			L’audit de conformité au RGAA 4.1.2 réalisé par la société <a
				href="https://www.numerik-ea.fr/"
			>
				Numerik-ea
			</a> révèle que :
		</p>

		<ul class="list-disc text-blue-dark">
			<li><strong>88,24% </strong> des critères RGAA sont respectés.</li>
		</ul>

		<p class="my-3">Dans le détail :</p>

		<ul class="list-disc text-blue-dark">
			<li>Nombre de critères conformes : 45</li>
			<li>Nombre de critères non applicables : 55</li>
			<li>Nombre de critères non conformes : 6</li>
		</ul>
		<h2 class="mj-h2">Contenu non accessible</h2>
		<h3 class="mj-h3">Non conformité</h3>

		<p class="my-3">Liste des critères non conforme :</p>

		<ul class="list-disc text-blue-dark">
			<li>
				1.2 - Chaque image de décoration est-elle correctement ignorée par les technologies
				d’assistance ?
			</li>
			<li>
				1.3 - Pour chaque image porteuse d'information ayant une alternative textuelle, cette
				alternative est-elle pertinente (hors cas particuliers) ?
			</li>
			<li>
				9.1 - Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée
				de titres ?
			</li>
			<li>
				11.10 - Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente
				(hors cas particuliers) ?
			</li>

			<li>
				12.6 - Les zones de regroupement de contenus présentes dans plusieurs pages web (zones
				d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de
				recherche) peuvent-elles être atteintes ou évitées ?
			</li>

			<li>
				12.7 - Dans chaque page web, un lien d’évitement ou d’accès rapide à la zone de contenu
				principal est-il présent (hors cas particuliers) ?
			</li>
		</ul>

		<h2 class="mj-h2">Etablissement de cette déclaration d'accessibilité</h2>
		<p>Cette déclaration a été établie le 03 juillet 2024.</p>
		<h3 class="mj-h3">Technologies utilisées pour la réalisation du site web</h3>
		<ul class="list-disc text-blue-dark">
			<li>CSS</li>

			<li>HTML</li>

			<li>Javascript</li>
		</ul>

		<h3 class="mj-h3">Environnement de test</h3>
		<p class="my-3">
			Les tests des pages web ont été effectués avec les combinaisons de navigateurs web et lecteurs
			d’écran suivants :
		</p>

		<ul class="list-disc text-blue-dark">
			<li>NVDA, Firefox</li>

			<li>Jaws , Firefox</li>

			<li>Voiceover, Safari</li>
		</ul>

		<p class="my-3">Les outils suivants ont été utilisés lors de l’évaluation :</p>

		<ul class="list-disc text-blue-dark">
			<li>Color Contrast Analyser</li>

			<li>HeadingsMap</li>

			<li>Web developer​</li>
			<li>ARC Toolkit</li>
			<li>Stylus</li>
		</ul>

		<p class="my-5">Pages du site ayant fait l’objet de la vérification de conformité :</p>

		<ol class="list-decimal text-blue-dark">
			<li>Accueil : https://mathieu-jahnich.fr/</li>
			<li>Plan du site : https://mathieu-jahnich.fr/plan-de-site</li>
			<li>
				Déclaration d'accessibilité : https://mathieu-jahnich.fr/declaration-accessibilit%C3%A9
			</li>
			<li>Informations légales : https://mathieu-jahnich.fr/informations-legales</li>
			<li>Donner de l’élan : https://mathieu-jahnich.fr/offres-de-services/donner-de-l-elan</li>
			<li>Qui sommes nous ? : https://mathieu-jahnich.fr/qui-sommes-nous</li>
			<li>Espace presse : https://mathieu-jahnich.fr/espace-presse</li>
			<li>Blog : https://mathieu-jahnich.fr/blog</li>
			<li>
				Blog Article "Back Market pas vraiment « pro » sur les règles déontologiques" :
				https://mathieu-jahnich.fr/blog/back-market-pas-vraiment-pro-sur-les-regles-deontologiques
			</li>
			<li>Newsletter : https://mathieu-jahnich.fr/newsletter</li>
		</ol>

		<h2 class="mj-h2">Retour d'information et contact</h2>

		<p class="my-3">
			Si vous n’arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter le
			responsable du site web pour être orienté vers une alternative accessible ou obtenir le
			contenu sous une autre forme.
		</p>

		<ul class="list-disc text-blue-dark">
			<li>
				Contacter <a class="mj-link--ternary" href={CONTACT_LINKS.email}
					>conseil@mathieu-jahnich.fr</a
				>
			</li>
		</ul>

		<h2>Voies de recours</h2>

		<p class="my-3">
			Cette procédure est à utiliser dans le cas suivant. Vous avez signalé au responsable du site
			web un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services et
			vous n’avez pas obtenu de réponse satisfaisante.
		</p>

		<ul class="list-disc text-blue-dark">
			<li>
				<a href="https://formulaire.defenseurdesdroits.fr/">
					Écrire un message au Défenseur des droits
				</a>
			</li>

			<li>
				<a href="https://www.defenseurdesdroits.fr/saisir/delegues">
					Contacter le délégué du Défenseur des droits dans votre région
				</a>
			</li>

			<li>
				Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) Défenseur des droits
				Libre réponse 71120 75342 Paris CEDEX 07
			</li>
		</ul>
	</Section>
</main>
