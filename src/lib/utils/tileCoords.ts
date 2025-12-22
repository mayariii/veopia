/**
 * Map dimensions in tiles
 */
export const MAP_WIDTH_TILES = 50;
export const MAP_HEIGHT_TILES = 60;
export const TILE_SIZE_PX = 16;

export type Town = 'veopia-central' | 'veopian-isles' | 'forest-of-veopia';

export interface Location {
	plotNumber: number;
	town: Town;
}

/**
 * Clickable area configuration
 */
export interface ClickableArea {
	/** X position in tiles (0-49) */
	x: number;
	/** Y position in tiles (0-59) */
	y: number;
	/** Width in tiles */
	width: number;
	/** Height in tiles */
	height: number;
	/** External URL to link to */
	url: string;
	/** Neighbor's name or area label */
	name: string;
	/** Short description */
	bio?: string;
	/** Location */
	location: Location;
}

/**
 * CSS positioning style for absolutely positioned elements
 */
export interface PositionStyle {
	left: string;
	top: string;
	width: string;
	height: string;
}

/**
 * Convert tile coordinates to percentage-based CSS positioning
 * @param x - X position in tiles
 * @param y - Y position in tiles
 * @param width - Width in tiles
 * @param height - Height in tiles
 * @returns CSS positioning object with percentage values
 */
export function tileToPercent(x: number, y: number, width: number, height: number): PositionStyle {
	return {
		left: `${(x / MAP_WIDTH_TILES) * 100}%`,
		top: `${(y / MAP_HEIGHT_TILES) * 100}%`,
		width: `${(width / MAP_WIDTH_TILES) * 100}%`,
		height: `${(height / MAP_HEIGHT_TILES) * 100}%`
	};
}

/**
 * Convert position style object to inline CSS string
 * @param style - Position style object
 * @returns Inline CSS string
 */
export function styleToString(style: PositionStyle): string {
	return Object.entries(style)
		.map(([key, value]) => `${key}: ${value}`)
		.join('; ');
}
