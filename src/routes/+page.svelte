<script lang="ts">
	import VeopianIsles from '$lib/assets/veopian-isles.png';
	import ForestOfVeopia from '$lib/assets/forest-of-veopia.png';
	import VeopiaTownPlaza from '$lib/assets/veopia-town-plaza.png';
	import WishingWellModal from '$lib/components/WishingWellModal.svelte';
	import CatGreetModal from '$lib/components/CatGreetModal.svelte';
	import { dev } from '$app/environment';
	// import { prettifyTown } from '$lib/utils/utils';
	import { clickableAreas } from '$lib/config/clickableAreas';
	import {
		tileToPercent,
		styleToString,
		type PlotArea,
		type InteractiveArea
	} from '$lib/utils/tileCoords';

	let showClickableAreas = $state(false);
	let showWishingWell = $state(false);
	let showCatGreet = $state(false);

	// Only count plot areas for population
	const plotAreas = clickableAreas.filter((area): area is PlotArea => area.type === 'plot');
	let populationSize = $derived(plotAreas.length);

	function handleInteractiveClick(area: InteractiveArea) {
		if (area.action === 'wishing-well') {
			showWishingWell = true;
		} else if (area.action === 'cat-greet') {
			showCatGreet = true;
		}
	}
</script>

<svelte:head>
	<title>Veopia | Explore</title>
</svelte:head>

{#snippet plotArea(area: PlotArea)}
	<a
		href={area.url}
		target="_blank"
		rel="noopener noreferrer"
		class="group absolute"
		style={styleToString(tileToPercent(area.x, area.y, area.width, area.height))}>
		<div
			class="absolute inset-0 transition-all duration-200"
			class:bg-opacity-40={showClickableAreas}
			class:border-2={showClickableAreas}
			class:border-blue-600={showClickableAreas}>
			<span class="sr-only">{area.name}'s website</span>
		</div>

		<div
			class="absolute top-full right-1 left-1 flex flex-col items-center gap-1 rounded-lg border-2 border-slate-400 bg-slate-100/40 p-2 text-center font-pt-serif backdrop-blur-sm">
			<div class="text-sm font-bold text-slate-700">{area.name}</div>
			{#if area.bio}
				<div class="text-xs text-slate-600 italic">{area.bio}</div>
			{/if}

			<!-- {#if area.location}
				<div class="mt-1 text-[10px] text-slate-500">
					{area.location.plotNumber}
					{prettifyTown(area.location.town)}
				</div>
			{/if} -->
		</div>
	</a>
{/snippet}

{#snippet interactiveArea(area: InteractiveArea)}
	<button
		type="button"
		onclick={() => handleInteractiveClick(area)}
		class="group absolute cursor-pointer"
		style={styleToString(tileToPercent(area.x, area.y, area.width, area.height))}>
		<div
			class="absolute inset-0 transition-all duration-200"
			class:bg-opacity-40={showClickableAreas}
			class:border-2={showClickableAreas}
			class:border-[#5b7b4b]={showClickableAreas}>
			<span class="sr-only">{area.name}</span>
		</div>

		{#if area.name}
			<div
				class="pointer-events-none absolute top-full right-1 left-1 flex flex-col items-center gap-1 rounded-lg border-2 border-[#5b7b4b]/60 bg-white/40 p-2 text-center font-pt-serif opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
				<div class="text-sm font-bold text-[#3b5b2b]">{area.name}</div>
				{#if area.description}
					<div class="text-xs text-[#4b6b3b] italic">{area.description}</div>
				{/if}
			</div>
		{/if}
	</button>
{/snippet}

<div
	class="fixed inset-0 mt-11 grid grid-cols-[800px_800px] items-start justify-start gap-10 overflow-auto bg-water pb-32">
	<div class="relative h-[960px] w-[800px] shrink-0">
		<div class="absolute inset-x-0 top-10 text-center font-pt-serif text-slate-700">
			<h1 class="text-2xl font-bold">welcome to veopia!</h1>
			<p class=" text-slate-600">
				a digital neighbourhood <span class="font-sans text-sm">♡</span>
			</p>
			<p class="text-sm text-slate-600 italic">population: {populationSize}</p>
		</div>

		<img
			src={VeopianIsles}
			alt="Veopia - A digital neighbourhood"
			class="h-full w-full object-contain" />

		{#each clickableAreas.filter((area): area is PlotArea => area.type === 'plot' && area.location.town === 'veopian-isles') as area (area.url)}
			{@render plotArea(area)}
		{/each}
		{#each clickableAreas.filter((area): area is InteractiveArea => area.type === 'interactive' && area.location.town === 'veopian-isles') as area (area.name)}
			{@render interactiveArea(area)}
		{/each}
	</div>

	<div class="relative h-[960px] w-[800px] shrink-0">
		<img
			src={ForestOfVeopia}
			alt="Veopia - A digital neighbourhood"
			class="h-full w-full object-contain" />

		{#each clickableAreas.filter((area): area is PlotArea => area.type === 'plot' && area.location.town === 'forest-of-veopia') as area (area.url)}
			{@render plotArea(area)}
		{/each}
		{#each clickableAreas.filter((area): area is InteractiveArea => area.type === 'interactive' && area.location.town === 'forest-of-veopia') as area (area.name)}
			{@render interactiveArea(area)}
		{/each}
	</div>

	<div class="relative h-[960px] w-[800px] shrink-0">
		<img
			src={VeopiaTownPlaza}
			alt="Veopia - A digital neighbourhood"
			class="h-full w-full object-contain" />

		{#each clickableAreas.filter((area): area is PlotArea => area.type === 'plot' && area.location.town === 'veopia-town-plaza') as area (area.url)}
			{@render plotArea(area)}
		{/each}
		{#each clickableAreas.filter((area): area is InteractiveArea => area.type === 'interactive' && area.location.town === 'veopia-town-plaza') as area (area.name)}
			{@render interactiveArea(area)}
		{/each}
	</div>

	{#if dev}
		<button
			onclick={() => (showClickableAreas = !showClickableAreas)}
			class="fixed right-4 bottom-4 rounded bg-gray-800 px-4 py-2 text-sm text-white opacity-50 hover:opacity-100">
			{showClickableAreas ? 'Hide' : 'Show'} Areas
		</button>
	{/if}
</div>

<WishingWellModal bind:open={showWishingWell} onclose={() => (showWishingWell = false)} />
<CatGreetModal bind:open={showCatGreet} onclose={() => (showCatGreet = false)} />
