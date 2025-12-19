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

<nav class="fixed top-0 left-0 z-50 flex gap-2 p-4 [&_a]:font-pt-serif [&_a]:text-sm [&_a]:text-slate-600 [&_a]:underline [&_a]:transition-colors">
	<a href="/" class=""> home </a>
	<a href="/about"> about veopia </a>
	<a href="/guestbook"> guestbook </a>
	<a href="/join"> join the neighbourhood </a>
</nav>

<div class="min-h-dvh w-full">
	{@render children()}
</div>
