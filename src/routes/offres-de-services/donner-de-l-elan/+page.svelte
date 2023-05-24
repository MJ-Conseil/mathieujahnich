<script lang="ts">
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

<div class="w-full px-4 py-8 pb-14 md:pb-6 relative bg-blue-dark">
	<Container>
		<div class="lg:px-8 flex justify-between align-start">
			<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
			<header role="banner" class="flex-1">
				<p class="text-sand font-bold text-2xl mb-2">Notre offre</p>
				<h1 class="mj-h1--alt font-bold text text-4xl lg:text-6xl mb-4 lg:mb-8">
					{`Donner de l’élan`}
				</h1>
				<p class="text-white text-xl lg:text-3xl mb-4 lg:mb-6">
					<i>60 années d’expérience cumulées</i>
				</p>

				<p class="text-white lg:text-[1.4rem] lg:w-[80%] font-ptsans lg:leading-9">
					Enrichir et (re)dynamiser les stratégies RSE et la communication des entreprises à travers
					l’analyse du positionnement et des principaux enjeux environnementaux et sociaux, l’étude
					de l’environnement concurrentiel, le recueil et l’analyse des perceptions et des attentes
					des parties-prenantes internes et externes.
				</p>
			</header>
			<div aria-hidden="true" class="hidden lg:block text-white mt-[-80px]">
				<Icon width="240px" height="450px" name="planeYellow" fill="#ffffff" />
			</div>
		</div>
	</Container>
</div>

<main id="main-content" class="md:p-0 md:0">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="mb-4 text-3xl lg:text-4xl">Votre besoin</h2>
			<p class="lg:text-[1.4rem] lg:leading-9 font-ptsans">
				Les enjeux environnementaux et sociaux sont complexes, les attentes des parties prenantes
				sont plurielles, les traductions dans le positionnement marketing, dans l’offre et dans les
				actions de communication sont multiples.Vous avez besoin de donner de l’élan à :
			</p>
			<div class="lg:gap-x-10 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Votre stratégie RSE">
					<ul class="mj-list--disc">
						<li class="mb-2">
							Comment l’ajuster face à l’évolution du contexte et des attentes de vos parties
							prenantes ?
						</li>
						<li class="mb-2">Comment garder un train d’avance ?</li>
						<li class="mb-2">
							Quelles sont les nouvelles obligations légales et comment y répondre ?
						</li>
						<li class="mb-2">
							Comment mieux la structurer pour faciliter l’appropriation interne et la valorisation
							externe ?
						</li>
						<li class="mb-2">
							Comment définir une raison d’être qui vous ressemble et l’incarner ?
						</li>
					</ul>
				</Need>

				<Need title="Votre communication RSE">
					<ul class="mj-list--disc">
						<li class="mb-2">Comment (re)mobiliser vos collaboratrices et collaborateurs ?</li>
						<li class="mb-2">Comment embarquer vos clients (B2B et B2C) et vos partenaires ?</li>
						<li class="mb-2">Comment vous différencier, être créatif et impactant ?</li>
						<li class="mb-2">
							Comment mettre en cohérence les actions de communication et les messages ?
						</li>
						<li class="mb-2">Comment mobiliser vos forces de vente ?</li>
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
			<h2 class="mb-10 text-3xl lg:text-4xl">Nos méthodes et les livrables</h2>
			<Method title="Diagnostic">
				<p class="mb-2">
					Recueillir et analyser les
					<strong>attentes et perceptions de vos parties prenantes</strong>
					(collaborateurs, clients, fournisseurs...). Évaluer votre <strong>politique RSE</strong>
					et votre
					<strong>politique de communication associée</strong>, votre
					<strong>environnement concurrentiel</strong>
				</p>
				<ul class="mj-list--disc">
					<li class="mb-2">Enquête par entretiens ou questionnaire</li>
					<li class="mb-2">Cartographie des parties prenantes</li>
					<li class="mb-2">Benchmark</li>
				</ul>
			</Method>

			<Method title="Stratégie">
				<p class="mb-2">
					Clarifier et prioriser vos
					<strong>enjeux environnementaux, sociaux et économiques</strong>, enrichir vos
					<strong>stratégies RSE, marketing et communication</strong> en cohérence avec le modèle d’affaire
				</p>

				<ul class="mj-list--disc">
					<li class="mb-2">Ateliers de co-construction</li>
					<li class="mb-2">Séminaires de restitution</li>
					<li class="mb-2">Matrice de matérialité</li>
				</ul>
			</Method>

			<Method title="Appropriation">
				<p class="mb-2">
					<strong>Traduire vos engagements</strong> dans tous vos métiers et vos
					<strong>actions de communication</strong>
				</p>

				<ul class="mj-list--disc">
					<li class="mb-2">Argumentaire</li>
					<li class="mb-2">Réseau d’ambassadrices et d’ambassadeurs</li>
					<li class="mb-2">Accompagnement des forces de vente</li>
				</ul>
			</Method>

			<Method title="Livrables">
				<ul class="mj-list--disc">
					<li class="mb-2">Stratégie RSE</li>
					<li class="mb-2">Raison d’être</li>
					<li class="mb-2">Recommandations stratégiques et opérationnelles</li>
					<li class="mb-2">Rapport RSE</li>
					<li class="mb-2">Plan d’action</li>
					<li class="mb-2">Indicateurs</li>
					<li class="mb-2">Kits d’animation interne</li>
					<li class="mb-2">Eléments de langage</li>
				</ul>
			</Method>
		</div>
	</Section>

	{#if data.references.length > 0}
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
	{/if}

	<Section alt={data.references.length > 0}>
		<div
			class="bg-blue-dark font-ptsans rounded-xl text-white flex md:flex-row flex-col gap-8  md:gap-32 p-8"
		>
			<div class="md:w-1/3">
				<h3 class="text-white">Les autres volets de notre offre</h3>
				<p class=" text-white text-2xl">
					J’aide les entreprises et les organisations à répondre aux attentes sociétales et à
					relever les défis de la transition écologique et solidaire grâce à une communication plus
					responsable.
				</p>
			</div>

			<div class="flex md:flex-row justify-center flex-col gap-10">
				<div class="flex items-center flex-col gap-5 ">
					<Icon width="54%" height="auto" name="ladder" />

					<p class="text-sand text-center justify-center  text-2xl">Faire monter en compétences</p>
					<a
						href={ROUTES['Faire monter en compétences']}
						aria-label="Voir l'offre Faire monter en compétences "
						class="text-sand border border-sand block text-center w-3/4 p-2 font-bold hover:bg-sand hover:text-blue-dark hover:boder-sand "
					>
						Voir l'offre
					</a>
				</div>
				<div class="flex flex-col gap-5  items-center">
					<Icon width="60%" height="auto" name="stones" />

					<p class="text-sand text-center text-2xl">Trouver le juste équilibre</p>
					<a
						href={ROUTES['Trouver le juste équilibre']}
						aria-label="Voir l'offre Trouver le juste équilibre"
						class="text-sand border border-sand block text-center w-3/4 p-2 font-bold hover:bg-sand hover:text-blue-dark hover:boder-sand "
					>
						Voir l'offre
					</a>
				</div>
			</div>
		</div>
	</Section>
</main>
