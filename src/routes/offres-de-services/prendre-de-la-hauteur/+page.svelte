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

<div class="w-full px-4 py-8 pb-14 relative bg-blue-dark">
	<Container>
		<div class="lg:pb-8 lg:px-8 flex justify-between align-start">
			<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
			<header role="banner" class="flex-1 break-words overflow-visible">
				<p class="text-sand font-bold mb-2">Notre offre</p>
				<h1 class="mj-h1--alt font-bold text text-4xl lg:text-6xl mb-4 lg:mb-8">
					{`Faire monter en compétences`}
				</h1>
				<p class="text-white text-xl lg:text-2xl mb-4 lg:mb-6"><i>Former pour transformer</i></p>

				<p class="text-white lg:text-lg lg:w-[80%]">
					Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les
					fonctions marketing, publicité, communication et toutes leurs interfaces (autres
					directions, business units, partenaires…) vers des pratiques plus responsables.
				</p>
			</header>
			<div aria-hidden="true" class="hidden lg:block text-white mt-[-80px]">
				<Icon width="279px" height="450px" name="ladderService" fill="#ffffff" />
			</div>
		</div>
	</Container>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="my-8 text-3xl lg:text-4xl">Votre besoin</h2>
			<p class="lg:text-lg">
				Afin de mettre en cohérence votre activité avec les enjeux de soutenabilité, il est
				nécessaire de déclencher la prise de conscience et de transformer les pratiques
				professionnelles. Vous avez besoin de faire monter en compétences :
			</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need title="Vos équipes marketing et communication">
					<ul class="mj-list--disc">
						<li class="mb-2 lg:text-lg">
							Quels sont les enjeux écologiques et la responsabilité du marketing, de la publicité,
							de la communication ?
						</li>
						<li class="mb-2 lg:text-lg">
							Marketing, publicité et communication plus responsables : de quoi s’agit-il ?
						</li>
						<li class="mb-2 lg:text-lg">
							Comment donner l’envie et les moyens de s’engager encore davantage ?
						</li>
						<li class="mb-2 lg:text-lg">
							Comment maintenir dans le temps un haut niveau de vigilance et de motivation ?
						</li>
					</ul>
				</Need>

				<Need title="L’ensemble de vos salarié·es">
					<ul class="mj-list--disc">
						<li class="mb-2 lg:text-lg">
							Comment mettre en perspective la stratégie RSE avec les enjeux écologiques ?
						</li>
						<li class="mb-2 lg:text-lg">
							Peut-on faciliter l’intégration et la mobilisation à l’échelle individuelle et
							collective ?
						</li>
						<li class="mb-2 lg:text-lg">Comment impliquer davantage les ambassadeurs ?</li>
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
					<li class="mb-2 lg:text-lg">
						<strong>Conférence de sensibilisation</strong> (1h30 - en présentiel ou en visio - en live
						et replay)
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Formation et ateliers de mise en pratique</strong> (de 3 heures à 3 jours)
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Modalités pédagogiques variées</strong> : séquences descendantes, travaux en sous-groupes,
						restitutions, quiz, cas pratiques…
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>En français ou en anglais</strong>
					</li>
				</ul>
			</Method>

			<Method title="Des contenus sur-mesure">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">
						Questionnaire amont d’expression des <strong>attentes</strong>, d’identification de
						bonnes pratiques et des <strong>difficultés rencontrées</strong>
					</li>
					<li class="mb-2 lg:text-lg">
						De nombreux <strong>cas pratiques</strong> tirés de votre secteur d’activité
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Validation des supports pédagogiques</strong> avant la formation
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Questionnaire</strong> aval d’évaluation de la formation
					</li>
				</ul>
			</Method>

			<Method title="Co-construction d’outils pratiques">
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">
						<strong>Guidelines</strong> communication environnementale
					</li>
					<li class="mb-2 lg:text-lg">
						Guide <strong>anti-greenwashing</strong>
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Chartes et check-lists</strong> communication responsable
					</li>
					<li class="mb-2 lg:text-lg">
						<strong>Grille de positionnement</strong> responsable de vos offres
					</li>
				</ul>
			</Method>

			<Method title="Des formations certifiées Qualiopi">
				<p class="mb-2 lg:text-lg">
					MJ Conseil est un <strong>organisme de formation enregistré</strong> sous le numéro 11770795177
					auprès du préfet de région d'Île-de-France et certifié Qualiopi depuis janvier 2023 au titre
					de la catégorie suivante : Actions de formation « Master Class »
				</p>
				<ul class="mj-list--disc">
					<li class="mb-2 lg:text-lg">Exonération de TVA.</li>
					<li class="mb-2 lg:text-lg">Possibilité de prise en charge financière par votre OPCO.</li>
					<li class="mb-2 lg:text-lg">Adaptation des modalités et des contenus à vos besoins.</li>
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
