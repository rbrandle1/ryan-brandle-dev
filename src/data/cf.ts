import heroImg from '@/images/cf/cf-article-hero.png';
import articleImgResearch1 from '@/images/cf/cf-article-research.png';
import articleImgResearch2 from '@/images/cf/cf-article-research-2.png';
import articleImgResearch3 from '@/images/cf/cf-article-research-3.png';
import articleImgResearch4 from '@/images/cf/cf-article-research-4.png';
import articleImgStrategy from '@/images/cf/cf-article-strategy.png';
import articleImgBuild from '@/images/cf/cf-article-build.png';
import articleImgBuild2 from '@/images/cf/cf-article-build-2.png';
import articleImgBuild3 from '@/images/cf/cf-article-build-3.png';

export const data = {
	text: {
		title: 'CableFinder Rebrand & Token System',
		description: {
			__html:
				'An adaptable system with a multi-mode token approach, unifying UI for design, development, and&nbsp;marketing content teams.',
		},
		descriptionShort:
			'An adaptable system with a multi-mode token approach, unifying UI for design, development, and marketing content teams.',
	},
	images: {
		hero: {
			src: heroImg,
			alt: 'Brand and token system',
			caption: 'Credit: Innovative Business Solutions',
		},
		oldSite: {
			src: articleImgResearch1,
			alt: 'Legacy website screenshot',
		},
		typeGather: {
			src: articleImgResearch2,
			alt: 'Screenshots of typography',
		},
		colorGather: {
			src: articleImgResearch3,
			alt: 'Legacy color palette',
		},
		typeScale: {
			src: articleImgResearch4,
			alt: 'Legacy type scales',
		},
		strategy: {
			src: articleImgStrategy,
			alt: 'Image of notes and discovery sessions.',
			caption: 'Brainstorming sessions to establish goals and strategy.',
		},
		build: {
			src: articleImgBuild,
			alt: 'WCAG color validation chart',
		},
		build2: {
			src: articleImgBuild2,
			alt: 'Typography style chart',
		},
		build3: {
			src: articleImgBuild3,
			alt: 'Link and button style chart',
		},
	},
	tags: ['UX/UI', 'Branding', 'HTML', 'CSS', 'Figma'],
};
