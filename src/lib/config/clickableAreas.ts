import type { ClickableArea } from '$lib/utils/tileCoords';

/**
 * Clickable areas on the Veopia map
 * Each area represents a neighbour's website in the digital neighborhood
 *
 * Coordinates are in tiles (50 wide × 60 tall)
 * To find positions, count tiles from top-left (0, 0)
 */
export const clickableAreas: ClickableArea[] = [
	{
		x: 17,
		y: 18,
		width: 14,
		height: 12,
		url: 'https://mayari.io',
		name: 'maya avendaño',
		bio: 'frontend x design engineer | maker of veopia and other things',
		location: {
			plotNumber: 1,
			town: 'veopia-central'
		}
	},
	{
		x: 3,
		y: 2,
		width: 11,
		height: 11,
		url: 'https://pawlean.com',
		name: 'pawlean',
		bio: "community @ vercel ⏶ existing loudly 💜 | sharing thoughts in pixels since '08",
		location: {
			plotNumber: 2,
			town: 'veopia-central'
		}
	},
	{
		x: 34,
		y: 2,
		width: 12,
		height: 11,
		url: 'https://www.rizwanakhan.com',
		name: 'rizbizkits',
		bio: '🧠 a bucket of poetry, design, code, & cricket.',
		location: {
			plotNumber: 3,
			town: 'veopia-central'
		}
	},
	// {
	// 	x: 38,
	// 	y: 17,
	// 	width: 10,
	// 	height: 13,
	// 	url: 'https://mimireyburn.com',
	// 	name: 'mimi reyburn',
	// 	bio: 'xyz',
	// 	location: {
	// 		plotNumber: 4,
	// 		town: 'veopia-central'
	// 	}
	// },
	// {
	// 	x: 1,
	// 	y: 22,
	// 	width: 10,
	// 	height: 12,
	// 	url: 'https://darylcecile.net/',
	// 	name: 'daryl',
	// 	bio: 'software engineer @ github',
	// 	location: {
	// 		plotNumber: 5,
	// 		town: 'veopia-central'
	// 	}
	// },
	{
		x: 28,
		y: 37,
		width: 10,
		height: 9,
		url: 'https://ana.sh',
		name: 'ana',
		bio: 'my hair is a css gradient',
		location: {
			plotNumber: 6,
			town: 'veopia-central'
		}
	},
	{
		x: 10,
		y: 40,
		width: 11,
		height: 11,
		url: 'https://jda5.github.io/blog/',
		name: 'jacob strauss',
		bio: 'chaselabs | gumbo | better every loop',
		location: {
			plotNumber: 7,
			town: 'veopia-central'
		}
	}
	// {
	// 	x: 40,
	// 	y: 45,
	// 	width: 10,
	// 	height: 12,
	// 	url: 'https://carlyvalancy.com',
	// 	name: 'carly valancy',
	// 	bio: 'xyz',
	// 	location: {
	// 		plotNumber: 8,
	// 		town: 'veopia-central'
	// 	}
	// }
	// {
	// 	x: 16,
	// 	y: 17,
	// 	width: 16,
	// 	height: 12,
	// 	url: 'https://website.com',
	// 	name: 'name',
	// 	bio: 'bio',
	// 	location: {
	// 		plotNumber: 9,
	// 		town: 'veopia-central'
	// 	}
	// }
];
