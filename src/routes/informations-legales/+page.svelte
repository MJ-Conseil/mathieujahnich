<script lang="ts">
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { CONTACT_HOSTING, CONTACT_LINKS, SITE_WEB_NAME } from '$lib/constants';
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Informations Légales</title>
</svelte:head>

<div class="w-full px-4 py-8 pb-14 relative bg-blue-dark">
	<div class="container lg:pb-8 lg:px-8 lg:mx-auto">
		<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
		<header role="banner" class="lg:w-[40%] flex flex-col gap-4  break-words overflow-visible">
			<h1 class="mj-h1--alt font-bold text">Informations légales</h1>
		</header>
	</div>
</div>

<main class="md:p-0 md:0" id="main">
	<Section>
		<div class="h-full md:px-8">
			<div class="md:grid md:grid-cols-3 md:gap-7">
				<div>
					<h2>Editeur du site</h2>
					<ul>
						<li class="py-2">Raison sociale : MJ Conseil</li>
						<li class="py-2">
							Tél: <a href={`tel:${CONTACT_LINKS.phone}`}>
								{CONTACT_LINKS.phone}
							</a>
						</li>
						<li class="py-2">
							Email : <a href={`mailto:${CONTACT_LINKS.email}`}>
								{CONTACT_LINKS.email}
							</a>
						</li>
						<li class="py-2">Adresse : {CONTACT_LINKS.address}</li>
						<li class="py-2">Siret : 894 917 996 00015</li>
						<li class="py-2">Directeur de rédaction et de publication : Mathieu JAHNICH</li>
					</ul>
				</div>
				<div>
					<h2>Créateur du site</h2>
					<ul>
						<li class="py-2">Version actuelle</li>
						<li class="py-2">Site réalisé par</li>
						<li class="py-2">Fairness Scop Arl</li>
						<li class="py-2">
							<a href="https://fairness.coop/" target="_blank" rel="noreferrer"
								>https://fairness.coop/</a
							>
						</li>
						<li class="py-2">Sur la base d’un design réalisé par</li>
						<li class="py-2">Cyanne – Tiphaine Pellé</li>
						<li class="py-2">
							<a href="https://www.cyanne.fr/" target="_blank" rel="noreferrer"
								>https://www.cyanne.fr/</a
							>
						</li>
					</ul>
				</div>
				<div>
					<h2>Hébergement</h2>
					<ul>
						<li class="py-2">L’hébergement est assuré par {CONTACT_HOSTING.name}</li>
						<li class="py-2">Raison sociale : {CONTACT_HOSTING.corporateName}</li>
						<li class="py-2">Adresse : {CONTACT_HOSTING.address}</li>
						<li class="py-2">Téléphone : {CONTACT_HOSTING.phone}</li>
						<li class="py-2">
							Site web : <a href={CONTACT_HOSTING.website} target="_blank" rel="noreferrer"
								>{CONTACT_HOSTING.website}</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Section>

	<Section alt>
		<div class="h-full md:px-44">
			<h2 class="my-8">Conditions d’utilisation</h2>
			<p class="my-3">
				Le site accessible par l’url suivant : <a
					href={CONTACT_LINKS.website}
					target="_blank"
					rel="noreferrer">{CONTACT_LINKS.website}</a
				> est exploité dans le respect de la législation française. L’utilisation de ce site est régie
				par les présentes conditions générales. En utilisant le site, vous reconnaissez avoir pris connaissance
				de ces conditions et les avoir acceptées.
			</p>
			<p class="my-3">
				Celles-ci pourront être modifiées à tout moment et sans préavis par les représentants de la
				société SARL MJ Conseil.
			</p>
			<p class="my-3">
				Mathieu JAHNICH ne saurait être tenu pour responsable en aucune manière d’une mauvaise
				utilisation du service.
			</p>
		</div>
	</Section>

	<Section>
		<div class="h-full md:px-44">
			<h2 class="my-8">Limitation et responsabilité</h2>
			<p class="my-3">
				Les informations contenues sur ce site sont aussi précises que possible et le site est
				périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions
				ou des lacunes.
			</p>
			<p class="my-3">
				Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de
				bien vouloir le signaler par email en décrivant le problème de la manière la plus précise
				possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur
				utilisé …).
			</p>
			<p class="my-3">
				Tout contenu téléchargé se fait aux risques et périls de l’utilisateur et sous sa seule
				responsabilité. En conséquence, Mathieu JAHNICH ne saurait être tenu responsable d’un
				quelconque dommage subi par l’ordinateur de l’utilisateur ou d’une quelconque perte de
				données consécutives au téléchargement.
			</p>
			<p class="my-3">Les photos sont non contractuelles.</p>
			<p class="my-3">
				Les liens hypertextes mis en place dans le cadre du présent site internet en direction
				d’autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité
				de la société MJ Conseil.
			</p>
			<p class="my-3">
				Mathieu JAHNICH ne saurait être tenu pour responsable en aucune manière d’une mauvaise
				utilisation du service.
			</p>
		</div>
	</Section>

	<Section alt>
		<div class="h-full md:px-44">
			<h2 class="my-8">Propriété intellectuelle</h2>
			<p class="my-3">
				Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images,
				textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
				propriété exclusive de la société MJ Conseil à l’exception des marques, logos ou contenus
				appartenant à d’autres sociétés partenaires ou auteurs.
			</p>
			<p class="my-3">
				Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images,
				textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la
				propriété exclusive de la société MJ Conseil à l’exception des marques, logos ou contenus
				appartenant à d’autres sociétés partenaires ou auteurs.
			</p>
			<p class="my-3">
				Pour toute demande d’autorisation ou d’information, veuillez nous contacter par email :
				<a href={`mailto:${CONTACT_LINKS.email}`}>{CONTACT_LINKS.email}</a>
			</p>
			<p class="my-3">
				Par ailleurs, la mise en forme de ce site a nécessité le recours à des sources externes dont
				nous avons acquis les droits : Avada Theme
			</p>
			<p class="my-3">Crédits photographiques : Mathieu JAHNICH</p>
		</div>
	</Section>

	<Section>
		<div class="h-full md:px-44">
			<h2 class="my-8">Confidentialité</h2>
			<p class="my-3">
				Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des
				tiers hormis pour la bonne exécution de la prestation. Les internautes disposent d’un droit
				d’accès, de rectification, de modification et de suppression concernant les données qui les
				concernent personnellement.
			</p>
			<p class="my-3">
				Vos données personnelles » écrire « Les seules données personnelles collectées sont celles
				saisies dans le formulaire de contact. Elles sont confidentielles et en aucun cas
				communiquées à des tiers…
			</p>
		</div>
	</Section>

	<Section alt>
		<div class="h-full md:px-44">
			<h2 class="my-8">Droit applicable</h2>
			<p class="my-3">
				Tout litige en relation avec l’utilisation du site <a
					href={CONTACT_LINKS.website}
					target="_blank"
					rel="noreferrer">{CONTACT_LINKS.website}</a
				> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux
				compétents.
			</p>
		</div>
	</Section>
</main>
