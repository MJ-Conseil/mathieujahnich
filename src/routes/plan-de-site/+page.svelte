<script>
	import PageHeader from '$lib/components/atoms/PageHeader/PageHeader.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';

	import { ROUTES, SITE_WEB_NAME } from '$lib/constants';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Plan de site</title>
</svelte:head>

<PageHeader>
	<h1 class="mj-h1--alt">Plan de site</h1>
</PageHeader>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" class="mt-8 mb-12" id="main-content">
	<Section>
		<!-- svelte-ignore a11y-no-redundant-roles -- must have the navigation role -->
		<nav role="navigation" aria-label="site-map">
			<h3 class="mj-h4--alt">Mathieu Jahnich </h3>

			<ul class="flex flex-col gap-2">
				<li>
					<a class="mj-link" href={ROUTES.Accueil}>Accueil</a>
				</li>
				<li>
					<a class="mj-link" href={ROUTES['À propos']}>À propos</a>
				</li>
				<li class="text-indigo">
					Offres :
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
					<a class="mj-link" href={ROUTES.Références}>Références</a>
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
