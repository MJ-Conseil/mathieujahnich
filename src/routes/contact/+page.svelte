<script>
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';

	import { CONTACT_LINKS } from '$lib/constants';
</script>

<svelte:head>
	<title>MJ Conseil - Contact</title>
</svelte:head>

<div class="w-full px-4 py-8 relative bg-blue-dark">
	<div class="container md:pb-8 md:px-8 md:mx-auto">
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="md:w-[30%] flex flex-col gap-4  break-words overflow-visible  ">
			<h1 class="mj-h1--alt font-bold text">Contact</h1>

			<p class="text-white">
				Nous réalisons la plupart de nos prestations à distance. Nous nous déplaçons (en train)
				lorsque c’est nécessaire, pour mieux vous connaître et vous accompagner.
			</p>
		</header>
	</div>
</div>

<main class="md:p-0 md:0" id="main">
	<section class="md:p-0 md:py-12 p-4">
		<Container>
			<h2 class="my-10">Parlons-nous</h2>
			<div class="lg:gap-x-20 lg:gap-y-10 grid gap-y-16 lg:grid-cols-2 mb-10">
				<div class="md:w-1/2">
					<h3 class="mb-5">Premiers rendez-vous</h3>
					<p>
						Consultez mes disponibilités et choisissez directement le créneau qui vous convient pour
						un premier échange de 30 minutes.
					</p>
					<div class="mt-6">
						<a
							class="mj-link--btn"
							href={CONTACT_LINKS.reservio}
							target="_blank"
							rel="noreferrer"
							data-testid="reservio-link">Prendre rendez-vous</a
						>
					</div>
				</div>
				<div>
					<h3 class="mb-5">Contact</h3>
					<p class="flex gap-x-3 items-center">
						<span aria-hidden="true">
							<Icon width="16px" height="100%" name="phone" />
						</span>
						<a href={`tel:${CONTACT_LINKS.phone}`}>
							<span class="sr-only">téléphone :</span>
							{CONTACT_LINKS.phone}
						</a>
					</p>
					<p class="flex gap-x-3 items-center">
						<span aria-hidden="true">
							<Icon width="16px" height="100%" name="envelop" />
						</span>
						<a href={`mailto:${CONTACT_LINKS.email}`}>
							<span class="sr-only">email :</span>
							{CONTACT_LINKS.email}
						</a>
					</p>
				</div>
			</div>
		</Container>
	</section>
</main>
