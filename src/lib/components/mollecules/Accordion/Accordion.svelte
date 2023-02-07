<script lang="ts">
	import Pill from '$lib/components/atoms/Pill/Pill.svelte';

	export let id: string;
	export let title: string;
	export let img: string;
	export let content: string;
	export let tags: string[];
	export let linkCaseStudy: string = 'a';

	let isOpen = true;

	const handleClickIsOpen = () => {
		isOpen = !isOpen;
	};
</script>

<div class="my-2 py-2 px-3 border border-grey-light rounded-xl">
	<button
		aria-expanded="true"
		aria-controls={`sect-${id}`}
		id={`accordion-${id}`}
		type="button"
		on:click={handleClickIsOpen}
		name="display-card"
		title="Afficher les détails de cette référence"
	>
		<div class="flex items-center">
			<img src={img} alt="" />
			<h4 class="m-0 text-left">
				{title}
			</h4>
			{#if isOpen}
				<span class="mr-3 w-20 py-3.5 rounded-full bg-sand text-blue">^</span>
			{:else}
				<span class="mr-3 w-20 py-3.5 rounded-full bg-sand text-blue rotate">^</span>
			{/if}
		</div>
	</button>

	{#if isOpen}
		<div class="mx-4" id={`sect-${id}`} role="region" aria-labelledby="accordion1id">
			<p>{content}</p>
			<div class="grid grid-cols-3 px-5">
				{#if tags}
					<div class="flex gap-4 my-4 col-span-2">
						{#each tags as tag}
							<Pill {tag} />
						{/each}
					</div>
				{/if}
				{#if linkCaseStudy}
					<div class="col-end-4 col-span-1 flex items-center justify-end">
						<a class="text-blue-dark font-bold" href={linkCaseStudy}
							>Lire l'étude de cas <span class="px-2 py-1 rounded-full bg-sand text-blue">></span
							></a
						>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.rotate {
		transform: rotate(180deg);
	}
</style>
