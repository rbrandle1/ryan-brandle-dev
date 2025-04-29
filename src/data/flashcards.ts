import heroImg from '@/images/flashcards/flashcards-article-hero.png';
import articleImgFont from '@/images/flashcards/flashcards-article-fonts.png';
import articleImgToggle from '@/images/flashcards/flashcards-article-toggle.png';
import articleImgFocus from '@/images/flashcards/flashcards-article-focus.png';

export const data = {
	text: {
		title: 'Accessible Flashcards for Kids',
		description:
			'Inspired by the challenges faced by a loved one with dyslexia, this app was designed to support children (and parents) facing similar struggles. Kids can personalize their experience to match how they learn best, making math both engaging and fun.',
		descriptionShort:
			'Inspired by the challenges faced by a loved one with dyslexia, this app was designed to support children (and parents) facing similar struggles.',
	},
	images: {
		hero: {
			src: heroImg,
			alt: 'Image of accessible flashcards for kids',
			caption: 'Accessible flashcards for kids, React App.',
		},
		fonts: {
			src: articleImgFont,
			alt: 'Image of Dyslexia font comparison',
			caption: 'Dyslexia font comparison.',
		},
		toggle: {
			src: articleImgToggle,
			alt: 'Image of theme controls',
			caption: 'Theme controls',
		},
		focus: {
			src: articleImgFocus,
			alt: 'Image of focus-able elements.',
			caption: 'Focus-able elements.',
		},
	},
	tags: ['UX/UI', 'HTML', 'CSS', 'JS', 'React'],
};
