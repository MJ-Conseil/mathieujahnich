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
	import { SIZE } from '$lib/constants';

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
					Faire monter en compétences
				</h1>
				<p class="text-white text-xl lg:text-2xl mb-4 lg:mb-6"><i>Former pour transformer</i></p>

				<p class="text-white lg:w-[80%] xl:w-[60%]">
					Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les
					fonctions marketing, publicité, communication et toutes leurs interfaces (autres
					directions, business units, partenaires…) vers des pratiques plus responsables.
				</p>
			</header>
			<div aria-hidden="true" class="hidden lg:block text-white mt-[-80px]">
				<Icon width="279px" height="450px" name="ladder" fill="#ffffff" />
			</div>
		</div>
	</Container>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8 text-3xl lg:text-4xl">Votre besoin</h2>
			<p>J’ai besoin de prendre de la hauteur et d’agir sur :</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Ma stratégie RSE">
					<ul class="mj-list--disc">
						<li>
							Comment l’ajuster face à l’évolution du contexte et des attentes de mes parties
							prenantes ?
						</li>
						<li>Quelles sont les nouvelles obligations légales et comment y répondre ?</li>

						<li>
							Comment mieux la structurer pour faciliter l’appropriation interne et la valorisation
							externe ?
						</li>
						<li>Comment définir une raison d’être qui nous ressemble et l’incarner ?</li>
					</ul>
				</Need>

				<Need title="Ma stratégie RSE">
					<ul class="mj-list--disc">
						<li>Comment (re)mobiliser mes collaboratrices et collaborateurs ?</li>
						<li>Quelles sont les nouvelles obligations légales et comment y répondre ?</li>

						<li>Comment mettre en cohérence les actions de communication et les messages ?</li>
						<li>Comment mobiliser les forces de vente ?</li>
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
			<h2 class="my-8 text-3xl lg:text-4xl">Nos prestations</h2>
			<Method title="Des formats adaptés à vos publics">
				<ul class="mj-list--disc">
					<li class="lg:leading-8">
						<strong>Conférence de sensibilisation</strong> (1h30 - en présentiel ou en visio - en live
						et replay)
					</li>
					<li class="lg:leading-8">
						<strong>Formation et ateliers de mise en pratique</strong> (de 3 heures à 3 jours)
					</li>
					<li class="lg:leading-8">
						<strong>Modalités pédagogiques variées</strong> : séquences descendantes, travaux en sous-groupes,
						restitutions, quiz, cas pratiques…
					</li>
					<li class="lg:leading-8">
						<strong>En français ou en anglais</strong>
					</li>
				</ul>
			</Method>

			<Method title="Des contenus sur-mesure">
				<ul class="mj-list--disc">
					<li class="lg:leading-8">
						Questionnaire amont d’expression des <strong>attentes</strong>, d’identification de
						bonnes pratiques et des <strong>difficultés rencontrées</strong>
					</li>
					<li class="lg:leading-8">
						De nombreux <strong>cas pratiques</strong> tirés de votre secteur d’activité
					</li>
					<li class="lg:leading-8">
						<strong>Validation des supports pédagogiques</strong> avant la formation
					</li>
					<li class="lg:leading-8">
						<strong>Questionnaire</strong> aval d’évaluation de la formation
					</li>
				</ul>
			</Method>

			<Method title="Co-construction d’outils pratiques">
				<ul class="mj-list--disc">
					<li class="lg:leading-8">
						<strong>Guidelines</strong> communication environnementale
					</li>
					<li class="lg:leading-8">
						Guide <strong>anti-greenwashing</strong>
					</li>
					<li class="lg:leading-8">
						<strong>Chartes et check-lists</strong> communication responsable
					</li>
					<li class="lg:leading-8">
						<strong>Grille de positionnement</strong> responsable de vos offres
					</li>
				</ul>
			</Method>

			<Method title="Des formations certifiées Qualiopi">
				<p>
					MJ Conseil est un <strong>organisme de formation enregistré</strong> sous le numéro 11770795177
					auprès du préfet de région d'Île-de-France et certifié Qualiopi depuis janvier 2023 au titre
					de la catégorie suivante : Actions de formation « Master Class »
				</p>
				<ul class="mj-list--disc">
					<li class="lg:leading-8">Exonération de TVA.</li>
					<li class="lg:leading-8">Possibilité de prise en charge financière par votre OPCO.</li>
					<li class="lg:leading-8">Adaptation des modalités et des contenus à vos besoins.</li>
				</ul>
			</Method>

			<!-- <div class="md:grid md:grid-cols-5 gap-4">
				<div class="col-span-3">
					<Method
						title="Diagnostic"
						paragraph="Recueillir et analyser les attentes et perceptions de vos parties prenantes (collaborateurs, clients, fournisseurs...). Evaluer votre politique RSE et votre politique de communication associée, votre environnement concurrentiel"
						contents={[
							'Enquête par entretiens ou questionnaire',
							'Cartographie des parties prenantes',
							'Benchmark'
						]}
					/>
				</div>
				<div class="col-start-3 col-end-6">
					<Method
						title="Stratégie"
						paragraph="Clarifier et prioriser vos enjeux environnementaux, sociaux et économiques, enrichir vos stratégies RSE et Marketing en cohérence avec le modèle d’affaire"
						contents={[
							'Ateliers de co-construction',
							'Séminaires de restitution',
							'Matrice de matérialité'
						]}
					/>
				</div>
				<div class="col-span-3">
					<Method
						title="Mobilisation et communication"
						paragraph="Traduire vos engagements dans tous vos métiers et vos actions de communication"
						contents={[
							'Argumentaire',
							'Réseau d’ambassadrices et d’ambassadeurs',
							'Accompagnement des forces de vente'
						]}
					/>
				</div>
			</div> -->
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
