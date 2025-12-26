/**
 * Prettify town names by replacing hyphens with spaces and capitalizing each word
 * @param town - Town name (e.g., 'veopia-central')
 * @returns Formatted town name (e.g., 'Veopia Central')
 */
export function prettifyTown(town: string): string {
	return town
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

/**
 * Play an audio sound effect
 * @param audioSrc - The audio file path or URL
 * @param volume - Volume level (0.0 to 1.0), defaults to 0.5
 */
export function playSound(audioSrc: string, volume: number = 0.5): void {
	try {
		const audio = new Audio(audioSrc);
		audio.volume = volume;
		audio.play().catch((error) => {
			// Silently handle autoplay restrictions
			console.debug('Audio playback prevented:', error);
		});
	} catch (error) {
		console.debug('Failed to play audio:', error);
	}
}
