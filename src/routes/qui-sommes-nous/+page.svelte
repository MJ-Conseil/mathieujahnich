<script>
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import sandrinePicture from '$lib/assets/pictures/MJConseil-sandrine-cadic.jpg';
	import aureliePicture from '$lib/assets/pictures/MJConseil-aurelie-wastin.jpg';
	import mathieuPicture from '$lib/assets/pictures/MJConseil-mathieu-jahnich.jpg';
	import OfferRow from '$lib/components/organisms/OfferRow.svelte';
	import { SITE_WEB_NAME, SIZE } from '$lib/constants';
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Qui sommes nous ?</title>
</svelte:head>

<header class="py-8 bg-blue-dark">
	<Container>
		<p class="text-sand text-xl font-bold">MJ Conseil</p>
		<h1 class="mj-h1--alt">Qui sommes nous ?</h1>
		<Headline>
			MJ Conseil est un trio d’expertes en RSE et communication capables de vous aider de la
			définition de votre stratégie à la mise en place opérationnelle.
		</Headline>
	</Container>
</header>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="md:p-0 md:0" id="main-content">
	<Section>
		<h2 class="">Un trio d'expertes</h2>

		<div class="md:flex flex-col gap-6">
			<div class="flex flex-col md:flex-row gap-8">
				<img src={sandrinePicture} class="object-contain rounded-xl" alt="" />
				<div>
					<div class="flex items-center mb-3">
						<Circle size={SIZE.SMALL} />
						<h3 class="mj-h4 m-0 pl-3 md:w-full w-3/4">Sandrine CADIC, directrice conseil RSE</h3>
					</div>
					<p>
						Experte des sujets RSE et des questions de reporting extra-financier, forte de près de
						vingt ans d’expérience, Sandrine accompagne les organisations dans leur démarche
						responsable et le déploiement de leur stratégie RSE. Elle a à cœur de lier stratégie RSE
						et communication responsable afin de favoriser l’engagement de l’ensemble des parties
						prenantes et assurer la cohérence et la crédibilité entre action et communication.
					</p>

					<p class=" py-9 flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
						<a
							title="LinkedIn Sandrine Cadic"
							class="hover:decoration-sand underline underline-offset-8 hover:decoration-2 flex gap-3"
							href="https://www.linkedin.com/in/sandrinecadic/"
						>
							<span aria-hidden="true">
								<Icon name="linkedin" width="30px" height="auto" class="text-sand" /></span
							>
							LinkedIn
						</a>

						<a
							title="Contacter Sandrine Cadic : sandrine@team-mjconseil.fr"
							class="hover:decoration-sand underline underline-offset-8 hover:decoration-2 flex gap-3"
							href="mailto:sandrine[@]team-mjconseil.fr"
						>
							<span aria-hidden="true">
								<Icon name="letter" width="30px" height="auto" class="text-sand" /></span
							>
							sandrine@team-mjconseil.fr
						</a>
					</p>
				</div>
				<p />
			</div>

			<div class="flex flex-col md:flex-row gap-8">
				<img src={aureliePicture} class="object-contain rounded-xl" alt="" />
				<div>
					<div class="flex items-center mb-3">
						<Circle size={SIZE.SMALL} />
						<h3 class="mj-h4 m-0 pl-3 md:w-full w-3/4">
							Aurélie WASTIN, directrice conseil communication
						</h3>
					</div>

					<p>
						Depuis près de vingt ans, Aurélie travaille sur la question des engagements RSE des
						organisations, leur traduction dans une stratégie de communication responsable et la
						mise en œuvre opérationnelle au sein des métiers des communicants, pour faciliter,
						soutenir et animer les transformations. Son crédo ? Patience, nuance, bienveillance et
						enthousiasme pour donner envie de passer à l’action.
					</p>

					<p class=" py-9 flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
						<a
							title="Contacter Aurélie Wastin : aurelie@team-mjconseil.fr"
							class="hover:decoration-sand underline underline-offset-8 hover:decoration-2 flex gap-3"
							href="mailto:aurelie[@]team-mjconseil.fr"
						>
							<span aria-hidden="true">
								<Icon name="letter" width="30px" height="auto" class="text-sand" /></span
							>
							aurelie@team-mjconseil.fr
						</a>
					</p>
				</div>
				<p />
			</div>

			<div class="flex flex-col md:flex-row gap-8">
				<img src={mathieuPicture} class="object-contain rounded-xl" alt="" />
				<div>
					<div class="flex items-center mb-3">
						<Circle size={SIZE.SMALL} />
						<h3 class="mj-h4 m-0 pl-3 md:w-full w-3/4">
							Mathieu JAHNICH, consultant-chercheur et gérant
						</h3>
					</div>

					<p>
						Depuis plus de vingt ans, Mathieu explore et analyse les enjeux communication des
						organisations, en particulier dans les domaines de l'environnement et de la
						responsabilité sociétale. Communication responsable, communication RSE, lutte contre le
						greenwashing et les stéréotypes sont ses thèmes de prédilection qu'il aborde avec une
						posture « de la recherche à l'action ».
					</p>

					<p class=" py-9 flex md:flex-row flex-col md:items-center md:gap-6 gap-3">
						<a
							title="Linkedin Mathieu Jahnich"
							class="hover:decoration-sand underline underline-offset-8 hover:decoration-2 flex gap-3"
							href="https://www.linkedin.com/in/mathieujahnich/"
						>
							<span aria-hidden="true">
								<Icon name="linkedin" width="30px" height="auto" class="text-sand" /></span
							>
							LinkedIn
						</a>

						<a
							title="Contacter Mathieu Jahnich : mathieu@team-mjconseil.fr"
							class="hover:decoration-sand hover:underline underline-offset-8 decoration-2 flex gap-3"
							href="mailto:mathieu[@]team-mjconseil.fr"
						>
							<span aria-hidden="true">
								<Icon name="letter" width="30px" height="auto" class="text-sand" /></span
							>
							mathieu@team-mjconseil.fr
						</a>
					</p>
				</div>
			</div>
		</div>
	</Section>

	<OfferRow alt />
</main>
