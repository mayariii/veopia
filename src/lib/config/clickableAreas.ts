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
			town: 'veopian-isles'
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
			town: 'veopian-isles'
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
			town: 'veopian-isles'
		}
	},
	{
		x: 38,
		y: 20,
		width: 10,
		height: 10,
		url: 'https://darylcecile.net/',
		name: 'daryl',
		bio: 'I make things on the internet: apps, tools, and the occasional questionable decision. Equal parts curious and exhausted, always tinkering, learning, and chasing the next “oh that’s cool” moment.',
		location: {
			plotNumber: 4,
			town: 'veopian-isles'
		}
	},
	{
		x: 1,
		y: 22,
		width: 10,
		height: 12,
		url: 'https://www.kenthropic.com',
		name: 'ken kunz',
		bio: '👨‍💻 software for humans ⭐️ svelte ambassador 🎭 high-concept mischief',
		location: {
			plotNumber: 5,
			town: 'veopian-isles'
		}
	},
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
			town: 'veopian-isles'
		}
	},
	{
		x: 10,
		y: 40,
		width: 11,
		height: 11,
		url: 'https://jda5.github.io/blog/',
		name: 'jacob strauss',
		bio: 'ChaseLabs | Gumbo | Better Every Loop',
		location: {
			plotNumber: 7,
				town: 'veopian-isles'
		}
	},
	{
		x: 40,
		y: 45,
		width: 10,
		height: 12,
		url: 'https://carlyvalancy.com',
		name: 'carly valancy',
		bio: 'Founder of TETHER, Reach Out Party, and Momentum. I help people find their people',
		location: {
			plotNumber: 8,
			town: 'veopian-isles'
		}
	},
	// {
	// 	x: 16,
	// 	y: 17,
	// 	width: 16,
	// 	height: 12,
	// 	url: '',
	// 	name: '',
	// 	bio: '',
	// 	location: {
	// 		plotNumber: 9,
	// 		town: 'veopian-isles'
	// 	}
	// }
];
