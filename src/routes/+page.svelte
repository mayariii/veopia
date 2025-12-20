<script lang="ts">
	import VeopianIsles from '$lib/assets/veopian-isles.png';
	import { dev } from '$app/environment';
	import { clickableAreas } from '$lib/config/clickableAreas';
	import { tileToPercent, styleToString } from '$lib/utils/tileCoords';
	import { prettifyTown } from '$lib/utils/utils';

	let showClickableAreas = $state(false);
	let populationSize = $derived(clickableAreas.length);
</script>

<svelte:head>
	<title>Veopia | Explore</title>
</svelte:head>

<div
	class="fixed inset-0 mt-11 flex items-start justify-start overflow-auto bg-water pb-32 lg:justify-center">
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

		{#each clickableAreas as area (area.url)}
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
					class="absolute top-full right-2 left-2 flex flex-col items-center gap-1 rounded-lg border-2 border-slate-400 bg-slate-100/40 p-2 text-center font-pt-serif backdrop-blur-sm">
					<div class="text-sm font-bold text-slate-700">{area.name}</div>
					{#if area.bio}
						<div class="text-xs text-slate-600 italic">{area.bio}</div>
					{/if}

					{#if area.location}
						<div class="mt-1 text-[10px] text-slate-500">
							{area.location.plotNumber}
							{prettifyTown(area.location.town)}
						</div>
					{/if}
				</div>
			</a>
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
