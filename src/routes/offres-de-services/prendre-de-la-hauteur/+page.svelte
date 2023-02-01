<script>
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import Method from '$lib/components/mollecules/Offer/Method.svelte';
	import Need from '$lib/components/mollecules/Offer/Need.svelte';
</script>

<svelte:head>
	<title>MJ Conseil - Offres de services : Prendre de la hauteur</title>
</svelte:head>

<div class="w-full px-4 py-8 relative bg-blue-dark">
	<div class="container md:pb-8 md:px-8 md:mx-auto">
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="md:w-[40%] flex flex-col gap-4  break-words overflow-visible  ">
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
</div>

<main class="md:p-0 md:0" id="main">
	<section class="md:p-0 md:py-12 p-4">
		<div class="container h-full md:px-8">
			<h2 class="my-8">Votre besoin</h2>
			<p>J’ai besoin de prendre de la hauteur et d’agir sur :</p>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-5 lg:grid-cols-2 my-6">
				<Need
					title="Ma stratégie RSE"
					contents={[
						'Comment l’ajuster face à l’évolution du contexte et des attentes de mes parties prenantes ?',
						'Quelles sont les nouvelles obligations légales et comment y répondre ?',
						'Comment mieux la structurer pour faciliter l’appropriation interne et la valorisation externe ?',
						'Comment définir une raison d’être qui nous ressemble et l’incarner ? '
					]}
				/>
				<Need
					title="Ma communication RSE"
					contents={[
						'Comment (re)mobiliser mes collaboratrices et collaborateurs ?',
						'Comment embarquer mes clients (B2B et B2C) et mes partenaires ?',
						'Comment me différencier, être créatif et impactant ?',
						'Comment mettre en cohérence les actions de communication et les messages ?',
						'Comment mobiliser les forces de vente ?'
					]}
				/>
			</div>
		</div>
	</section>
	<section class="bg-gray md:p-0 md:py-12 p-4">
		<div class="container h-full md:px-8">
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
	</section>
</main>
