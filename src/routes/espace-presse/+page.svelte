<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';

	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { SITE_WEB_NAME, SIZE } from '$lib/constants';
	import { getMediaResources } from '$lib/repositories/mediaResources';
	import type { MediaResourcesByTypes } from 'definitions';
	import picture from '$lib/assets/pictures/mj-interview.jpg';

	import type { PageData } from './$types';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ArrowLink from '$lib/components/mollecules/ArrowLink/ArrowLink.svelte';
	import ButtonLink from '$lib/components/atoms/ButtonLink/ButtonLink.svelte';
	import { focusableElementStore } from '$lib/stores/setFocusableElement';

	export let data: PageData;

	$: mediaResources = data.mediaResources;
	$: remainingMediaResourceTypeRecord = data.remainingMediaResourceTypeRecord;

	let mediaResourceTypePageRecord: Record<number, number> = {};

	const getButtonText = (mediaResource: MediaResourcesByTypes) => {
		if ('aeiouy'.includes(mediaResource.mediaResourceTypeName.toLocaleLowerCase().charAt(0))) {
			return `Afficher plus d'${mediaResource.mediaResourceTypeName.toLowerCase()}`;
		}

		return `Afficher plus de ${mediaResource.mediaResourceTypeName.toLowerCase()}`;
	};

	const handleLoadMorePostFormCategory = async (mediaResourceTypeId: number) => {
		const newPage = (mediaResourceTypePageRecord[mediaResourceTypeId] || 1) + 1;

		const remainingMediaResourceTypeRecordItem =
			remainingMediaResourceTypeRecord[mediaResourceTypeId];

		remainingMediaResourceTypeRecord = {
			...remainingMediaResourceTypeRecord,
			[mediaResourceTypeId]: {
				...remainingMediaResourceTypeRecordItem,
				remaining:
					remainingMediaResourceTypeRecordItem.remaining > 0
						? remainingMediaResourceTypeRecordItem.remaining - 3
						: 0
			}
		};

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

	const setFocus = (id: string) => {
		focusableElementStore.setFocusableElementIds(id);
	};
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Espace presse</title>
</svelte:head>

<div class="py-8 bg-blue-dark">
	<Container>
		<header>
			<p class="text-sand text-xl font-bold">Radio, presse, télévision, web…</p>
			<h1 class="mj-h1--alt">Espace presse</h1>
			<Headline>
				Nous intervenons régulièrement dans les médias généralistes ou spécialisés pour décrypter
				l’impact de la transition écologique sur les fonctions marketing et communication des
				entreprises.
			</Headline>
		</header>
	</Container>
</div>
<!-- svelte-ignore a11y-no-redundant-roles -- this is the main page section -->
<main role="main" id="main-content">
	<Section>
		<h2 class="sr-only">Contactez-moi</h2>

		<div class="flex pb-4 flex-col md:flex-row text-blue-dark">
			<img class="object-contain" src={picture} alt="Mathieu Jahnich durant une interview" />

			<div class="md:ml-8">
				<div class="md:mb-24 mb-12">
					<p>
						Nous invitons les journalistes à contacter Mathieu directemen pour discuter de manière
						informelle dans le cadre de la préparation d’un dossier ou d’un reportage ou pour une
						interview.
					</p>

					<ul class="flex flex-col md:flex-row gap-5 mt-5">
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

				<ButtonLink on:click={() => setFocus('#phone-link')} href="#phone-link"
					>Nous contacter</ButtonLink
				>
			</div>
		</div>
	</Section>
	{#each mediaResources as mediaResourceItem, index}
		{#if mediaResourceItem.resource.length > 0}
			{@const isOdd = index % 2 != 0}

			<Section alt={isOdd}>
				<h2>{mediaResourceItem.mediaResourceTypeName}</h2>

				<div class="h-full md:gap-x-5 md:gap-y-10 grid gap-y-5 mt-12 md:grid-cols-3">
					{#each mediaResourceItem.resource as mediaResource}
						<PostCard
							createdDate={new Intl.DateTimeFormat('fr-FR', {
								day: '2-digit',
								month: 'long',
								year: 'numeric'
							}).format(mediaResource.date)}
							picureAlternativeText={mediaResource.title}
							imageCover={false}
							pictureURL={mediaResource.imageUrl}
							excerpt={mediaResource.content}
							href={mediaResource.associatedContent
								? `/espace-presse/${mediaResource.slug}`
								: undefined}
						>
							{#if mediaResource.associatedContent}
								<ArrowLink
									linkTitle={`${mediaResource.associatedContent?.externalResourceName} (lien vers site externe)`}
									external
									arrowSize={SIZE.SMALL}
									href={mediaResource.associatedContent?.externalResourceURl}
									>{mediaResource.associatedContent?.externalResourceName}</ArrowLink
								>
							{/if}
						</PostCard>
					{/each}
				</div>

				{#if remainingMediaResourceTypeRecord[mediaResourceItem.mediaResourceTypeId].remaining > 0}
					<div class="w-full mt-8 mb-12 flex items-center justify-center">
						<Button
							on:click={() => handleLoadMorePostFormCategory(mediaResourceItem.mediaResourceTypeId)}
							name={getButtonText(mediaResourceItem)}
							type="primary"
						/>
					</div>
				{/if}
			</Section>
		{/if}
	{/each}
</main>
