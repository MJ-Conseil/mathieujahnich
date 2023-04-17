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
					{`Donner de l’élan`}
				</h1>
				<p class="text-white text-xl lg:text-2xl mb-4 lg:mb-6">
					<i>60 années d’expérience cumulées</i>
				</p>

				<p class="text-white lg:text-lg lg:w-[80%]">
					Enrichir et (re)dynamiser les stratégies RSE et la communication des entreprises à travers
					l’analyse du positionnement et des principaux enjeux environnementaux et sociaux, l’étude
					de l’environnement concurrentiel, le recueil et l’analyse des perceptions et des attentes
					des parties-prenantes internes et externes.
				</p>
			</header>
			<div aria-hidden="true" class="hidden lg:block text-white mt-[-80px]">
				<Icon width="240px" height="450px" name="planeService" fill="#ffffff" />
			</div>
		</div>
	</Container>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8 text-3xl lg:text-4xl">Votre besoin</h2>
			<p class="lg:text-lg">
				Les enjeux environnementaux et sociaux sont complexes, les attentes des parties prenantes
				sont plurielles, les traductions dans le positionnement marketing, dans l’offre et dans les
				actions de communication sont multiples.Vous avez besoin de donner de l’élan à :
			</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Votre stratégie RSE">
					<ul class="mj-list--disc">
						<li class="mb-2 lg:text-lg">
							Comment l’ajuster face à l’évolution du contexte et des attentes de vos parties
							prenantes ?
						</li>
						<li class="mb-2 lg:text-lg">Comment garder un train d’avance ?</li>
						<li class="mb-2 lg:text-lg">
							Quelles sont les nouvelles obligations légales et comment y répondre ?
						</li>
						<li class="mb-2 lg:text-lg">
							Comment mieux la structurer pour faciliter l’appropriation interne et la valorisation
							externe ?
						</li>
						<li class="mb-2 lg:text-lg">
							Comment définir une raison d’être qui vous ressemble et l’incarner ?
						</li>
					</ul>
				</Need>

				<Need title="Votre communication RSE">
					<ul class="mj-list--disc">
						<li class="mb-2 lg:text-lg">
							Comment (re)mobiliser vos collaboratrices et collaborateurs ?
						</li>
						<li class="mb-2 lg:text-lg">
							Comment embarquer vos clients (B2B et B2C) et vos partenaires ?
						</li>
						<li class="mb-2 lg:text-lg">Comment vous différencier, être créatif et impactant ?</li>
						<li class="mb-2 lg:text-lg">
							Comment mettre en cohérence les actions de communication et les messages ?
						</li>
						<li class="mb-2 lg:text-lg">Comment mobiliser vos forces de vente ?</li>
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
			<h2 class="my-8 text-3xl lg:text-4xl">Nos méthodes et les livrables</h2>
			<Method title="Diagnostic">
				<p class="mb-2 lg:text-lg">
					Recueillir et analyser les
					<strong>attentes et perceptions de vos parties prenantes</strong>
					(collaborateurs, clients, fournisseurs...). Évaluer votre <strong>politique RSE</strong>
					et votre
					<strong>politique de communication associée</strong>, votre
					<strong>environnement concurrentiel</strong>
				</p>
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Enquête par entretiens ou questionnaire</li>
					<li class="mb-2 lg:text-lg">Cartographie des parties prenantes</li>
					<li class="mb-2 lg:text-lg">Benchmark</li>
				</ul>
			</Method>

			<Method title="Stratégie">
				<p class="mb-2 lg:text-lg">
					Clarifier et prioriser vos
					<strong>enjeux environnementaux, sociaux et économiques</strong>, enrichir vos
					<strong>stratégies RSE, marketing et communication</strong> en cohérence avec le modèle d’affaire
				</p>

				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Ateliers de co-construction</li>
					<li class="mb-2 lg:text-lg">Séminaires de restitution</li>
					<li class="mb-2 lg:text-lg">Matrice de matérialité</li>
				</ul>
			</Method>

			<Method title="Appropriation">
				<p class="mb-2 lg:text-lg">
					<strong>Traduire vos engagements</strong> dans tous vos métiers et vos
					<strong>actions de communication</strong>
				</p>

				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Argumentaire</li>
					<li class="mb-2 lg:text-lg">Réseau d’ambassadrices et d’ambassadeurs</li>
					<li class="mb-2 lg:text-lg">Accompagnement des forces de vente</li>
				</ul>
			</Method>

			<Method title="Livrables">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Stratégie RSE</li>
					<li class="mb-2 lg:text-lg">Raison d’être</li>
					<li class="mb-2 lg:text-lg">Recommandations stratégiques et opérationnelles</li>
					<li class="mb-2 lg:text-lg">Rapport RSE</li>
					<li class="mb-2 lg:text-lg">Plan d’action</li>
					<li class="mb-2 lg:text-lg">Indicateurs</li>
					<li class="mb-2 lg:text-lg">Kits d’animation interne</li>
					<li class="mb-2 lg:text-lg">Eléments de langage</li>
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
