'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { brandImages } from '@/data/images';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import SideImage from '@/components/Article/SideImage/SideImage';
import MultiImage from '@/components/Article/MultiImage/MultiImage';
import styles from '../projects.module.scss';

// 1. overview
// 							2. rebrand goals/concept statement, to suggest, etc.
// 							3. research and discovery, inspiration, etc... old rock posters, big, bold, loud, simple, clean, a return and focus to my roots of graphic design, simple but powerful typography, use of space and foundational colors.
// 							4. design foundations, typography, color, icons. Theme system, explorations... decision over light/dark or not due to high contrast nature of the brand. Accessibility considerations for typography, color, animations.
// 							5. design token creation
// 							6. component creation and mockups, logo, elements, etc.
// 							7. code architecture and strategy... what tools to use, react app or static site and why (try something new, opportunity to learn more and dabble with the latest tech), state management, data structures and modularization of types, imagery, styles, etc. what do I want to accomplish, showcase, highlight... showcase token and theme modes, showcase work in detail, but also with performance in mind...
// 							8. code tokens and create coded system, layout typography and other foundations to explore and adjust if necessary from the design tokens.
// 							9. started building out the app, components, pages, etc. Ensuring responsive and accessible code.
// 							10. optimization and performance audits and enhancements (animation rendering issues, image loading, etc), accessibility, and best practices.
// 							11. Content generation, fleshing out remaining pages.
// 							12. debugging, cleanup.... flickering and choppy animations, theme local storage errors, turbopack issues, etc. Oddities like how I had to import the hero image as a static image to get the blurDataURL to work. Animations were not rendering the way I wanted them to, so I had to force load my animations partial up front to get them to be rendered.
// 							12. end results, lessons learned, fun explorations I used... lh upped my typography game, multiimage grid tactics, accent edge gradients, future exploration, shout outs, resources, etc.

export const BrandContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						<span className={styles.altFont}>New Site,</span>
						<br />
						So Fresh{' '}
						<span className={styles.noWrap}>
							<span className={styles.altFont}>&amp;</span>&nbsp;So&nbsp;Clean
						</span>
					</h1>
					<div className={styles.subhead}>Example subhead</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.heroImage)}
							src={brandImages.hero.src}
							alt={brandImages.hero.alt}
							caption={brandImages.hero.caption}
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'TS', 'React', 'NextJS']}
							isHero
							placeholder='blur'
							priority
						/>
						<h2 className={styles.h2}>
							The
							<br />
							Problem
						</h2>
						<p>content</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						Ship it! Has been the industry's standard dummy text ever since the 1500s, example when an unknown printer
						took a galley of type and scrambled it to make a type specimen book.Work sans Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, example when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default BrandContent;
