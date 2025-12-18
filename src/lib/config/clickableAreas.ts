import type { ClickableArea } from '$lib/utils/tileCoords';

/**
 * Clickable areas on the Veopia map
 * Each area represents a neighbour's website in the digital neighborhood
 *
 * Coordinates are in tiles (50 wide × 40 tall)
 * To find positions, count tiles from top-left (0, 0)
 */
export const clickableAreas: ClickableArea[] = [
	{
		x: 16,
		y: 17,
		width: 18,
		height: 14,
		url: 'https://mayari.io',
		name: 'maya avendaño',
		bio: 'creator of veopia | frontend / design engineer',
		location: {
			plotNumber: 1,
			town: 'veopia-central'
		}
	}
];
