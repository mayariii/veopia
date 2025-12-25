<script lang="ts">
	interface Props {
		open: boolean;
		onclose: () => void;
	}

	let { open = $bindable(), onclose }: Props = $props();

	let wish = $state('');
	let isSubmitting = $state(false);
	let hasWished = $state(false);

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!wish.trim()) return;

		isSubmitting = true;

		// Simulate the wish being made (you could send this to a server later!)
		setTimeout(() => {
			isSubmitting = false;
			hasWished = true;
			console.log('✨ Wish made:', wish);

			// Reset after showing success
			setTimeout(() => {
				wish = '';
				hasWished = false;
				open = false;
				onclose();
			}, 2000);
		}, 800);
	}

	function handleClose() {
		if (!isSubmitting) {
			wish = '';
			hasWished = false;
			open = false;
			onclose();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		}
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		role="dialog"
		aria-modal="true"
		aria-labelledby="wishing-well-title"
		tabindex="-1">
		<!-- Modal -->
		<div
			class="relative mx-4 w-full max-w-md animate-float-in rounded-2xl border-2 border-amber-300/50 bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-2xl shadow-amber-500/20">
			<!-- Sparkle decorations -->
			<div class="pointer-events-none absolute -top-2 -left-2 text-2xl animate-pulse">✦</div>
			<div
				class="pointer-events-none absolute -top-1 -right-3 text-xl animate-pulse"
				style="animation-delay: 0.3s">
				✧
			</div>
			<div
				class="pointer-events-none absolute -bottom-2 left-1/2 text-lg animate-pulse"
				style="animation-delay: 0.6s">
				✦
			</div>

			<!-- Close button -->
			<button
				type="button"
				onclick={handleClose}
				disabled={isSubmitting}
				class="absolute top-3 right-3 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-200 disabled:opacity-50"
				aria-label="Close">
				<svg class="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			{#if hasWished}
				<!-- Success state -->
				<div class="flex flex-col items-center gap-4 py-4 text-center">
					<div class="text-5xl animate-bounce">✨</div>
					<h2 class="font-pt-serif text-xl font-semibold text-amber-200">
						Your wish has been cast!
					</h2>
					<p class="text-sm text-slate-400 italic">May the stars align in your favor...</p>
				</div>
			{:else}
				<!-- Form state -->
				<div class="mb-5 text-center">
					<div class="mb-3 text-4xl">🌟</div>
					<h2 id="wishing-well-title" class="font-pt-serif text-xl font-semibold text-amber-200">
						The Wishing Well
					</h2>
					<p class="mt-1 text-sm text-slate-400 italic">What does your heart desire?</p>
				</div>

				<form onsubmit={handleSubmit} class="space-y-4">
					<div>
						<label for="wish-input" class="sr-only">Enter your wish</label>
						<textarea
							id="wish-input"
							bind:value={wish}
							disabled={isSubmitting}
							placeholder="I wish for..."
							rows="3"
							class="w-full resize-none rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-3 font-pt-serif text-slate-200 placeholder-slate-500 transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none disabled:opacity-50">
						</textarea>
					</div>

					<button
						type="submit"
						disabled={isSubmitting || !wish.trim()}
						class="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 font-pt-serif font-semibold text-slate-900 shadow-lg transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed">
						{#if isSubmitting}
							<span class="flex items-center justify-center gap-2">
								<svg class="size-5 animate-spin" fill="none" viewBox="0 0 24 24">
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										stroke-width="4" />
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
								</svg>
								Making your wish...
							</span>
						{:else}
							<span class="flex items-center justify-center gap-2">
								<span>✨</span>
								Make a Wish
								<span>✨</span>
							</span>
						{/if}
					</button>
				</form>
			{/if}
		</div>
	</div>
{/if}

<style>
	@keyframes float-in {
		0% {
			opacity: 0;
			transform: scale(0.9) translateY(10px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.animate-float-in {
		animation: float-in 0.3s ease-out forwards;
	}
</style>

