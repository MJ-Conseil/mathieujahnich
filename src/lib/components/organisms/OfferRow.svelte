<script lang>
	import { ROUTES } from '$lib/constants';
	import Offer from '../mollecules/Offer/Offer.svelte';
	import OfferIcon from '../mollecules/OfferIcon/OfferIcon.svelte';
	import Section from '../mollecules/Section/Section.svelte';

	export let alt = false;
</script>

<Section {alt}>
	<h2>Mes offres de services</h2>
	<div class="md:gap-x-20 md:gap-y-10 grid gap-y-12 md:grid-cols-3 pt-8">
		<Offer
			offerName="Donner de l’élan"
			linkTitle="Découvrir l'offre : donner de l'élan"
			offer="Dynamiser les stratégies RSE et la communication des entreprises à travers l’analyse du positionnement et des principaux enjeux environnementaux et sociaux, l’étude de l’environnement concurrentiel, le recueil des attentes des parties-prenantes."
			link={ROUTES["Donner de l'élan"]}
		>
			<OfferIcon iconName="plane" />
		</Offer>

		<Offer
			linkTitle="Découvrir l'offre: Trouver le juste équilibre"
			offerName="Trouver le juste équilibre"
			offer="Analyser les allégations environnementales et sociales des supports marketing et communication en regard du cadre déontologique et réglementaire et mettre en place des filets de sécurité pour limiter les critiques (greenwashing, stéréotypes…)."
			link={ROUTES['Trouver le juste équilibre']}
		>
			<OfferIcon iconName="stones" />
		</Offer>
		<Offer
			linkTitle="Découvrir l'offre : Faire monter en compétences"
			offerName="Faire monter en compétences"
			offer="Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les fonctions marketing, pub, com et toutes leurs interfaces (autres directions, business units, partenaires…), vers des pratiques plus responsables."
			link={ROUTES['Faire monter en compétences']}
		>
			<OfferIcon iconName="ladder" />
		</Offer>
	</div>
</Section>
