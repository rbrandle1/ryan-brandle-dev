import heroImg from '@/images/comparison/comparison-article-hero.png';
import heroImg2 from '@/images/comparison/comparison-article-hero-2.png';
import comparisonArticleFull from '@/images/comparison/comparison-article-full.png';
import comparisonArticleSide from '@/images/comparison/comparison-article-side.png';

export const data = {
	text: {
		title: 'Comparison Cards with CSS Grid',
		description: {
			__html:
				'Dive deep into a unique CSS Grid solution that helped people compare and choose the right product. Originally published on the <em>Inspirato Technology Blog</em>.',
		},
		descriptionShort: 'A unique CSS Grid solution that helped people compare and choose the right product.',
	},
	images: {
		hero: {
			src: heroImg,
			alt: 'Screenshot of the Comparison Card components.',
			caption: 'Credit: Inspirato | Mock content for component demo.',
		},
		feature: {
			src: heroImg2,
			alt: 'Screenshot of the Comparison Card components.',
		},
		full: {
			src: comparisonArticleFull,
			alt: 'Side by side comparison of each product.',
			caption: 'Credit: Inspirato | Mock content for demo. Side by side comparison of products.',
		},
		side: {
			src: comparisonArticleSide,
			alt: 'Infographic showing how grid cells grow to fill the container.',
			caption: 'Rows will grow to the tallest content across the cards.',
		},
	},
	tags: ['UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook'],
};
