<script lang="ts">
	import { BULLETIN_MESSAGES } from '$lib/config/bulletinMessages';

	interface Props {
		open: boolean;
		onclose: () => void;
	}

	let { open = $bindable(), onclose }: Props = $props();

	let currentIndex = $state(0);

	const currentMessage = $derived(BULLETIN_MESSAGES[currentIndex]);
	const totalMessages = BULLETIN_MESSAGES.length;

	function handlePrev() {
		currentIndex = (currentIndex - 1 + totalMessages) % totalMessages;
	}

	function handleNext() {
		currentIndex = (currentIndex + 1) % totalMessages;
	}

	function handleClose() {
		currentIndex = 0;
		open = false;
		onclose();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleClose();
		} else if (e.key === 'ArrowLeft') {
			handlePrev();
		} else if (e.key === 'ArrowRight') {
			handleNext();
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
		class="fixed inset-0 z-50 flex items-center justify-center bg-radial-[circle_at_center] from-[rgba(139,171,139,0.6)] from-0% to-[rgba(75,107,75,0.85)]"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		role="dialog"
		aria-modal="true"
		aria-labelledby="bulletin-title"
		tabindex="-1">
		<div
			class="animate-float-in relative mx-4 w-full max-w-md font-['Trebuchet_MS','Comic_Sans_MS',cursive,sans-serif]">
			<!-- Outer bevel frame - cork board style -->
			<div
				class="relative overflow-hidden rounded-xl border-4 border-[#8b6b45] bg-linear-to-br from-[#d4a574] via-[#c49464] to-[#b48454] shadow-[inset_2px_2px_0_#e4b584,inset_-2px_-2px_0_#946034,6px_6px_0_rgba(0,0,0,0.3),10px_10px_20px_rgba(0,0,0,0.25)]">
				<!-- Title bar -->
				<div
					class="flex items-center justify-center gap-2 border-b-2 border-[#3b5b2b] bg-linear-to-b from-[#7b9b6b] via-[#5b7b4b] to-[#4b6b3b] px-3 py-2 text-[15px] font-bold tracking-wide text-[#f4f8e4] text-shadow-[1px_1px_0_#3b5b2b]">
					<span class="pushpin">📌</span>
					<span>bulletin board</span>
					<span class="pushpin" style="animation-delay: 0.3s">📌</span>
				</div>

				<!-- Close button -->
				<button
					type="button"
					onclick={handleClose}
					class="absolute top-1.5 right-2 flex size-5 cursor-pointer items-center justify-center rounded border-2 border-[#843434] bg-linear-to-b from-[#d46464] to-[#b44444] text-xs font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.3)] transition-all hover:scale-110 hover:bg-linear-to-b hover:from-[#e47474] hover:to-[#c45454] active:scale-95"
					aria-label="Close">
					✕
				</button>

				<!-- Content area - paper note style -->
				<div class="p-4">
					<!-- Paper note -->
					<div
						class="paper-note relative rotate-[0.5deg] rounded-sm border border-[#d4c4a4] bg-linear-to-b from-[#fffef8] to-[#f8f4e8] px-5 pt-4 pb-5 shadow-[2px_2px_8px_rgba(0,0,0,0.15),-1px_-1px_0_rgba(255,255,255,0.3)]">
						<!-- Decorative pushpin at top -->
						<div class="absolute -top-2 left-1/2 -translate-x-1/2 text-lg drop-shadow-md">📍</div>

						<!-- Date badge -->
						<div class="mb-2 text-center">
							<span
								class="inline-block rounded-full border border-[#c4b494] bg-[#f4e8d4] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#8b7b5b]">
								{currentMessage.date}
							</span>
						</div>

						<!-- Title -->
						<h2
							id="bulletin-title"
							class="mb-3 text-center text-lg font-bold text-[#5b4b3b] text-shadow-[0_1px_0_rgba(255,255,255,0.5)]">
							{currentMessage.title}
						</h2>

						<!-- Message content -->
						<div
							class="mb-3 min-h-[140px] text-center text-[13px] leading-relaxed whitespace-pre-line text-[#4b4b4b]">
							{currentMessage.content}
						</div>

						<!-- Author -->
						<p class="text-right text-[11px] text-[#8b7b5b] italic">
							{currentMessage.author}
						</p>
					</div>

					<!-- Navigation -->
					<div class="mt-4 flex items-center justify-between">
						<button
							type="button"
							onclick={handlePrev}
							class="nav-btn cursor-pointer rounded-full border-2 border-[#3b5b2b] bg-linear-to-b from-[#8bab7b] via-[#6b8b5b] to-[#5b7b4b] px-3 py-1.5 text-sm font-bold text-[#f4f8e4] shadow-[inset_1px_1px_0_#a4c494,2px_2px_0_rgba(0,0,0,0.2)] transition-all text-shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:-translate-y-px hover:shadow-[inset_1px_1px_0_#a4c494,3px_3px_0_rgba(0,0,0,0.2)] active:translate-y-px">
							◀ prev
						</button>

						<!-- Page indicator -->
						<div class="flex items-center gap-1.5">
							{#each BULLETIN_MESSAGES as message, i (message.id)}
								<button
									type="button"
									onclick={() => (currentIndex = i)}
									class="size-2 cursor-pointer rounded-full border border-[#8b7b5b] transition-all {i ===
									currentIndex
										? 'scale-125 bg-[#5b7b4b]'
										: 'bg-[#d4c4a4] hover:bg-[#b4a484]'}"
									aria-label="Go to message {i + 1}">
								</button>
							{/each}
						</div>

						<button
							type="button"
							onclick={handleNext}
							class="nav-btn cursor-pointer rounded-full border-2 border-[#3b5b2b] bg-linear-to-b from-[#8bab7b] via-[#6b8b5b] to-[#5b7b4b] px-3 py-1.5 text-sm font-bold text-[#f4f8e4] shadow-[inset_1px_1px_0_#a4c494,2px_2px_0_rgba(0,0,0,0.2)] transition-all text-shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:-translate-y-px hover:shadow-[inset_1px_1px_0_#a4c494,3px_3px_0_rgba(0,0,0,0.2)] active:translate-y-px">
							next ▶
						</button>
					</div>

					<!-- Hint -->
					<!-- <p class="mt-3 text-center text-[10px] text-[#f4e8d4]/80 italic">
						~ use ← → arrow keys to navigate ~
					</p> -->
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

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
	}

	@keyframes paper-settle {
		0% {
			transform: rotate(-1deg);
		}
		100% {
			transform: rotate(0.5deg);
		}
	}

	.animate-float-in {
		animation: float-in 0.25s ease-out forwards;
	}

	.pushpin {
		animation: wiggle 2s ease-in-out infinite;
	}

	.paper-note {
		animation: paper-settle 0.3s ease-out forwards;
	}
</style>
