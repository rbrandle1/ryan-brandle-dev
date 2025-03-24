import heroImg from '@/images/insp/hero.jpg';

export const data = {
	text: {
		title: 'The Inspirato Design System',
		description: {
			__html:
				'A large-scale initiative to unify brand, UX, and UI strategy across departments and codebases. Built for consistency, usability, flexibility, and scalability, <em>IDS</em> empowered teams to deliver the high-quality experience expected of a luxury travel brand.',
		},
		descriptionShort: "Preparing a scalable design system for the future of Inspirato's Luxury Travel products.",
	},
	images: {
		hero: {
			src: heroImg,
			alt: 'Boats anchored off a white sandy beach in turquoise blue water',
			caption: 'Credit: Unsplash/@seefromthesky, Inspirato',
		},
		// article1: {
		// 	src: '/images/brand/article1.jpg',
		// 	alt: 'Rebrand of Ryan Brandle',
		// 	caption: 'Creation & Growth of the Inspirato Design System',
		// }
	},
	tags: ['UX/UI', 'HTML', 'CSS', 'JS', 'TS', 'React', 'NextJS', 'Storybook'],
};
