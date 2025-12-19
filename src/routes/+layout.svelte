<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Veopia</title>
	<meta name="description" content="Veopia - A digital neighbourhood" />
</svelte:head>

<nav class="fixed top-0 left-0 z-50 flex gap-2 p-4">
	<a href="/" class="font-pt-serif text-sm text-slate-600 underline transition-colors"> home </a>
	<a href="/about" class="font-pt-serif text-sm text-slate-600 underline transition-colors">
		about veopia
	</a>
	<a
		href="https://mayari.notion.site/2cdcb6f1f0318069bccbda7e74edc924?pvs=143"
		target="_blank"
		rel="noopener noreferrer"
		class="font-pt-serif text-sm text-slate-600 underline transition-colors"
	>
		join the neighbourhood
	</a>
</nav>

<div class="min-h-dvh w-full">
	{@render children()}
</div>
