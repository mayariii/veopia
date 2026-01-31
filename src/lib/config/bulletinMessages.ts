export interface BulletinMessage {
	id: number;
	title: string;
	date: string;
	content: string;
	author: string;
}

export const BULLETIN_MESSAGES: BulletinMessage[] = [
	{
		id: 4,
		title: '🏠 january bulletin',
		date: 'jan 31, 2026',
		content: `after a lovely christmas break, construction resumed to open a new area!
		
		west veopia is in prime location, just a stones throw from the town plaza offering a blend of town living and nature dwelling. 
		
		a new café has also opened in the plaza, offering a range of delicious treats and drinks. it has become a popular spot for co-working too.
		
		a huge welcome to our january residents!`,
		author: '~ caretaker of veopia'
	},
	{
		id: 1,
		title: '🎄 happy holidays!',
		date: 'dec 25, 2025',
		content: `wishing you a wonderful holiday season filled with joy, warmth, and all round good vibes! 

we have a christmas market in the plaza until the 31st :)

         ★
        /|\\
       /_|_\\
      /__|__\\
     /___|___\\
      |||
   ~~~|||~~~

      ★  ☆  ★
   ✧ merry xmas ✧
      ☆  ★  ☆`,
		author: '~ with love, from the townspeople of veopia 🎁'
	},

	{
		id: 3,
		title: '🌳 the forest has been revealed',
		date: 'dec 21, 2025',
		content: `welcome to the new residents of the forest of veopia!

we're so excited to have you join our growing community! the forest is a special place where creativity and nature come together.

make yourself at home (and don't taunt the bears!)`,
		author: '~ caretaker of veopia'
	},
	{
		id: 2,
		title: '📢 welcome to veopia!',
		date: 'dec 20, 2025',
		content: `hello, traveler!

welcome to our cozy little corner of the internet. feel free to explore, and meet our residents.

we hope you enjoy your stay! ♡`,
		author: '~ residents of veopia'
	}
];
