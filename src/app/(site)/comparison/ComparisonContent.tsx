'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { comparison as data } from '@/data';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import SideImage from '@/components/Article/SideImage/SideImage';
import styles from '../projects.module.scss';

export const ComparisonContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						Comparison Cards <span className={styles.altFont}>with</span> CSS Grid
					</h1>
					<div className={styles.subhead}>{data.text.descriptionShort}</div>
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
						<cite className={styles.citation}>
							Originally published on the Inspirato Technology Blog,
							<br />
							February 1, 2023 | Ryan Brandle
							<br />
							UI/UX Developer @ Inspirato
						</cite>
						<p>
							CSS Grid is one of those native web tools that's incredibly powerful, but still surprisingly underused.
							I've been guilty of that myself. After all the work that went into its release over a decade ago (!), I
							realized it was time to dust off my grid skills and put them to work. Now? Im a big advocate—especially
							for layout-heavy components where grid just <em>makes sense</em>.
						</p>
						<p>
							This project was a perfect fit: a comparison card react component for multiple products on Inspirato's
							site that needed to be flexible, responsive, and visually clean.
						</p>
						<p>
							To see a simplified example of this component, check out my{' '}
							<a
								href='https://codepen.io/therealace_1/pen/RwyxvOL'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								CodePen demo
							</a>
							. Let's dig in!
						</p>
						<h2 className={styles.h2}>
							The
							<br />
							Challenge
						</h2>
						<p>
							Inspirato offers multiple products, and users need to compare them quickly to figure out which one is
							right for them. A traditional HTML table could technically do the job—but tables get clunky fast. They're
							rigid, hard to style, and on small screens, they can overwhelm folks with too much info all at once.
						</p>
						<p>
							We wanted something that felt premium—something that matched the elegance of the brand while staying
							digestible, flexible, and easy to scan.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h2 className={styles.h2}>
							The
							<br />
							Solution
						</h2>
						<p>
							We used <strong>CSS Grid</strong> as the structural foundation, but styled everything to <em>feel</em>{' '}
							like individual, side-by-side cards. This let us keep all the comparison logic across rows while breaking
							free from the stiffness of a table layout.
						</p>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.full.src}
							alt={data.images.full.alt}
							caption={data.images.full.caption}
						/>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title={
								<>
									"CSS Grid breaks the traditional sense of a comparison <code>&lt;table&gt;</code> while still giving
									you consistent rows that line up across columns."
								</>
							}
							titleAccent
						/>
						<h3 className={styles.h3}>Laying Out the Grid</h3>
						<p>
							The first challenge: the solution needed to be CMS-friendly. That meant the layout had to adapt to the
							number of cards the content team needed—two, three, four, you name it.
						</p>
						<p>We set up the CSS grid like this:</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.class}>.container</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>display</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>grid</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>grid-template-columns</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>repeat</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--number-of-columns</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>3</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>1fr</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>gap</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>0</span>{' '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--space-base</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							To make the column count dynamic, we passed the number of columns through a CSS variable (eg.{' '}
							<code>var(--number-of-columns)</code>)—mapped directly from CMS data using an inline style override.
						</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.keyword}>export</span> <span className={styles.keyword}>interface</span>{' '}
								<span className={styles.interface}>ComparisonGridProps</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>numberOfColumns</span>
								<span className={styles.punctuation}>?:</span> <span className={styles.type}>string</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// additional props...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.keyword}>const</span> <span className={styles.function}>setInlineStyles</span>{' '}
								<span className={styles.punctuation}>=</span> <span className={styles.punctuation}>(</span>
								<span className={styles.parameter}>styles</span>
								<span className={styles.punctuation}>:</span> <span className={styles.type}>Record</span>
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.type}>string</span>
								<span className={styles.punctuation}>,</span> <span className={styles.type}>any</span>
								<span className={styles.punctuation}>&gt;</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>=&gt;</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.keyword}>const</span> <span className={styles.variable}>updatedStyles</span>{' '}
								<span className={styles.punctuation}>=</span> <span className={styles.property}>Object</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>entries</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>styles</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>reduce</span>
								<span className={styles.punctuation}>(</span>
								{'\n    '}
								<span className={styles.punctuation}>(</span>
								<span className={styles.parameter}>acc</span>
								<span className={styles.punctuation}>,</span> <span className={styles.parameter}>curr</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>=&gt;</span>
								{'\n      '}
								<span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>1</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>!==</span>{' '}
								<span className={styles.keyword}>null</span> <span className={styles.operator}>&&</span>{' '}
								<span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>1</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>!==</span>{' '}
								<span className={styles.string}>'undefined'</span> <span className={styles.operator}>&&</span>{' '}
								<span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>1</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>!==</span>{' '}
								<span className={styles.keyword}>false</span> <span className={styles.operator}>&&</span>{' '}
								<span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>1</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>!==</span>{' '}
								<span className={styles.string}>''</span>
								{'\n        '}
								<span className={styles.punctuation}>?</span> <span className={styles.punctuation}>{'{'}</span>{' '}
								<span className={styles.punctuation}>...</span>
								<span className={styles.variable}>acc</span>
								<span className={styles.punctuation}>,</span> <span className={styles.punctuation}>[</span>
								<span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>0</span>
								<span className={styles.punctuation}>]</span>
								<span className={styles.punctuation}>]</span>
								<span className={styles.punctuation}>:</span> <span className={styles.variable}>curr</span>
								<span className={styles.punctuation}>[</span>
								<span className={styles.number}>1</span>
								<span className={styles.punctuation}>]</span> <span className={styles.punctuation}>{'}'}</span>
								{'\n        '}
								<span className={styles.punctuation}>:</span> <span className={styles.variable}>acc</span>
								<span className={styles.punctuation}>,</span>
								{'\n    '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.keyword}>if</span> <span className={styles.punctuation}>(</span>
								<span className={styles.property}>Object</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>entries</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>styles</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>length</span> <span className={styles.operator}>===</span>{' '}
								<span className={styles.number}>0</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n    '}
								<span className={styles.keyword}>return</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n  '}
								<span className={styles.keyword}>return</span> <span className={styles.variable}>updatedStyles</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n'}
								<span className={styles.keyword}>export</span> <span className={styles.keyword}>const</span>{' '}
								<span className={styles.component}>ComparisonGrid</span>
								<span className={styles.punctuation}>:</span> <span className={styles.type}>FC</span>
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.type}>ComparisonGridProps</span>
								<span className={styles.punctuation}>&gt;</span> <span className={styles.punctuation}>=</span>{' '}
								<span className={styles.punctuation}>(</span>
								<span className={styles.punctuation}>{'{'}</span> <span className={styles.parameter}>cmsContent</span>{' '}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>=&gt;</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.keyword}>return</span> <span className={styles.punctuation}>(</span>
								{'\n    '}
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.element}>section</span>
								{'\n      '}
								<span className={styles.attribute}>style</span>
								<span className={styles.punctuation}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.function}>setInlineStyles</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.punctuation}>{'{'}</span>
								{'\n        '}
								<span className={styles.string}>'--number-of-columns'</span>
								<span className={styles.punctuation}>:</span> <span className={styles.variable}>cmsContent</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>numberOfColumns</span>
								<span className={styles.punctuation}>,</span>
								{'\n      '}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n      '}
								<span className={styles.attribute}>className</span>
								<span className={styles.punctuation}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.function}>cn</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>styles</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>container</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n    '}
								<span className={styles.punctuation}>&gt;</span>
								{'\n      '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>children</span>
								<span className={styles.punctuation}>{'}'}</span>{' '}
								<span className={styles.comment}>// grid cells here...</span>
								{'\n    '}
								<span className={styles.punctuation}>&lt;/</span>
								<span className={styles.element}>section</span>
								<span className={styles.punctuation}>&gt;</span>
								{'\n  '}
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>;</span>
							</code>
						</pre>
						<div className={styles.sideImagesContainer}>
							<SideImage
								imgSrc={data.images.side.src}
								imgAlt={data.images.side.alt}
								caption={data.images.side.caption}
								imgRight
							>
								<h3 className={styles.h3}>The Grid Items</h3>
								<p>To pull off the "card" illusion, a few layout rules had to be followed:</p>
								<ol className={styles.ol}>
									<li>Every column (card) needed the same number and type of cells.</li>
									<li>Each card needed a header cell.</li>
									<li>Each card needed a footer cell.</li>
								</ol>
								<p>
									This consistency let each grid cell expand to match the tallest content in the <em>"row"</em>, keeping
									segments aligned across columns for easy side-by-side comparison.
								</p>
								<p>
									It also enabled us to apply unique styles to different parts of the card—like a dark top border on the
									header and aligned edge borders on the side cells—to visually stitch the whole thing together.
								</p>
							</SideImage>
						</div>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='"When cell types are stacked consistently, borders align and the grid feels like individual cards."'
							titleAccent
						/>
						<p>The CMS data would include an array of objects to fill out the grid cells accordingly.</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.keyword}>const</span> <span className={styles.variable}>gridItems</span>{' '}
								<span className={styles.punctuation}>=</span> <span className={styles.punctuation}>[</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>headerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>headerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>headerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>cell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>cell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>cell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>footerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>footerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>,</span>
								{'\n  '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.property}>footerCell</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n'}
								<span className={styles.punctuation}>]</span>
							</code>
						</pre>
						<p>Here's a quick look at how the styles came together:</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.class}>.cell</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>--cell-spacing</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--space-sm</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--outer-border</span>
								<span className={styles.punctuation}>:</span> <span className={styles.value}>solid</span>{' '}
								<span className={styles.value}>1px</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-gray</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--inner-border</span>
								<span className={styles.punctuation}>:</span> <span className={styles.value}>solid</span>{' '}
								<span className={styles.value}>1px</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-gray-light</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.property}>padding-top</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>padding-bottom</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>background-color</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-white</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>border-bottom</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--inner-border</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>border-left</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--outer-border</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>border-right</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--outer-border</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.class}>.headerCell</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>padding-left</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>padding-right</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>border</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--outer-border</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.class}>.footerCell</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>padding-left</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>padding-right</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--cell-spacing</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>border-bottom</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--outer-border</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<h3 className={styles.h3}>
							<span className={styles.noWrap}>
								Bells <br />
								<span className={styles.altFont}>&amp;</span>&nbsp;Whistles
							</span>
						</h3>
						<p>
							To give the component more life, we added dynamic pricing, an in-card toggle to swap various tiered
							content inside each card, and a sticky header options for extra usability. All of this was layered on top
							of the grid foundation without breaking the illusion.
						</p>
						<p>
							Of course, when the screen gets too narrow, a grid-based layout doesn't make sense anymore. For smaller
							screens, we restructured the layout into a swipeable carousel using the same dataset—keeping the
							experience clean, readable, and touch-friendly.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>Final Thoughts</h2>
					<p>
						CSS Grid might not always be the first layout tool that comes to mind—but it should be up there. It's
						incredibly flexible, logical to implement, and unlocks layout structures that just aren't possible (or fun)
						with flexbox alone.
					</p>
					<p>
						Hopefully, this gave you a clearer picture of how grid can be used in real-world components—and maybe even
						sparked a few ideas for your next layout challenge.
					</p>
					<h3 className={styles.h3}>
						<span className={styles.noWrap}>
							Examples <br />
							<span className={styles.altFont}>&amp;</span>&nbsp;Resources
						</span>
					</h3>
					<p>Here are a few examples and resources to help you get started on your own exploration.</p>
					<ul className={styles.ul}>
						<li>
							<a
								href='https://codepen.io/therealace_1/pen/RwyxvOL'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Card Layout with CSS Grid
							</a>{' '}
							- For a simplified code example, check out my CodePen.
						</li>
						<li>
							<a href='https://cssgrid.io/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								CSSgrid.io
							</a>{' '}
							- For those interested in learning more about CSS Grid, I highly recommend this free Wes Bos course.
						</li>
						<li>
							<a
								href='https://css-tricks.com/snippets/css/complete-guide-grid/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								CSS Grid Layout Guide
							</a>{' '}
							- As always, here's a great CSS-Tricks article to bookmark.
						</li>
					</ul>
					<p>Have fun and grid on!</p>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default ComparisonContent;
