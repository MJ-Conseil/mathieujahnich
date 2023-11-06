<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Method from '$lib/components/mollecules/Offer/Method.svelte';
	import Need from '$lib/components/mollecules/Offer/Need.svelte';
	import ReferenceAccordion from '$lib/components/mollecules/ReferenceAccordion/ReferenceAccordion.svelte';
	import type { PageData } from './$types';
	import slugify from 'slugify';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';
	import OtherOfferRow from '$lib/components/organisms/OtherOfferRow/OtherOfferRow.svelte';
	import { getReferences } from '$lib/repositories/reference';

	export let data: PageData;

	$: references = data.references.data;
	$: meta = data.references.meta;

	let currentPage = 1;

	const handleLoadMoreReferences = async () => {
		currentPage += 1;
		const newResults = (
			await getReferences(fetch, {
				per_page: 4,
				page: currentPage,
				offer_type: data.offerTypeId
			})
		).data;

		references = [...references, ...newResults];
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Offres de services : Prendre de la hauteur</title>
</svelte:head>

<PageHeader>
	<div class="flex items-start space-between">
		<div>
			<p class="text-sand font-bold text-2xl mb-2">Notre offre</p>
			<h1 class="mj-h1--alt">
				{`Trouver le juste équilibre`}
			</h1>

			<p class="text-white text-xl lg:text-3xl mb-4 lg:mb-6">
				<i>Le « crash-test » de vos campagnes RSE</i>
			</p>

			<p class="text-white lg:text-[1.4rem] lg:w-[80%] font-ptsans lg:leading-9">
				Analyser les allégations environnementales et sociales des supports marketing et
				communication pour vérifier leur cohérence avec la stratégie RSE et avec les règles
				déontologiques, mettre en place des filets de sécurité pour limiter les critiques
				(greenwashing et tous les autres “washing”, stéréotypes…).
			</p>
		</div>

		<div aria-hidden="true" class="hidden lg:block text-white mt-[-100px] mb-[20px]">
			<Icon width="279px" height="450px" name="stonesYellow" fill="#ffffff" />
		</div>
	</div>
</PageHeader>

<main class="md:p-0 md:0" id="main-content">
	<Section>
		<div class="h-full md:px-8">
			<h2 class="mb-4 text-3xl lg:text-4xl">Votre besoin</h2>
			<p class="lg:text-[1.4rem] lg:leading-9 font-ptsans">
				Valoriser les atouts environnementaux, sociaux ou sociétaux d’un produit ou service,
				communiquer les engagements, mettre en lumière les équipes… c’est indispensable. Mais
				comment le faire sans être critiqué, sans abîmer la confiance des publics ? Vous avez besoin
				de trouver le juste équilibre sur :
			</p>
			<div class="lg:gap-x-10 lg:gap-y-10 grid gap-y-2.5 lg:grid-cols-2 my-6">
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
				class="absolute h-full w-11/12 left-0 md:flex justify-center items-center hidden lg:flex"
			>
				<Icon width="100%" height="75%" name="curve" fill="none" />
			</div>
			<h2 class="my-8 text-3xl lg:text-4xl">Nos méthodes et les résultats</h2>
			<Method title="Analyse et recommandations">
				<ul class="mj-list--disc">
					<li class="mb-2">
						<strong>Identifier les allégations qui pourraient prêter à confusion</strong>, être
						mal-interprétées ou susciter des réactions négatives (greenwashing, stéréotypes)
					</li>
					<li class="mb-2">
						Sélectionner les <strong>éléments de preuve à avancer</strong> et/ou des pistes de
						<strong>reformulation</strong>
					</li>
					<li class="mb-2">
						Décrypter le <strong>cadre déontologique et réglementaire</strong> et le contexte social
					</li>
					<li class="mb-2">
						<strong>Clarifier les atouts</strong> d’un produit/service
					</li>
				</ul>
			</Method>

			<Method title="Tous types de supports">
				<ul class="mj-list--disc">
					<li class="mb-2">
						Campagne de publicité, contenus web, vidéo, PLV, packaging, dossier de presse, réseaux
						sociaux, fiche produit, argumentaire de vente, éléments de langage DG, outils de
						communication interne…
					</li>
					<li class="mb-2">Analyse des contenus textuels et visuels</li>
					<li class="mb-2">Niveau groupe, business units, marchés, produits…</li>
				</ul>
			</Method>

			<Method title="Modalités">
				<p class="mb-2">
					Nous ajustons les modalités de notre intervention à vos besoins et au caractère d’urgence
					de votre demande.
				</p>
				<ul class="mj-list--disc">
					<li class="mb-2">
						Analyse plusieurs semaines <strong>avant votre campagne</strong> : messages clés, posture
						de communication, brief agence…
					</li>
					<li class="mb-2">
						Analyse en <strong>cas d’urgence</strong>, quelques jours avant la publication ou la
						remise au client : communiqué de presse, nouveau site web, idée créative, story board…
					</li>
					<li class="mb-2">
						Nous adoptons une <strong>posture critique</strong> (“sans filtre”)
						<strong>et constructive</strong>
					</li>
					<li class="mb-2">
						Nous facturons <strong>à l’heure</strong> : vous ne payez que le temps effectif d’analyse
					</li>
				</ul>
			</Method>

			<Method title="Résultats">
				<ul class="mj-list--disc">
					<li class="mb-2">Améliorer immédiatement vos éléments de communication</li>
					<li class="mb-2">Sécuriser vos prises de parole et vous redonner confiance</li>
					<li class="mb-2">
						Susciter des discussions (entre les équipes RSE, R&D, innovation, com, marketing,
						juridique…) et faire progresser certains sujets en interne
					</li>
					<li class="mb-2">
						Identifier des pistes d’amélioration à plus long terme, sur la posture de communication,
						la stratégie RSE, votre offre, la stratégie d’entreprise…
					</li>
				</ul>
			</Method>
		</div>
	</Section>

	{#if references.length > 0}
		<Section>
			<h2>Missions récentes</h2>
			<div class="mt-8 flex flex-col gap-5">
				{#each references as reference}
					<ReferenceAccordion
						id={slugify(reference.title)}
						content={reference.content}
						imageUrl={reference.imageUrl}
						title={reference.title}
					/>
				{/each}
			</div>

			{#if currentPage < meta.pageCount}
				<div class="w-full mt-8 flex items-center justify-center">
					<button on:click={handleLoadMoreReferences} class="bg-indigo rounded text-white p-3"
						>Afficher plus de réfétences
					</button>
				</div>{/if}
		</Section>
	{/if}

	<Section alt={references.length > 0}>
		<OtherOfferRow>
			<div class="md:w-1/3">
				<h3 class="text-white mt-0">Nos autres offres</h3>
				<p class=" text-white text-2xl">
					Nous mettons la communication au service de la transition écologique.
				</p>
			</div>

			<div class="flex md:flex-row justify-center flex-col gap-10">
				<div class="flex flex-col gap-5 items-center">
					<Icon width="50%" height="auto" name="ladder" />

					<p class="text-sand text-center text-2xl">Faire monter en compétences</p>
					<a
						href={ROUTES['Faire monter en compétences']}
						aria-label="Voir l'offre Faire monter en compétences"
						class="text-sand border border-sand block text-center w-3/4 p-2 font-bold hover:bg-sand hover:text-blue-dark hover:boder-sand"
					>
						Voir l'offre
					</a>
				</div>
				<div class="flex items-center flex-col gap-5">
					<Icon width="50%" height="auto" name="plane" />

					<p class="text-sand text-center justify-center text-2xl">Donner de l'élan</p>
					<a
						href={ROUTES["Donner de l'élan"]}
						aria-label="Voir l'offre Donner de l'élan"
						class="text-sand border border-sand block text-center w-3/4 p-2 font-bold hover:bg-sand hover:text-blue-dark hover:boder-sand"
					>
						Voir l'offre
					</a>
				</div>
			</div>
		</OtherOfferRow>
	</Section>
</main>
