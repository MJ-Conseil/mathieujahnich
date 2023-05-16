<script lang="ts">
	import Icon from '$lib/components/atoms/Icon/Icon.svelte';
	import ParticularSign from '$lib/components/mollecules/ParticularSign/ParticularSign.svelte';
	import Offer from '$lib/components/mollecules/Offer/Offer.svelte';
	import PostCard from '$lib/components/mollecules/PostCard/PostCard.svelte';
	import type { PageData } from './$types';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Headline from '$lib/components/atoms/Headline/Headline.svelte';
	import Section from '$lib/components/mollecules/Section/Section.svelte';
	import { ROUTES, SITE_WEB_NAME, SIZE } from '$lib/constants';
	import logoQualiopi from '$lib/assets/pictures/LogoQualiopi.jpg';
	import logoMasterClass from '$lib/assets/pictures/Logo-MASTERCLASS-carre-200x200.jpg';
	import groupPicture from '$lib/assets/images/mj-group-picture.png';
	import Circle from '$lib/components/atoms/Circle/Circle.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{SITE_WEB_NAME} - Accueil</title>
</svelte:head>
<!-- svelte-ignore a11y-no-redundant-roles -- this role is not redudant because this is the main page header -->
<header role="banner" class=" bg-blue-dark">
	<Container>
		<div class="md:w-[70%] flex flex-col gap-4  break-words overflow-visible mb-8  ">
			<p class="text-sand font-bold">MJ Conseil</p>
			<h1 class="mj-h1--alt lg:text-6xl text-4xl m-0 p-0">
				Nous mettons la <span class="font-bold"> communication</span> au service de la
				<span class="font-bold">transition écologique</span>
			</h1>

			<Headline>
				Nous sommes un trio d’expertes en RSE et communication capables de vous aider de la
				définition de votre stratégie à la mise en place opérationnelle.
			</Headline>
		</div>
	</Container>

	<div class="flex  justify-center ">
		<div class="relative md:w-1/2 w-4/5 ">
			<img src={groupPicture} alt="trio d'experts en communication" />

			<div class="-z-10 absolute bottom-[-15px] right-[90px] hidden md:block">
				<Circle size={SIZE.LARGE} />
			</div>

			<div class="-z-10 absolute bottom-[-15px] right-[-30px] md:hidden">
				<Circle size={SIZE.REGULAR} />
			</div>
		</div>
	</div>

	<div
		aria-hidden="true"
		class="md:block md:absolute top-4 right-4 md:w-[200px] justify-center hidden opacity-80 text-white "
	>
		<Icon width="120%" height="100%" stroke="#ffffff33" fill="#ffffff33" name="mjConseil" />
	</div>
</header>

<main>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, est! Repellat vero, voluptatum
		at officia iste maxime?
	</p>
	<p>
		Sapiente sit cumque aperiam quia eveniet in quibusdam quo, dicta sint laboriosam assumenda ipsum
		beatae id deleniti?
	</p>
	<p>
		Ab quis quasi ullam aliquam. Illo inventore neque, laborum fugiat esse quo iure magni deleniti
		consequatur ullam!
	</p>
	<p>
		Maiores iusto nobis possimus debitis veritatis explicabo quas ullam ab doloribus. In
		necessitatibus doloremque consequuntur rem reprehenderit.
	</p>
	<p>
		Dolores praesentium beatae itaque nemo magnam possimus quia natus atque placeat suscipit facere
		quaerat, esse alias repudiandae.
	</p>
	<p>
		Necessitatibus, dignissimos sunt eveniet nulla temporibus quasi esse magnam commodi officia
		nobis, quaerat nesciunt, ex unde facere?
	</p>
	<p>
		Dicta ipsum culpa veritatis nisi reiciendis, quidem consequatur, vel dignissimos quos rem illo
		amet eos deleniti voluptas?
	</p>
	<p>
		Placeat natus maxime sed eos? Nostrum velit veritatis nemo esse. Rerum fuga totam, possimus
		aliquam dolore repudiandae.
	</p>
	<p>
		Dolorum repellendus eius, quo rem dicta consectetur minus perspiciatis veniam officia corporis
		vero, maiores culpa, architecto illum!
	</p>
	<p>
		Doloribus sit fuga autem! Quibusdam nam possimus ipsa, sit atque aut cum asperiores eveniet
		corporis voluptate libero!
	</p>
	<p>
		Autem labore odit alias nihil exercitationem maiores, harum a dignissimos ipsam voluptatem
		distinctio blanditiis! Hic, quia doloribus?
	</p>
	<p>
		Vitae blanditiis, corrupti earum esse incidunt facilis impedit minima quam, laudantium dicta
		repudiandae error illum delectus perferendis.
	</p>
	<p>
		Recusandae voluptatem laudantium dolorum est sapiente. Neque, maxime reprehenderit. Magnam
		quibusdam voluptate quos omnis sint enim alias!
	</p>
	<p>
		Exercitationem architecto dolores laborum odit hic ut quisquam aliquam atque illo, fugiat,
		voluptatibus amet recusandae adipisci nesciunt!
	</p>
	<p>
		Blanditiis assumenda natus tempore laboriosam iure similique repudiandae illo, soluta
		dignissimos qui, corporis dolore perferendis minima necessitatibus!
	</p>
</main>
