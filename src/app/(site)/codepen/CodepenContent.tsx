'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { codepen as data } from '@/data';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import styles from '../projects.module.scss';
import CodePen from '@/components/CodePen/CodePen';

export const CodepenContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>{data.text.title}</h1>
					<div className={styles.subhead}>{data.text.description}</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.heroImage)}
							src={data.images.hero.src}
							alt={data.images.hero.alt}
							caption={data.images.hero.caption}
							metaTags={data.tags}
							isHero
							placeholder='blur'
							priority
						/>
						<h2 className={styles.h2}>Focus Text-Effect</h2>
						<p>
							I'd been wanting to build something just for the fun of it and landed on the idea of simulating depth of
							field using CSS, like focusing a camera lens.
						</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='zYJPWBE' />
						</div>
						<p>
							I stacked various CSS techniques to make it feel <em>snappy</em>, tying everything to the slider's value
							using custom properties. I leaned into the <code>text-shadow</code> property to layer four colored shadows
							that expanded and contracted as the slider moved.
						</p>
						<p>
							JavaScript handled the dynamic updates—setting the custom property values as inline styles to control{' '}
							<code>opacity</code>, <code>translate</code>, and <code>text-shadow</code> instantly.
						</p>
						<p>
							So what's the <em>secret ingredient</em>? Using <code>mix-blend-mode: plus-lighter</code> on the text as a{' '}
							<code>::before</code> pseudo-element creating a vibrant glowing illusion as the shadows intersect.
						</p>
						<h3 className={styles.h4}>Challenges</h3>
						<p>
							Making the effect run smoothly across devices took some tinkering. Larger text caused choppy animations or
							broke the blur effect, so I kept animated elements at a reasonable size to ease the rendering load.
						</p>
						<p>
							For performance, I stuck with lightweight CSS properties (opacity, translate, and text-shadow) and steered
							clear of heavier ones like <code>filter</code>.
						</p>
						<p>
							I also had to fine-tune the math behind the slider. Using <code>Math.abs()</code> and{' '}
							<code>parseInt()</code> helped convert values and toggle between positives and negatives cleanly.
						</p>
						<h2 className={styles.h2}>Pixel Art Animation</h2>
						<p>text</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='RwEbGpP' />
						</div>
						<p>text</p>
						<h3 className={styles.h4}>Challenges</h3>
						<p>text</p>
						<h2 className={styles.h2}>CSS Compass Loader</h2>
						<p>text</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='JjBZaZd' />
						</div>
						<p>text</p>
						<h3 className={styles.h4}>Challenges</h3>
						<p>text</p>
						<h2 className={styles.h2}>Einstein Blink Animation</h2>
						<p>text</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='mdVbaL' />
						</div>
						<p>text</p>
						<h3 className={styles.h4}>Challenges</h3>
						<p>text</p>
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

export default CodepenContent;
