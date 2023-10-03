<script>
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';

	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Références</title>
</svelte:head>

<PageHeader>
	<h1 class="mj-h1--alt">Plan de site</h1>
</PageHeader>

<main class="mt-8 mb-12" id="main-content">
	<Section>
		<nav aria-label="site-map">
			<h3 class="mj-h4--alt">MJ Conseil</h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link" href={ROUTES.Accueil}>Accueil</a>
				</li>
				<li>
					<a class="mj-link" href={ROUTES['Qui sommes nous ?']}>Qui sommes-nous ?</a>
				</li>
				<li class="text-indigo">
					Notre offre :
					<ul class="flex flex-col pl-8 mt-2 list-disc text-blue-dark">
						<li>
							<a class="mj-link" href={ROUTES["Donner de l'élan"]}>Donner de l'élan</a>
						</li>
						<li>
							<a class="mj-link visited:underline" href={ROUTES['Trouver le juste équilibre']}
								>Trouver le juste équilibre</a
							>
						</li>
						<li>
							<a class="mj-link visited:underline" href={ROUTES['Faire monter en compétences']}
								>Faire monter en compétences</a
							>
						</li>
					</ul>
				</li>
				<li>
					<a class="mj-link" href={ROUTES.Références}>Nos références</a>
				</li>

				<li>
					<a class="mj-link" href={ROUTES['Espace presse']}>Espace presse</a>
				</li>

				<li>
					<a class="mj-link" href={ROUTES.Blog}>Blog</a>
				</li>

				<li>
					<a class="mj-link" href={ROUTES['Newsletter']}>Newsletter</a>
				</li>
			</ul>
		</nav>
	</Section>
</main>
