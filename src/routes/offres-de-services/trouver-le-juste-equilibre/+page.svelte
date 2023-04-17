<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Method from '$lib/components/mollecules/Offer/Method.svelte';
	import Need from '$lib/components/mollecules/Offer/Need.svelte';
	import ReferenceAccordion from '$lib/components/mollecules/ReferenceAccordion/ReferenceAccordion.svelte';
	import type { PageData } from './$types';
	import slugify from 'slugify';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Offres de services : Prendre de la hauteur</title>
</svelte:head>

<div class="w-full px-4 py-8 pb-14 relative bg-blue-dark">
	<Container>
		<div class="lg:pb-8 lg:px-8 flex justify-between align-start">
			<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
			<header role="banner" class="flex-1 break-words overflow-visible">
				<p class="text-sand font-bold mb-2">Notre offre</p>
				<h1 class="mj-h1--alt font-bold text text-4xl lg:text-6xl mb-4 lg:mb-8">
					{`Trouver le juste équilibre`}
				</h1>
				<p class="text-white text-xl lg:text-2xl mb-4 lg:mb-6">
					<i>Le « crash-test » de vos campagnes RSE</i>
				</p>

				<p class="text-white lg:text-lg lg:w-[80%]">
					Analyser les allégations environnementales et sociales des supports marketing et
					communication pour vérifier leur cohérence avec la stratégie RSE et avec les règles
					déontologiques, mettre en place des filets de sécurité pour limiter les critiques
					(greenwashing et tous les autres “washing”, stéréotypes…).
				</p>
			</header>
			<div aria-hidden="true" class="hidden lg:block text-white mt-[-80px]">
				<Icon width="279px" height="450px" name="stonesService" fill="#ffffff" />
			</div>
		</div>
	</Container>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8 text-3xl lg:text-4xl">Votre besoin</h2>
			<p class="lg:text-lg">
				Valoriser les atouts environnementaux, sociaux ou sociétaux d’un produit ou service,
				communiquer les engagements, mettre en lumière les équipes… c’est indispensable. Mais
				comment le faire sans être critiqué, sans abîmer la confiance des publics ? Vous avez besoin
				de trouver le juste équilibre sur :
			</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Vos allégations en tant que marque">
					<ul class="mj-list--disc">
						<li class="mb-2">Quels messages prioriser dans votre communication ?</li>
						<li class="mb-2">
							Comment communiquer sur nos engagements en limitant les risques de réputation ?
						</li>
						<li class="mb-2">Comment briefer l’agence pour qu’elle les traduise correctement ?</li>
						<li class="mb-2">Comment collaborer avec les influenceurs ?</li>
					</ul>
				</Need>

				<Need title="Vos propositions en tant qu’agence">
					<ul class="mj-list--disc">
						<li class="mb-2">Comment traiter le brief client ?</li>
						<li class="mb-2">
							Comment valider les propositions créatives par rapport aux attentes du client ?
						</li>
						<li class="mb-2">Comment amener le client à se poser d’autres questions ?</li>
					</ul>
				</Need>
			</div>
		</div>
	</Section>

	<Section alt>
		<div class="md:px-8 relative">
			<div
				aria-hidden="true"
				class="absolute h-full w-11/12 left-0 flex justify-center items-center hidden lg:flex"
			>
				<Icon width="100%" height="75%" name="curve" fill="none" />
			</div>
			<h2 class="my-8 text-3xl lg:text-4xl">Nos méthodes et les résultats</h2>
			<Method title="Analyse et recommandations">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">
						<strong>Identifier les allégations qui pourraient prêter à confusion</strong>, être
						mal-interprétées ou susciter des réactions négatives (greenwashing, stéréotypes)
					</li>
					<li class="mb-2 lg:text-lg">
						Sélectionner les <strong>éléments de preuve à avancer</strong> et/ou des pistes de
						<strong>reformulation</strong>
					</li>
					<li class="mb-2 lg:text-lg">
						Décrypter le <strong>cadre déontologique et réglementaire</strong> et le contexte social
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Clarifier les atouts</strong> d’un produit/service
					</li>
				</ul>
			</Method>

			<Method title="Tous types de supports">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">
						Campagne de publicité, contenus web, vidéo, PLV, packaging, dossier de presse, réseaux
						sociaux, fiche produit, argumentaire de vente, éléments de langage DG, outils de
						communication interne…
					</li>
					<li class="mb-2 lg:text-lg">Analyse des contenus textuels et visuels</li>
					<li class="mb-2 lg:text-lg">Niveau groupe, business units, marchés, produits…</li>
				</ul>
			</Method>

			<Method title="Modalités">
				<p class="mb-2 lg:text-lg">
					Nous ajustons les modalités de notre intervention à vos besoins et au caractère d’urgence
					de votre demande.
				</p>
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">
						Analyse plusieurs semaines <strong>avant votre campagne</strong> : messages clés, posture
						de communication, brief agence…
					</li>
					<li class="mb-2 lg:text-lg">
						Analyse en <strong>cas d’urgence</strong>, quelques jours avant la publication ou la
						remise au client : communiqué de presse, nouveau site web, idée créative, story board…
					</li>
					<li class="mb-2 lg:text-lg">
						Nous adoptons une <strong>posture critique</strong> (“sans filtre”)
						<strong>et constructive</strong>
					</li>
					<li class="mb-2 lg:text-lg">
						Nous facturons <strong>à l’heure</strong> : vous ne payez que le temps effectif d’analyse
					</li>
				</ul>
			</Method>

			<Method title="Résultats">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Améliorer immédiatement vos éléments de communication</li>
					<li class="mb-2 lg:text-lg">Sécuriser vos prises de parole et vous redonner confiance</li>
					<li class="mb-2 lg:text-lg">
						Susciter des discussions (entre les équipes RSE, R&D, innovation, com, marketing,
						juridique…) et faire progresser certains sujets en interne
					</li>
					<li class="mb-2 lg:text-lg">
						Identifier des pistes d’amélioration à plus long terme, sur la posture de communication,
						la stratégie RSE, votre offre, la stratégie d’entreprise…
					</li>
				</ul>
			</Method>
		</div>
	</Section>

	<Section>
		<h2>Missions récentes</h2>
		<div class="mt-8 flex flex-col gap-5">
			{#if data.references.length > 0}
				{#each data.references as reference}
					<ReferenceAccordion
						id={slugify(reference.title)}
						content={reference.content}
						imageUrl={reference.imageUrl}
						title={reference.title}
					/>
				{/each}
			{/if}
		</div>

		<div class="flex justify-end mt-8">
			<ArrowLink href={ROUTES['Références']}>Voir plus de références</ArrowLink>
		</div>
	</Section>
</main>
