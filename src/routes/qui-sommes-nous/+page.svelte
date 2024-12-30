<script>
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import mjnb from '$lib/assets/pictures/mj-nb.jpg';
	import mathieuPicture from '$lib/assets/pictures/MJConseil-mathieu-jahnich.jpg';
	import OfferRow from '$lib/components/organisms/OfferRow.svelte';
	import { SITE_WEB_NAME, SIZE } from '$lib/constants';
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - À propos</title>
</svelte:head>

<header class="py-8 bg-blue-dark">
	<Container>
		<p class="text-sand text-xl font-bold">Mathieu Jahnich</p>
		<h1 class="mj-h1--alt">À propos</h1>
		<Headline>
			Mes thèmes de prédilection : communication responsable, communication RSE, lutte contre le
			greenwashing et les stéréotypes.
		</Headline>
	</Container>
</header>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="md:p-0 md:0" id="main-content">
	<Section>
		<h2 class="">Mathieu Jahnich</h2>

		<div class="md:flex flex-col gap-6">
			<div class="flex flex-col md:flex-row gap-8">
				<img src={mathieuPicture} class="object-contain rounded-xl" alt="" />
				<div>
					<div class="flex items-center mb-3">
						<Circle size={SIZE.SMALL} />
						<h3 class="mj-h4 m-0 pl-3 md:w-full w-3/4">Consultant-chercheur indépendant</h3>
					</div>

					<p>
						Depuis plus de vingt-cinq ans, j’explore et j’analyse les enjeux communication des
						organisations, en particulier dans les domaines de l'environnement et de la
						responsabilité sociétale.J’aide les entreprises et les organisations à répondre aux
						attentes sociétales et à relever les défis de la transition écologique et solidaire
						grâce à une communication plus responsable.
					</p>

					<p class=" py-9 flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
						<a
							title="Linkedin Mathieu Jahnich"
							class="hover:decoration-sand underline hover:decoration-2 flex gap-3"
							href="https://www.linkedin.com/in/mathieujahnich/"
						>
							<span aria-hidden="true">
								<Icon name="linkedin" width="30px" height="auto" class="text-sand" /></span
							>
							LinkedIn
						</a>

						<a
							title="Contacter Mathieu Jahnich : conseil@mathieu-jahnich.fr"
							class="hover:decoration-sand underline hover:decoration-2 flex gap-3"
							href="mailto:conseil[@]conseil@mathieu-jahnich.fr"
						>
							<span aria-hidden="true">
								<Icon name="letter" width="30px" height="auto" class="text-sand" /></span
							>
							conseil@mathieu-jahnich.fr
						</a>
					</p>
				</div>
			</div>

			<h3>De la recherche à l’action</h3>

			<ul class="list-disc">
				<li>
					Formation initiale à l'<span class="font-bold">ENS Paris-Saclay </span>en sciences pour
					l'ingénieur jusqu’à l’agrégation de mécanique.
				</li>
				<li>
					<span class="font-bold">Thèse de doctorat </span>en communication des sciences et de
					l’environnement suivie de deux années de post-doctorat.
				</li>
				<li>Sept années en tant que communicant dans des organismes de recherche.</li>
				<li>
					Quatre années à la tête de la Direction de la formation continue et des relations
					entreprises de l’Université Versailles Saint-Quentin-en-Yvelines.
				</li>
				<li>
					Plus de vingt ans d’expérience en <span class="font-bold">
						enseignement et pilotage de formations
					</span>académiques et professionnelles en communication.
				</li>
				<li>
					Depuis plus de dix ans dans le secteur du conseil aux entreprises et aux organisations, à
					l’<span class="font-bold"
						>interface entre les enjeux de communication et de soutenabilité.</span
					>
				</li>
			</ul>

			<h3>Les missions d’expertise pour l’ADEME</h3>

			Je travaille étroitement avec Valérie MARTIN, Cheffe du service Mobilisation citoyenne et
			Médias de l’ADEME. Voici les principales missions réalisées :

			<ul class="list-disc">
				<li>
					Rédaction du <span class="italic"
						>Guide ADEME de la communication responsable (2020, 2022)</span
					>
				</li>
				<li>Rédaction du <span class="italic">Guide ADEME anti-greenwashing (2025</span>)</li>
				<li>
					Appui à la réalisation des <span class="italic">
						Bilans publicité et environnement ARPP-ADEME (2015, 2017, 2019, 2021, 2023, 2024)</span
					>
				</li>
				<li>
					Appui à la rédaction de l’avis d’experts <span class="italic">
						Utilisation de l’argument de « neutralité carbone » dans les communications (2022)</span
					>
				</li>
				<li>
					Appui à l’organisation d’événements de sensibilisation à la communication responsable pour
					les acteurs territoriaux (depuis 2020)
				</li>
			</ul>

			<h3>Born in 331 PPM</h3>
			<div class="w-full">
				<img src={mjnb} class="object-contain rounded-xl" alt="" />
			</div>

			<p>Je suis né en 1975 = 331 ppm</p>

			<p>
				Prendre conscience de l'urgence climatique et écologique, c'est recevoir un violent coup
				dans le ventre. Il faut l'encaisser. Il faut regarder les enjeux et les répercussions en
				face, en France et ailleurs, dès maintenant et demain. Il faut chercher les ressources en
				soi et auprès de son entourage pour se redresser, faire face et avancer. Pour bifurquer à
				l’échelle individuelle et peser autant que possible sur le collectif.
			</p>

			<p>
				Et pour une marque ? Ne pas faire l’autruche, interroger la pertinence de son modèle
				d’affaires en regard des limites planétaires et du plancher social, définir une trajectoire
				de transformation. Et mettre la communication au service de l’écoute et du dialogue avec les
				parties prenantes internes et externes pour accompagner le changement, avec sincérité et
				humilité.
			</p>

			<hr />

			<p>Merci Mary-Lou MAURICIO pour la photo et le temps d'échange le 27 novembre 2023.</p>

			<p>
				« BORN IN ... PPM est une série de portraits <a href="https://borninppm.com">
					à découvrir sur borninppm.com
				</a>Les participant·es posent avec le taux de concentration en CO2 (exprimée en PPM, parties
				par million) de leur année de naissance en signe de mobilisation contre la combustion des
				énergies fossiles toujours plus grandissante et pour dénoncer l'injustice climatique. »
			</p>

			<h3>Focus sur les années 2023 et 2024</h3>

			<p>
				Pendant deux années, <span class="font-bold">Sandrine CADIC</span> et
				<span class="font-bold">Aurélie WASTIN </span> étaient salariées de mon entreprise. Toutes* les
				trois, nous avons mis nos expertises complémentaires en RSE et en communication, notre complicité
				et notre bienveillance au service de plusieurs organisations : Centre Juno Beach, Assurance Maladie,
				CDC Habitat, Groupe CDC, Stardust Group et d’autres.
			</p>
			<ul class="list-disc flex flex-col gap-3 text-blue-dark">
				<li>
					<span class="font-bold">Sandrine CADIC</span>. Experte des sujets RSE et des questions de
					reporting extra-financier, forte de près de vingt ans d’expérience, Sandrine accompagne
					les organisations dans leur démarche responsable et le déploiement de leur stratégie RSE.
					Elle a à cœur de lier stratégie RSE et communication responsable afin de favoriser
					l’engagement de l’ensemble des parties prenantes et assurer la cohérence et la crédibilité
					entre action et communication.

					<div class="flex gap-4 my-2">
						<a
							title="LinkedIn Sandrine Cadic (vers site externe)"
							class="underline flex gap-2"
							target="_blank"
							href="https://www.linkedin.com/in/aur%C3%A9lie-wastin-8683a649/"
						>
							LinkedIn <Icon name="external" />
						</a>
						|
						<a
							title="Contacter Sandrine Cadic : scadic@yahoo.com"
							class="underline"
							href="mailto:scadic[@]yahoo.com"
						>
							Email
						</a>
					</div>
				</li>

				<li>
					<span class="font-bold">Aurélie WASTIN </span> Depuis près de vingt ans, Aurélie travaille
					sur la question des engagements RSE des organisations, leur traduction dans une stratégie
					de communication responsable et la mise en œuvre opérationnelle au sein des métiers des
					communicants, pour soutenir et animer les transformations. Elle accompagne les porteurs de
					projets et les équipes avec patience, nuance, bienveillance et enthousiasme pour faciliter
					le passage à l'action dans leur contexte. Je la solliciterai en tant qu'indépendante selon
					la nature des projets qui me sont confiés.

					<div class="flex gap-4 my-2">
						<a
							title="LinkedIn Aurélie Wastin (vers site externe)"
							target="_blank"
							class="underline flex gap-2"
							href="https://www.linkedin.com/in/aurelie-wastin-8683a649/"
						>
							LinkedIn <Icon name="external" />
						</a>
						|
						<a
							title="Contacter Aurélie Wastin : aurelie.wastin@gmail.com"
							class="underline flex gap-2"
							href="mailto:aurelie.wastin[@]gmail.com"
						>
							Email
						</a>
					</div>
				</li>
			</ul>

			<p>
				Retrouvez leur témoignage sur mon blog : <a
					href="https://mathieu-jahnich.fr/blog/aurelie-wastin-et-sandrine-cadic-la-rencontre-dequilibristes-pour-reconcilier-la-communication-et-la-rse"
					>« Aurélie Wastin et Sandrine Cadic : la rencontre d’équilibristes pour réconcilier
					communication et RSE »</a
				> .
			</p>

			<p>* Le féminin l’emporte sur le masculin.</p>
		</div>
	</Section>

	<OfferRow alt />
</main>
