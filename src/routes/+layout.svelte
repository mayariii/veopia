<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Veopia | A digital neighbourhood</title>
	<meta
		name="description"
		content="Veopia is a digital neighbourhood inspired by the towns of Neopets, the vibes of Stardew Valley, webrings, and a mission to create a community space to discover and connect with other cool humans in the digital world." />
	<script
		async
		src="https://cloud.umami.is/script.js"
		data-website-id="a3c8056d-6111-4d21-9369-5e55d8ccfedc"
		data-domains="veopia.net,www.veopia.net"></script>
</svelte:head>

<nav
	class="fixed top-0 right-0 left-0 z-50 flex gap-2 px-4 py-3 [&_a]:font-pt-serif [&_a]:text-sm [&_a]:text-slate-600 [&_a]:transition-colors [&_a]:hover:underline">
	<a href="/" class="">explore </a>
	<a href="/about">about </a>
	<a href="/guestbook">guestbook </a>
	<a href="/join">join</a>
</nav>

<div class="min-h-dvh w-full">
	{@render children()}
</div>
