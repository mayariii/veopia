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
		bio: 'frontend x design engineer | maker of veopia and other things | lover of cats, coding, figure skating, kickboxing, olmypic weightlifting',
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
	{
		x: 21,
		y: 51,
		width: 13,
		height: 7,
		url: 'https://shaoruu.io',
		name: 'shaoruu',
		bio: 'coder @ cursor',
		location: {
			plotNumber: 9,
			town: 'veopian-isles'
		}
	},
	{
		x: 0,
		y: 2,
		width: 8,
		height: 5,
		url: 'https://miguel.build',
		name: 'miguel',
		bio: 'friendly ambitious nerd',
		location: {
			plotNumber: 1,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 11,
		y: 5,
		width: 8,
		height: 5,
		url: 'https://tikhon.io',
		name: 'tikhon',
		bio: 'Design and Engineering',
		location: {
			plotNumber: 2,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 21,
		y: 0,
		width: 9,
		height: 7,
		url: 'https://mimireyburn.com',
		name: 'mimi reyburn',
		bio: 'Design Engineer, specialised in AI & making whimsical things',
		location: {
			plotNumber: 3,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 31,
		y: 8,
		width: 8,
		height: 5,
		url: 'https://alixwiesser.tumblr.com/',
		name: 'mini',
		location: {
			plotNumber: 4,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 41,
		y: 1,
		width: 8,
		height: 5,
		url: 'https://chee.party',
		name: 'chee',
		bio: "i'm ok",
		location: {
			plotNumber: 5,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 40,
		y: 19,
		width: 8,
		height: 5,
		url: 'https://sinja.io',
		name: 'olegwock',
		bio: 'Painting buttons, cooking tasty meals, and making stuff on the net',
		location: {
			plotNumber: 7,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 9,
		y: 17,
		width: 10,
		height: 5,
		url: 'https://wmorales.dev',
		name: 'wdev',
		bio: 'salvadoran · cursor ambassador · sw engineer',
		location: {
			plotNumber: 6,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 3,
		y: 29,
		width: 9,
		height: 6,
		url: 'https://danbillson.com',
		name: 'dan billson',
		bio: 'product engineer at attio',
		location: {
			plotNumber: 8,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 13,
		y: 30,
		width: 9,
		height: 7,
		url: 'https://dqnamo.com',
		name: 'JP',
		bio: 'building, making, creating',
		location: {
			plotNumber: 7,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 2,
		y: 44,
		width: 10,
		height: 5,
		url: 'https://www.vilinskyy.com/',
		name: 'alexander vilinskyy',
		bio: 'Designer & Founder @ Super Clear',
		location: {
			plotNumber: 10,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 22,
		y: 37,
		width: 11,
		height: 7,
		url: 'https://yannglt.com',
		name: 'yannglt',
		bio: 'Software Designer @ Linear ⚡ Always tinkering on Thunderstorm',
		location: {
			plotNumber: 12,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 34,
		y: 44,
		width: 10,
		height: 5,
		url: 'https://builtbymeh.com',
		name: 'mehedi',
		bio: 'i like making things that think outside the box. building cool things @ granola and touching grass w/ sonder',
		location: {
			plotNumber: 13,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 39,
		y: 33,
		width: 8,
		height: 5,
		url: 'https://abhivarde.in',
		name: 'abhi varde',
		bio: 'Software Developer • Creator of Sync UI',
		location: {
			plotNumber: 9,
			town: 'forest-of-veopia'
		}
	},
	{
		x: 13,
		y: 46,
		width: 8,
		height: 5,
		url: 'https://jaydip.me',
		name: 'jaydip sanghani',
		bio: 'design engineer. creating thoughtful tools. minimalist.',
		location: {
			plotNumber: 11,
			town: 'forest-of-veopia'
		}
	}
];
