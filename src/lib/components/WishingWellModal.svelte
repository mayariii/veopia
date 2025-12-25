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

		// Simulate the wish being made
		setTimeout(() => {
			isSubmitting = false;
			hasWished = true;
			console.log('✨ Wish made:', wish);
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
		class="fixed inset-0 z-50 flex items-center justify-center bg-radial-[circle_at_center] from-[rgba(107,139,171,0.6)] from-0% to-[rgba(75,91,107,0.85)]"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		role="dialog"
		aria-modal="true"
		aria-labelledby="wishing-well-title"
		tabindex="-1">
		<div
			class="animate-float-in relative mx-4 w-full max-w-sm font-['Trebuchet_MS','Comic_Sans_MS',cursive,sans-serif]">
			<!-- Outer bevel frame -->
			<div
				class="relative overflow-hidden rounded-xl border-[3px] border-[#8b7355] bg-linear-to-br from-[#f4e8d4] via-[#e8dcc8] to-[#d4c8b4] shadow-[inset_2px_2px_0_#fff8f0,inset_-2px_-2px_0_#a08060,4px_4px_0_rgba(0,0,0,0.3),8px_8px_16px_rgba(0,0,0,0.2)]">
				<!-- Title bar -->
				<div
					class="flex items-center justify-center gap-2 border-b-2 border-[#3b5b2b] bg-linear-to-b from-[#7b9b6b] via-[#5b7b4b] to-[#4b6b3b] px-3 py-2 text-[15px] font-bold tracking-wide text-[#f4f8e4] text-shadow-[1px_1px_0_#3b5b2b]">
					<span class="star text-[#d4c454] text-shadow-[0_0_4px_#f4e464]">★</span>
					<span>the wishing well</span>
					<span
						class="star text-[#d4c454] text-shadow-[0_0_4px_#f4e464]"
						style="animation-delay: 1s">★</span>
				</div>

				<!-- Close button -->
				<button
					type="button"
					onclick={handleClose}
					disabled={isSubmitting}
					class="close-btn absolute top-1.5 right-2 flex size-5 cursor-pointer items-center justify-center rounded border-2 border-[#843434] bg-linear-to-b from-[#d46464] to-[#b44444] text-xs font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.3)] transition-all hover:scale-110 hover:bg-linear-to-b hover:from-[#e47474] hover:to-[#c45454] active:scale-95 disabled:opacity-50"
					aria-label="Close">
					✕
				</button>

				<!-- Content area -->
				<div
					class="border-t border-[#d4c8b4] bg-linear-to-b from-[#fffef8] to-[#f8f4e8] px-5 pt-4 pb-5">
					{#if hasWished}
						<!-- Success state -->
						<div class="py-2 text-center">
							<div class="sparkles my-2 text-xs tracking-[4px] text-[#d4b434]">✦ ✧ ★ ✧ ✦</div>
							<div class="bounce my-2 text-5xl">🌟</div>
							<h2 id="wishing-well-title" class="my-2 text-lg font-bold text-[#5b7b4b]">
								your wish has been cast!
							</h2>
							<p class="text-[13px] leading-relaxed text-[#6b5b4b]">
								the stars have heard your wish...<br />
								may it come true! ☆
							</p>
							<div class="sparkles my-2 text-xs tracking-[4px] text-[#d4b434]">✦ ✧ ★ ✧ ✦</div>
						</div>
					{:else}
						<!-- Form -->
						<div class="text-center">
							<div class="mb-2 flex items-center justify-center gap-2 text-sm text-[#8b7b5b]">
								<span>✧</span>
								<span class="bounce text-[32px]">🪙</span>
								<span>✧</span>
							</div>

							<p id="wishing-well-title" class="mb-3 text-sm text-[#5b4b3b] italic">
								toss a coin and make a wish!
							</p>

							<form onsubmit={handleSubmit} class="flex flex-col gap-3">
								<label for="wish-input" class="sr-only">Enter your wish</label>
								<textarea
									id="wish-input"
									bind:value={wish}
									disabled={isSubmitting}
									placeholder="i wish for..."
									rows="3"
									class="w-full resize-none rounded-lg border-2 border-[#b4a484] bg-[#fffef8] px-3 py-2.5 text-sm text-[#4b4b4b] shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),inset_-1px_-1px_0_#fff] transition-all placeholder:text-[#a49474] placeholder:italic focus:border-[#7b9b6b] focus:shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1),0_0_0_3px_rgba(123,155,107,0.2)] focus:outline-none disabled:opacity-50">
								</textarea>

								<button
									type="submit"
									disabled={isSubmitting || !wish.trim()}
									class="cursor-pointer rounded-full border-2 border-[#3b5b2b] bg-linear-to-b from-[#8bab7b] via-[#6b8b5b] to-[#5b7b4b] px-4 py-2.5 text-sm font-bold text-[#f4f8e4] shadow-[inset_1px_1px_0_#a4c494,2px_2px_0_rgba(0,0,0,0.2)] transition-all text-shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:-translate-y-px hover:bg-linear-to-b hover:from-[#9bbb8b] hover:via-[#7b9b6b] hover:to-[#6b8b5b] hover:shadow-[inset_1px_1px_0_#a4c494,3px_3px_0_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-[inset_1px_1px_0_#4b6b3b,1px_1px_0_rgba(0,0,0,0.1)] disabled:cursor-not-allowed disabled:opacity-60">
									{#if isSubmitting}
										<span class="twinkle">✦ wishing... ✦</span>
									{:else}
										<span>✨ make a wish ✨</span>
									{/if}
								</button>
							</form>

							<p class="mt-3 text-[11px] text-[#a49474] italic">
								~ wishes are free! only heard by you and the stars 🔮 ~
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* ANIMATIONS */
	@keyframes float-in {
		0% {
			opacity: 0;
			transform: scale(0.95) translateY(8px);
		}
		100% {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	@keyframes twinkle {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	@keyframes gentle-bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	.animate-float-in {
		animation: float-in 0.25s ease-out forwards;
	}

	.twinkle {
		animation: twinkle 0.8s ease-in-out infinite;
	}

	.bounce {
		animation: gentle-bounce 2s ease-in-out infinite;
	}

	.star {
		animation: twinkle 2s ease-in-out infinite;
	}

	/* ===== SPARKLES ===== */
	.sparkles {
		animation: twinkle 1.5s ease-in-out infinite;
	}
</style>
