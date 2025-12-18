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

{@render children()}
