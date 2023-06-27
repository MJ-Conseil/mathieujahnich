<script lang>
	import { ROUTES, SIZE } from '$lib/constants';
	import Circle from '../atoms/Circle/Circle.svelte';
	import Icon from '../atoms/Icon/Icon.svelte';
	import Offer from '../mollecules/Offer/Offer.svelte';
	import Section from '../mollecules/Section/Section.svelte';

	export let alt = false;
</script>

<Section {alt}>
	<h2 class="mb-8">Nos offres et services</h2>
	<div class="md:gap-x-20 md:gap-y-10 grid gap-y-12 md:grid-cols-3 pt-8">
		<Offer
			title="Donner de l’élan"
			offer="Dynamiser les stratégies RSE et la communication des entreprises à travers l’analyse du positionnement et des principaux enjeux environnementaux et sociaux, l’étude de l’environnement concurrentiel, le recueil des attentes des parties-prenantes."
			link={ROUTES["Donner de l'élan"]}
		>
			<div aria-hidden="true" class="relative text-blue-dark h-[200px]">
				<Circle size={SIZE.REGULAR} />
				<div class="absolute left-[25px]  md:left-[80px]  top-[40px]">
					<Icon height="150px" width="150px" name="plane" fill="currentColor" />
				</div>
			</div>
		</Offer>

		<Offer
			title="Trouver le juste équilibre"
			offer="Analyser les allégations environnementales et sociales des supports marketing et communication en regard du cadre déontologique et réglementaire et mettre en place des filets de sécurité pour limiter les critiques (greenwashing, stéréotypes…)."
			link={ROUTES['Trouver le juste équilibre']}
		>
			<div aria-hidden="true" class="relative text-blue-dark h-[200px]">
				<Circle size={SIZE.REGULAR} />
				<div class="absolute left-[40px]  md:left-[80px]  top-[30px]">
					<Icon height="150px" width="150px" name="stones" fill="currentColor" />
				</div>
			</div>
		</Offer>
		<Offer
			title="Faire monter en compétences"
			offer="Animer des formations et concevoir des dispositifs pour sensibiliser et accompagner les fonctions marketing, pub, com et toutes leurs interfaces (autres directions, business units, partenaires…), vers des pratiques plus responsables."
			link={ROUTES['Faire monter en compétences']}
		>
			<div aria-hidden="true" class="relative text-blue-dark h-[200px]">
				<Circle size={SIZE.REGULAR} />
				<div class="absolute left-[40px]  md:left-[80px]  top-[30px]">
					<Icon height="150px" width="150px" name="ladder" fill="currentColor" />
				</div>
			</div>
		</Offer>
	</div>
</Section>
