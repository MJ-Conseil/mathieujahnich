<script lang="ts">
	import { ROUTES } from '$lib/constants';
	import Icon from '../atoms/Icon/Icon.svelte';
	import ExclusiveContent from '../mollecules/ExclusiveContent/ExclusiveContent.svelte';
	import Section from '../mollecules/Section/Section.svelte';
	import greenwashingCasesLogo from '$lib/assets/pictures/greenwashing-cases-logo.jpg';
	import greenwashingNewsLogo from '$lib/assets/pictures/greenwashing-news-logo.jpg';

	export let alt = false;
</script>

<Section {alt}>
	<h2>Contenus exclusifs</h2>
	<div class="md:gap-x-20 md:gap-y-10 grid gap-y-12 md:grid-cols-3 pt-8">
		<ExclusiveContent
			title="Newsletter MJ Conseil"
			linkTitle="Abonnez-vous à la lettre d'information"
			content="Relier les enjeux de soutenabilité aux pratiques communication et marketing."
			link={ROUTES['Newsletter']}
			linkContent="Abonnez-vous"
		>
			<div aria-hidden="true" class=" h-full w-full text-blue-dark flex justify-center bg-white p-10">
				<Icon
					role="img"
					ariaLabel="MJ Communication &
transition écologique"
					height="100%"
					width="auto"
					name="mjConseilFull"
					id="mainLogo"
				/>
			</div>
		</ExclusiveContent>

		<ExclusiveContent
			title="Greenwashing News"
			linkTitle="Découvrir les Greenwashing news"
			content="Veille sur la lutte contre le greenwashing, exemples à éviter et pratiques inspirantes."
			link={"/blog/greenwashing-news-une-newsletter-dediee-au-greenwashing"}
			linkContent="Consultez les articles"
		>
			<div aria-hidden="true" class=" text-blue-dark flex justify-center">
				<img src={greenwashingNewsLogo} height="30px" aria-hidden="true" alt="" />
			</div>
		</ExclusiveContent>

	<ExclusiveContent
			title="Greenwashing Cases"
			linkTitle="Découvrir les Greenwashing cases (en anglais)"
			content="Principales décisions de justice ou affaires en cours liées à la lutte contre le greenwashing. "
			link={ROUTES["Greenwashing cases"]}
			linkContent="Découvrez les cas"
		>
			<div aria-hidden="true" class=" text-blue-dark flex justify-center">
				<img src={greenwashingCasesLogo} height="30px" aria-hidden="true" alt="" />
			</div>
		</ExclusiveContent>
	</div>
</Section>
