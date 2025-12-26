<script lang="ts">
	import ChurroWalking from '$lib/assets/churro-walking.png';
	import ChurroSitting from '$lib/assets/churro-sitting.png';
	import blupSound from '$lib/assets/audio/blup_1.wav';
	import blup2Sound from '$lib/assets/audio/blup_2.wav';
	import punchSound from '$lib/assets/audio/punch_1.wav';
	import { playSound } from '$lib/utils/utils';

	interface Props {
		open: boolean;
		onclose: () => void;
	}

	let { open = $bindable(), onclose }: Props = $props();

	type InteractionState = 'greeting' | 'petted' | 'fed';
	let state = $state<InteractionState>('greeting');
	let previousOpen = false;

	function handlePet() {
		playSound(blupSound);
		state = 'petted';
	}

	function handleTreat() {
		playSound(blupSound);
		state = 'fed';
	}

	function handleClose() {
		playSound(punchSound);
		state = 'greeting';
		open = false;
		onclose();
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

	$effect(() => {
		if (open && !previousOpen) {
			playSound(blup2Sound);
		}
		previousOpen = open;
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-radial-[circle_at_center] from-[rgba(171,139,107,0.6)] from-0% to-[rgba(107,91,75,0.85)]"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && handleClose()}
		role="dialog"
		aria-modal="true"
		aria-labelledby="cat-greet-title"
		tabindex="-1">
		<div
			class="animate-float-in relative mx-4 w-full max-w-xs font-['Trebuchet_MS','Comic_Sans_MS',cursive,sans-serif]">
			<!-- Outer bevel frame -->
			<div
				class="relative overflow-hidden rounded-xl border-[3px] border-[#8b6b55] bg-linear-to-br from-[#f4e4d4] via-[#e8d8c8] to-[#d4c4b4] shadow-[inset_2px_2px_0_#fff8f0,inset_-2px_-2px_0_#a07060,4px_4px_0_rgba(0,0,0,0.3),8px_8px_16px_rgba(0,0,0,0.2)]">
				<!-- Title bar -->
				<div
					class="flex items-center justify-center gap-2 border-b-2 border-[#3b5b2b] bg-linear-to-b from-[#7b9b6b] via-[#5b7b4b] to-[#4b6b3b] px-3 py-2 text-[15px] font-bold tracking-wide text-[#f4f8e4]">
					<span class="paw">🐾</span>
					<span>churro the cat</span>
					<span class="paw" style="animation-delay: 0.5s">🐾</span>
				</div>

				<!-- Close button -->
				<button
					type="button"
					onclick={handleClose}
					class="absolute top-1.5 right-2 flex size-5 cursor-pointer items-center justify-center rounded border-2 border-[#843434] bg-linear-to-b from-[#d46464] to-[#b44444] text-xs font-bold text-white shadow-[1px_1px_0_rgba(0,0,0,0.3)] transition-all hover:scale-110 hover:bg-linear-to-b hover:from-[#e47474] hover:to-[#c45454] active:scale-95"
					aria-label="Close">
					✕
				</button>

				<!-- Content area -->
				<div
					class="border-t border-[#d4c4b4] bg-linear-to-b from-[#fffef8] to-[#f8f4e8] px-5 pt-4 pb-5">
					<div class="flex flex-col items-center text-center">
						<!-- Cat image -->
						<div class="bounce mb-3">
							{#if state === 'greeting'}
								<img
									src={ChurroWalking}
									alt="Churro the cat walking"
									class="h-24 w-auto [image-rendering:pixelated]" />
							{:else}
								<img
									src={ChurroSitting}
									alt="Churro the cat sitting happily"
									class="h-24 w-auto [image-rendering:pixelated]" />
							{/if}
						</div>

						<!-- Caption -->
						<p id="cat-greet-title" class="mb-4 text-lg text-[#5b4b3b] italic">
							{#if state === 'greeting'}
								prrbb??
							{:else if state === 'petted'}
								*loud purring*
							{:else}
								meow! *loud crunching*
							{/if}
						</p>

						<!-- Action buttons -->
						{#if state === 'greeting'}
							<div class="flex gap-3">
								<button
									type="button"
									onclick={handlePet}
									class="cursor-pointer rounded-full border-2 border-[#3b5b2b] bg-linear-to-b from-[#8bab7b] via-[#6b8b5b] to-[#5b7b4b] px-4 py-2 text-sm font-bold text-[#f4f8e4] shadow-[inset_1px_1px_0_#a4c494,2px_2px_0_rgba(0,0,0,0.2)] transition-all text-shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:-translate-y-px hover:bg-linear-to-b hover:from-[#9bbb8b] hover:via-[#7b9b6b] hover:to-[#6b8b5b] hover:shadow-[inset_1px_1px_0_#a4c494,3px_3px_0_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-[inset_1px_1px_0_#4b6b3b,1px_1px_0_rgba(0,0,0,0.1)]">
									🐾 pet
								</button>
								<button
									type="button"
									onclick={handleTreat}
									class="cursor-pointer rounded-full border-2 border-[#3b5b2b] bg-linear-to-b from-[#8bab7b] via-[#6b8b5b] to-[#5b7b4b] px-4 py-2 text-sm font-bold text-[#f4f8e4] shadow-[inset_1px_1px_0_#a4c494,2px_2px_0_rgba(0,0,0,0.2)] transition-all text-shadow-[0_1px_0_rgba(0,0,0,0.2)] hover:-translate-y-px hover:bg-linear-to-b hover:from-[#9bbb8b] hover:via-[#7b9b6b] hover:to-[#6b8b5b] hover:shadow-[inset_1px_1px_0_#a4c494,3px_3px_0_rgba(0,0,0,0.2)] active:translate-y-px active:shadow-[inset_1px_1px_0_#4b6b3b,1px_1px_0_rgba(0,0,0,0.1)]">
									❤️ give treats
								</button>
							</div>
						{:else}
							<p class="text-[11px] text-[#a49474] italic">
								{#if state === 'fed'}
									~ churro is grateful! ~
								{:else if state === 'petted'}
									~ churro is happy! ~
								{/if}
							</p>
						{/if}
					</div>
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

	@keyframes gentle-bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-5deg);
		}
		50% {
			transform: rotate(5deg);
		}
	}

	.animate-float-in {
		animation: float-in 0.25s ease-out forwards;
	}

	.bounce {
		animation: gentle-bounce 2s ease-in-out infinite;
	}

	.paw {
		animation: wiggle 1s ease-in-out infinite;
	}
</style>
