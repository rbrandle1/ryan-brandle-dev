'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { codepen as data } from '@/data';
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
						<p>
							The following projects are <em>creative</em> front-end experiments—designed as a way to explore new
							techniques, test ideas, and rolling around in what CSS and JavaScript can do.
						</p>
						<p>
							While some examples lean more playful than practical, the approaches behind them are grounded in real,
							applicable methods.
						</p>
						<p>
							I use{' '}
							<a
								href='https://codepen.io/brandledesign'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								CodePen
							</a>{' '}
							as a space to prototype, practice, and refine my front-end thinking—combining visual exploration with
							technical execution.
						</p>
						{/* </div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}> */}
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
						<pre className={styles.syntax}>
							<code>
								<span className={styles.class}>.typography</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--blur</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>0</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>0.7</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--lg-distance</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>.4</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--sm-distance</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>.15</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.property}>text-shadow</span>
								<span className={styles.punctuation}>:</span>
								{'\n    '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--lg-distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>-1</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-c</span>
								<span className={styles.punctuation}>),</span>
								{'\n    '}
								<span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>-1</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--sm-distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-m</span>
								<span className={styles.punctuation}>),</span>
								{'\n    '}
								<span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--lg-distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>-1</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-y</span>
								<span className={styles.punctuation}>),</span>
								{'\n    '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>calc</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--sm-distance</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>*</span>{' '}
								<span className={styles.string}>-1</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-g</span>
								<span className={styles.punctuation}>);</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							JavaScript handled the dynamic updates—setting the custom property values as inline styles to control{' '}
							<code>opacity</code>, <code>translate</code>, and <code>text-shadow</code> instantly.
						</p>
						<p>
							So what's the <em>secret ingredient</em>? Using <code>mix-blend-mode: plus-lighter</code> on the text as a{' '}
							<code>::before</code> pseudo-element creating a vibrant glowing illusion as the shadows intersect.
						</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.class}>.typography</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.comment}>// existing styles...</span>
								{'\n\n  '}
								<span className={styles.punctuation}>&</span>
								<span className={styles.punctuation}>::before</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n    '}
								<span className={styles.property}>mix-blend-mode</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>plus-lighter</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>content</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>attr</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>data-heading</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>position</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>absolute</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>text-shadow</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>0</span>{' '}
								<span className={styles.string}>0</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--shadow-blur</span>
								<span className={styles.punctuation}>)</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-w</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>z-index</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>1</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<h3 className={styles.h5}>Challenges</h3>
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
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h2 className={styles.h2}>Pixel Art Animation</h2>
						<p>
							To fuel my curiosity around Sass maps, I dove into a pixel art experiment. I thought it'd be fun to build
							a themed project paying tribute to one of my all-time favorite childhood games: <em>Final Fantasy VII</em>
							. I found an awesome pixel-style illustration by{' '}
							<a
								href='https://www.redbubble.com/i/art-board-print/FINAL-FANTASY-Cloud-Pixel-by-WubbaDubb/28177052.JUXJO'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								@WubbaDubb
							</a>{' '}
							and used it as a visual reference.
						</p>
						<p>
							I explored a few different methods—like using utility classes or even stacking drop shadows—but those
							approaches quickly became bloated and hard to manage. Lots of repeated HTML, duplicated CSS, and overall
							just… hard to maintain.
						</p>
						<p>
							I wanted something more structured, lean, and maintainable. So I took a hybrid approach using{' '}
							<strong>Sass maps</strong> and <strong>a little JavaScript</strong> to generate repetitive code more
							efficiently and keep everything clean.
						</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='RwEbGpP' />
						</div>
						<p>
							I used JavaScript to generate the grid, assigning each cell a unique class (e.g. <code>.px12</code>) and
							wire up click events to update data and guide the user's experience.
						</p>
						<p>
							I defined each color as a CSS custom property, then created a Sass map that listed which cell numbers got
							which color. It was a time-consuming, pixel-by-pixel process—but it kept the logic centralized and the
							codebase tidy. Plus, it got me into a solid flow-state.
						</p>
						<p>The real magic happened in Sass:</p>
						<pre>
							<code className={styles.syntax}>
								<span className={styles.variable}>$colors</span>
								<span className={styles.punctuation}>: (</span>
								{'\n  '}
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-hair</span>
								<span className={styles.punctuation}>), (</span>
								<span className={styles.string}>2</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>3</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>4</span>
								<span className={styles.punctuation}>)),</span>
								{'\n  '}
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-jacket</span>
								<span className={styles.punctuation}>), (</span>
								<span className={styles.string}>127</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>142</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>208</span>
								<span className={styles.punctuation}>)),</span>
								{'\n'}
								<span className={styles.punctuation}>);</span>
								{'\n\n'}
								<span className={styles.keyword}>@each</span> <span className={styles.variable}>$cssVar</span>
								<span className={styles.punctuation}>,</span> <span className={styles.variable}>$pxList</span>{' '}
								<span className={styles.keyword}>in</span> <span className={styles.variable}>$colors</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.keyword}>@each</span> <span className={styles.variable}>$px</span>{' '}
								<span className={styles.keyword}>in</span> <span className={styles.variable}>$pxList</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n    '}
								<span className={styles.class}>.px</span>
								<span className={styles.punctuation}>{'#{'}</span>
								<span className={styles.variable}>$px</span>
								<span className={styles.punctuation}>{'} {'}</span>
								{'\n      '}
								<span className={styles.property}>background-color</span>
								<span className={styles.punctuation}>:</span> <span className={styles.variable}>$cssVar</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							<strong>This loop:</strong>
						</p>
						<ol className={styles.ol}>
							<li>Reads each item in the map.</li>
							<li>
								Creates a class like <code>.px34</code> for each cell.
							</li>
							<li>Applies the corresponding background-color via a CSS custom property.</li>
						</ol>
						<p>
							The rest is just basic CSS styling and a few animation touches. Shoutout to{' '}
							<a
								href='https://codepen.io/therealace_1/pen/yJvKJW'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								@therealace_1
							</a>{' '}
							for the fun rainbow animation inspiration!
						</p>
						<h3 className={styles.h5}>Challenges</h3>
						<p>
							Figuring out the right approach took some trial and error. I'll admit, there may be more efficient ways to
							reduce the number of rendered CSS lines. In this version, each grid cell has its own class—even if
							multiple cells share the same color.
						</p>
						<p>
							For me, the tradeoff was worth it: the Sass map structure is easy to read, easy to update, and well-suited
							for the level of precision pixel art demands.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h2 className={styles.h2}>CSS Compass Loader</h2>
						<p>
							While working at a luxury travel company, I dabbled with a few fun loading animations. This one was
							inspired by a compass rose—with animated needles that subtly nodded to luxury travel, exploration and
							navigating the globe.
						</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='JjBZaZd' />
						</div>
						<p>
							It was nicknamed <em>“The Gloader”</em> (short for Global Loader), since it was meant to appear across the
							site during search loading states. In the end, it never made it into production—but it was still a fun
							concept to build and a great excuse to play with motion and smooth animations.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h2 className={styles.h2}>The Blinky Einstien</h2>
						<p>
							An old favorite of mine. I've always loved that classic photo of Einstein sticking his tongue out, so I
							recreated him in Illustrator, turned it into an SVG, and gave him some blinky eyes—plus a few surprises on
							hover.
						</p>
						<div className={cn(styles.codePenContainer, styles.flowOffset)}>
							<CodePen penId='mdVbaL' />
						</div>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						Well—that's just it. There isn't one! CodePen is where I explore, play, and chase whatever quirky idea
						sparks my curiosity. These little experiments <em>are for fun</em>, and I'll keep adding more as long as
						there's something to tinker with.
					</p>
					<p>
						I hope they brought you a bit of surprise, delight, or even just a smile—because that's what makes it all
						worth it.
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
