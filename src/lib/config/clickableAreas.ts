import type { ClickableArea } from '$lib/utils/tileCoords';

/**
 * Clickable areas on the Veopia map
 * Each area represents a neighbour's website in the digital neighborhood
 *
 * Coordinates are in tiles (50 wide × 60 tall)
 * To find positions, count tiles from top-left (0, 0)
 */
export const clickableAreas: ClickableArea[] = [
	// ═══════════════════════════════════════════════════════════════
	// VEOPIAN ISLES - Plots
	// ═══════════════════════════════════════════════════════════════
	{
		type: 'plot',
		x: 17,
		y: 18,
		width: 14,
		height: 12,
		url: 'https://mayari.io',
		name: 'maya avendaño',
		bio: 'dx engineer @ vercel ⏶ | frontend x design engineering | maker of veopia and other things | fan of cats + community | figure skater, kickboxer, oly weightlifter',
		location: {
			plotNumber: 1,
			town: 'veopian-isles'
		}
	},
	{
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
		x: 38,
		y: 20,
		width: 10,
		height: 10,
		url: 'https://darylcecile.net/',
		name: 'daryl',
		bio: 'software engineer @ GitHub. Making things on the internet; apps, tools and the occasional questionable decision.',
		location: {
			plotNumber: 4,
			town: 'veopian-isles'
		}
	},
	{
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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

	// ═══════════════════════════════════════════════════════════════
	// FOREST OF VEOPIA - Plots
	// ═══════════════════════════════════════════════════════════════
	{
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
		x: 31,
		y: 8,
		width: 8,
		height: 5,
		url: 'https://alixwiesser.tumblr.com/',
		name: 'mini',
		bio: 'maker of silly pretty things online, hostess of fun good times offline',
		location: {
			plotNumber: 4,
			town: 'forest-of-veopia'
		}
	},
	{
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
		type: 'plot',
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
	},


	// ═══════════════════════════════════════════════════════════════
	// VEOPIA TOWN PLAZA - Plots
	// ═══════════════════════════════════════════════════════════════
	{
		type: 'plot',
		x: 1,
		y: 47,
		width: 9,
		height: 5.5,
		url: 'https://www.vixclotet.com/',
		name: 'Vix <3',
		bio: 'tech founder and software engineer 🩵 | v0 ambassador 🖤 | building things on the internet and doing cool stuff for people 🌟 | always traveling ✈️',
		location: {
			plotNumber: 14,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 9,
		y: 29,
		width: 6,
		height: 5.5,
		url: 'https://hugorcd.com',
		name: 'Hugo',
		bio: 'Software Engineer at Vercel ▲',
		location: {
			plotNumber: 15,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 6,
		y: 16,
		width: 9,
		height: 5.5,
		url: 'https://raz.lol',
		name: 'Razberry',
		bio: 'founder & cozy coder ~ building for personal, malleable software',
		location: {
			plotNumber: 16,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 1.5,
		y: 23,
		width: 5,
		height: 5.5,
		url: 'https://luke.boo',
		name: 'luke',
		bio: 'funware',
		location: {
			plotNumber: 17,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 15,
		y: 24,
		width: 7,
		height: 5.5,
		url: 'https://timganiev.com/',
		name: 'tim',
		bio: "post-training & rl 🥺👉👈",
		location: {
			plotNumber: 18,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 1,
		y: 35,
		width: 8,
		height: 5.2,
		url: 'https://williamhzo.me',
		name: 'william',
		bio: 'builder, playing positive sum games with code, design & humans',
		location: {
			plotNumber: 19,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 13,
		y: 51,
		width: 10,
		height: 5.5,
		url: 'https://chintansudani.com',
		name: 'Chintan',
		bio: 'I help founders and business owners to launch ideas through fast, scalable, and best editorial websites using JAMstack.',
		location: {
			plotNumber: 20,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 34,
		y: 17,
		width: 8,
		height: 5.5,
		url: 'https://nicos.website',
		name: 'Nico Escudero',
		bio: 'Product Manager @ inploi',
		location: {
			plotNumber: 21,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 16,
		y: 42,
		width: 8.2,
		height: 5.2,
		url: 'https://r74n.com/',
		name: 'R74n',
		bio: 'Indie web developer',
		location: {
			plotNumber: 22,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 43,
		y: 35,
		width: 7,
		height: 5.5,
		url: 'https://adjohu.com',
		name: 'Adam Hutchinson',
		bio: 'I build things',
		location: {
			plotNumber: 23,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 43,
		y: 19,
		width: 7,
		height: 5.5,
		url: 'https://pim.dev',
		name: 'Pim de Wit',
		bio: 'creative technologist, co-founder @ Dossia',
		location: {
			plotNumber: 24,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 28,
		y: 20,
		width: 6,
		height: 5.5,
		url: 'https://guillemcotcha.com',
		name: 'guigz',
		bio: 'software designer',
		location: {
			plotNumber: 25,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 37,
		y: 39,
		width: 6,
		height: 5.5,
		url: 'https://thereallo.dev',
		name: 'Thereallo',
		bio: 'frontend nerd',
		location: {
			plotNumber: 26,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 43,
		y: 52,
		width: 7,
		height: 5.5,
		url: 'https://samwho.dev',
		name: 'Sam Rose',
		bio: 'That guy who makes visual essays about programming.',
		location: {
			plotNumber: 27,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 36,
		y: 53,
		width: 7,
		height: 4,
		url: 'https://samwho.dev/dogs',
		name: 'Haskie, Sage & Doe',
		bio: 'woof!',
		location: {
			plotNumber: 29,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 28,
		y: 34,
		width: 7,
		height: 5.5,
		url: 'https://glenn.me',
		name: 'Glenn Hitchcock',
		bio: 'Designer and Director, focussed on brand, product & process at poolside.',
		location: {
			plotNumber: 28,
			town: 'veopia-town-plaza'
		}
	},
	{

		type: 'plot',
		x: 35,
		y: 28,
		width: 8,
		height: 5.2,
		url: 'https://iniabiodun.com',
		name: 'Ìní',
		bio: 'Lawyer, maker and designer chasing wonder',
		location: {
			plotNumber: 30,
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'plot',
		x: 28,
		y: 50,
		width: 7,
		height: 5.5,
		url: 'https://bhrigu.dev',
		name: 'Bhrigu',
		bio: 'Software Engineer at Vercel ▲',
		location: {
			plotNumber: 31,
			town: 'veopia-town-plaza'
		}
	},

	// ═══════════════════════════════════════════════════════════════
	// VEOPIA TOWN PLAZA - Interactive Areas
	// ═══════════════════════════════════════════════════════════════
	{
		type: 'interactive',
		action: 'wishing-well',
		x: 27,
		y: 10,
		width: 10,
		height: 5,
		name: 'the wishing well',
		description: 'make a wish...',
		location: {
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'interactive',
		action: 'cat-greet',
		x: 16,
		y: 11,
		width: 6,
		height: 5,
		name: 'churro the cat',
		location: {
			town: 'veopia-town-plaza'
		}
	},
	{
		type: 'interactive',
		action: 'bulletin-board',
		x: 15,
		y: 7,
		width: 8,
		height: 4,
		name: 'the bulletin board',
		location: {
			town: 'veopia-town-plaza'
		}
	}
];
