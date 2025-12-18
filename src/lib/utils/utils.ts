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
