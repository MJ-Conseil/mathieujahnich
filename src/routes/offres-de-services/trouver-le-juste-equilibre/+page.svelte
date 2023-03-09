<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Method from '$lib/components/mollecules/Offer/Method.svelte';
	import Need from '$lib/components/mollecules/Offer/Need.svelte';
	import ReferenceAccordion from '$lib/components/mollecules/ReferenceAccordion/ReferenceAccordion.svelte';
	import type { PageData } from './$types';
	import slugify from 'slugify';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';
	import { SIZE } from '$lib/constants';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Offres de services : Prendre de la hauteur</title>
</svelte:head>

<div class="w-full px-4 py-8 pb-14 relative bg-blue-dark">
	<div class="container lg:pb-8 lg:px-8 lg:mx-auto">
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="lg:w-[40%] flex flex-col gap-4  break-words overflow-visible  ">
			<p class="text-sand font-bold">Notre offre</p>
			<h1 class="mj-h1--alt font-bold text">Trouver le juste équilibre</h1>

			<p class="text-white">
				Analyser les arguments écologiques des supports marketing et communication pour vérifier
				leur cohérence avec la stratégie RSE et avec les règles déontologiques, mettre en place des
				filets de sécurité pour limiter les accusations de greenwashing.
			</p>
		</header>
	</div>
	<div
		aria-hidden="true"
		class="lg:block lg:absolute lg:-top-14 right-40 justify-center hidden text-white "
	>
		<Icon width="30rem" height="100%" name="stones" fill="#ffffff" />
	</div>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8">Votre besoin</h2>
			<p>J’ai besoin de trouver le juste équilibre sur :</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Mes allégations en tant que marque">
					<ul class="mj-list--disc">
						<li>Quels messages prioriser dans notre communication ?</li>
						<li>Comment briefer l’agence pour qu’elle les incarne correctement ?</li>
						<li>
							Comment communiquer sur mes engagements sans me faire accuser de greenwashing ? sans
							me faire critiquer par les ONG ?
						</li>
					</ul>
				</Need>

				<Need title="Mes propositions en tant qu’agence">
					<ul class="mj-list--disc">
						<li>Comment traiter le brief client ?</li>
						<li>Comment valider les propositions créatives par rapport aux attentes du client ?</li>
					</ul>
				</Need>
			</div>
		</div>
	</Section>

	<Section alt>
		<div class="h-full md:px-8">
			<h2 class="my-8">Nos méthodes et les livrables</h2>
			<div class="md:grid md:grid-cols-5 gap-4">
				<div class="col-span-3">
					Analyser vos messages, participer au brief de l’agence Challenger le client, épauler votre
					équipe conseil et créa Des recos pour éviter le greenwashing
					<Method
						title=""
						paragraph="Valoriser les atouts écologiques d’un produit ou service pour augmenter les ventes, communiquer les engagements pour se différencier de la concurrence, mettre en lumière les équipes pour les fidéliser… "
						contents={[]}
					/>
				</div>
				<div class="col-start-3 col-end-6">
					<Method
						title=""
						paragraph="J’accompagne les entreprises à trouver le juste équilibre en communication :"
						contents={[
							'Analyser les arguments écologiques des supports marketing et communication pour vérifier leur cohérence avec la stratégie RSE et avec les règles déontologiques.',
							'Identifier les risques et mettre en place des filets de sécurité : éléments de preuve, tiers de confiance, posture de responsabilité, argumentaires…'
						]}
					/>
				</div>
				<div class="col-span-3">
					<Method
						title=""
						paragraph="Traduire vos engagements dans tous vos métiers et vos actions de communication"
						contents={[
							'Argumentaire',
							'Réseau d’ambassadrices et d’ambassadeurs',
							'Accompagnement des forces de vente'
						]}
					/>
				</div>
			</div>
			<div class="md:grid md:grid-cols-5 gap-4">
				<div class="col-start-3 col-end-6">
					<Method
						title=""
						paragraph="Analyser vos messages, participer au brief de l’agence"
						contents={[]}
					/>
				</div>
				<div class="col-span-3">
					<Method
						title=""
						paragraph="Challenger le client, épauler votre équipe conseil et créa"
						contents={[]}
					/>
				</div>
				<div class="col-start-3 col-end-6">
					<Method title="" paragraph="Des recos pour éviter le greenwashing" contents={[]} />
				</div>
			</div>
		</div>
	</Section>

	<!-- <Section alt>
		<div class="bg-white rounded-xl relative  p-6 my-10">
			<div>
				<div class=" absolute top-6 left-6">
					<Circle size={SIZE.SMALL} />
				</div>

				<h3 class="my-6 mj-h4">Les livrables</h3>
			</div>
			<div class="lg:gap-x-20 lg:gap-y-10 grid  lg:grid-cols-2 ">
				<div>
					<ul class="mj-list--disc">
						<li>Stratégie RSE</li>
						<li>Raison d’être</li>
						<li>Recommandations stratégiques et opérationnelles</li>
					</ul>
				</div>
				<div>
					<ul class="mj-list--disc">
						<li>Rapport RSE</li>
						<li>Plan d’action</li>
						<li>Indicateurs</li>
						<li>Kits d’animation interne</li>
						<li>Eléments de langage</li>
					</ul>
				</div>
			</div>
		</div>
	</Section> -->

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
