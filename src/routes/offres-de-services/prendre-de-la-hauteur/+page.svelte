<script lang="ts">
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Method from '$lib/components/mollecules/Offer/Method.svelte';
	import Need from '$lib/components/mollecules/Offer/Need.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME } from '$lib/constants';
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
			<h1 class="mj-h1--alt font-bold text">Prendre de la hauteur</h1>

			<p class="text-white">
				Enrichir et optimiser les stratégies RSE et la communication des entreprises à travers
				l’analyse du positionnement et des principaux enjeux environnementaux et sociaux, l’étude de
				l’environnement concurrentiel, le recueil et l’analyse des perceptions et des attentes des
				parties-prenantes internes et externes.
			</p>
		</header>
	</div>
	<div
		aria-hidden="true"
		class="lg:block lg:absolute lg:-top-14 right-40 justify-center hidden text-white "
	>
		<Icon width="30rem" height="100%" name="ladder" fill="#ffffff" />
	</div>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8">Votre besoin</h2>
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
		<div class="h-full md:px-8">
			<h2 class="my-8">Nos méthodes</h2>
			<div class="md:grid md:grid-cols-5 gap-4">
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
			</div>
		</div>
	</Section>

	<Section alt>
		<div class="bg-white rounded-xl relative  p-6 my-10">
			<div>
				<div class=" absolute top-6 left-6">
					<Circle size="small" />
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
	</Section>
</main>
