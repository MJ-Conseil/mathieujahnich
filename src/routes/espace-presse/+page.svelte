<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';

	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { CONTACT_LINKS, SITE_WEB_NAME } from '$lib/constants';
	import { getMediaResources } from '$lib/repositories/mediaResources';
	import type { MediaResourcesByTypes } from 'src/definitions';
	import picture from '$lib/assets/pictures/mj-interview.jpg';

	import type { PageData } from './$types';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	export let data: PageData;

	$: mediaResources = data.mediaResources;

	let mediaResourceTypePageRecord: Record<number, number> = {};

	const handleLoadMorePostFormCategory = async (mediaResourceTypeId: number) => {
		const newPage = (mediaResourceTypePageRecord[mediaResourceTypeId] || 1) + 1;

		mediaResourceTypePageRecord = {
			...mediaResourceTypePageRecord,
			[mediaResourceTypeId]: newPage
		};

		const matchingPostCategory = mediaResources.find(
			(item) => item.mediaResourceTypeId === mediaResourceTypeId
		);

		if (!matchingPostCategory) {
			return;
		}

		const newPosts = await getMediaResources(fetch, {
			media_resource_type: [mediaResourceTypeId],
			per_page: 3,
			page: newPage
		});

		const forgedMatchningPostCategory: MediaResourcesByTypes = {
			mediaResourceTypeId: matchingPostCategory.mediaResourceTypeId,
			mediaResourceTypeName: matchingPostCategory.mediaResourceTypeName,
			resource: [...matchingPostCategory.resource, ...newPosts]
		};

		mediaResources = mediaResources.map((item) =>
			item.mediaResourceTypeId == mediaResourceTypeId ? forgedMatchningPostCategory : item
		);
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Espace Presse</title>
</svelte:head>

<div class="py-8 bg-blue-dark ">
	<Container>
		<header>
			<h1 class="mj-h1--alt">
				<span class="text-sand text-4xl block mb-3">Vers une communication et un marketing</span>
				Plus responsables
			</h1>
			<Headline>
				Depuis 2005, je partage mes analyses, des témoignages et des ressources sur un blog pour
				aider les actrices et les acteurs de la filière marketing et communication à mieux saisir
				les enjeux de soutenabilité et à s’engager vers des pratiques plus responsables. <br /> Ces contenus
				étaient précédemment publiés sur le site Sircome.fr.
			</Headline>
		</header>
	</Container>
</div>

<main>
	<Section>
		<h2 class="sr-only">Contactez-moi</h2>

		<div class="flex text-blue-dark">
			<img class="object-contain" src={picture} alt="Mathieu Jahnich durant une interview" />

			<div class="ml-8">
				<div class="mb-24">
					<p>
						J’invite les journalistes à me contacter directement pour discuter de manière informelle
						dans le cadre de la préparation d’un dossier ou d’un reportage ou pour une interview.
					</p>

					<ul class="flex gap-5 mt-5">
						<li class="flex gap-2">
							<Icon width="25px" height="25px" name="target" /> Dossier
						</li>
						<li class="flex gap-2">
							<Icon width="25px" height="25px" name="target" />
							Reportage
						</li>
						<li class="flex gap-2">
							<Icon width="25px" height="25px" name="target" />
							Interview
						</li>
					</ul>
				</div>

				<a
					href={`mailto:${CONTACT_LINKS.email}`}
					class="bg-sand inline-block px-16 py-2 hover:bg-sand-dark font-bold  rounded  text-indigo"
				>
					Nous contacter
				</a>
			</div>
		</div>
	</Section>
	{#each mediaResources as mediaResourceItem, index}
		{#if mediaResourceItem.resource.length > 0}
			{@const isOdd = index % 2 != 0}

			<Section alt={isOdd}>
				<h2>{mediaResourceItem.mediaResourceTypeName}</h2>

				<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12  md:grid-cols-3">
					{#each mediaResourceItem.resource as mediaResource}
						<PostCard
							createdDate={new Intl.DateTimeFormat('fr-FR', {
								day: '2-digit',
								month: 'long',
								year: 'numeric'
							}).format(mediaResource.date)}
							title={mediaResource.title}
							pictureURL={mediaResource.imageUrl}
							excerpt={mediaResource.content}
							href={mediaResource.associatedContent
								? `/espace-presse/${mediaResource.slug}`
								: undefined}
						/>
					{/each}
				</div>

				<div class="w-full mt-8 mb-12 flex items-center justify-center">
					<Button
						on:click={() => handleLoadMorePostFormCategory(mediaResourceItem.mediaResourceTypeId)}
						name={`Afficher plus d'articles pour  ${mediaResourceItem.mediaResourceTypeName.toLowerCase()}`}
						type="primary"
					/>
				</div>
			</Section>
		{/if}
	{/each}
</main>
