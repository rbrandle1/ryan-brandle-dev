'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { brand as data } from '@/data';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import SideImage from '@/components/Article/SideImage/SideImage';
import MultiImage from '@/components/Article/MultiImage/MultiImage';
import styles from '../projects.module.scss';

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
					<div className={styles.subhead}>{data.text.descriptionShort}</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.heroImage)}
							accentBg
							src={data.images.hero.src}
							alt={data.images.hero.alt}
							caption={data.images.hero.caption}
							metaTags={data.tags}
							isHero
							placeholder='blur'
							priority
						/>
						<h2 className={styles.h2}>
							The
							<br />
							Problem
						</h2>
						<p>
							For years, I've been juggling code, career, and dad life—which meant a portfolio rebrand had taken a back
							seat, buried among cheerios, lost socks, and sticky fingerprints. A&nbsp;refresh was long overdue.
						</p>
						<p>
							Then came the industry-wide tech layoffs, including my own. Life handed out some lemons, so I decided to
							make some sweet, tasty, sticky-fingered lemonade.
						</p>
						<p>
							I used this opportunity to refocus my career priorities, learn some new tricks, and build a site that
							truly represents who I am and what I do best.
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
							With a fresh perspective, I set out to build an experience that unites my design roots with my engineering
							expertise. To create a system that reflects who I am—both as a person and a developer.
						</p>
						<div className={styles.sideImagesContainer}>
							<SideImage
								imgSrc={data.images.objectives.src}
								imgAlt={data.images.objectives.alt}
								caption={data.images.objectives.caption}
								imgRight
							>
								<h3 className={styles.h3}>
									Goals{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Objectives
									</span>
								</h3>
								<p>To keep the project focused, I established a set of goals, parameters, and objectives.</p>
								<p>
									<strong>Primary Goal</strong>
									<br />
									To build a modular design system of <em>simple, reusable ingredients</em> that create a harmonious and
									consistent user experience. One that's themeable, accessible, and aligned with modern web standards.
								</p>
								<p>
									<strong>Objectives</strong>
									<br />
									My system aims to suggest:
								</p>
								<ul className={styles.ul}>
									<li>A reflection of my roots in design and visual communication</li>
									<li>The fundamental principles of traditional design theory</li>
									<li>A strong sense of space, contrast, rhythm and harmony</li>
									<li>A simple yet impactful use of color</li>
									<li>Beautiful bold typography</li>
								</ul>
								<p>
									And of course, I wanted to infuse it with personality—my humor, attention to detail, love of music and
									inspiring design.
								</p>
							</SideImage>
						</div>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='Simple ingredients, endless possibilities.'
							titleAccent
						/>
						<h3 className={styles.h3}>
							Research{' '}
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Discovery
							</span>
						</h3>
						<p>
							Drawing inspiration from past experiences and some of my favorite brands, I began exploring ideas that
							embodied these parameters to the <em>smallest</em> detail.
						</p>
						<p>
							This included everything from typography, color, rhythm and spacing to logos, theme concepts, and
							accessibility validation. I wanted to challenge myself by creating a system rooted in black and
							white—where limited colors push creativity.
						</p>
						<p>
							One concept sparked from childhood memories of flipping through newspaper cinema ads. Each design had to
							fight for attention in a sea of black and white newsprint, yet somehow capture the movie's essence in a
							single color. Pure chaos, but beautiful in its own way.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.ad1.src}
								imgAlt1={data.images.ad1.alt}
								imgSrc2={data.images.prntwrks2.src}
								imgAlt2={data.images.prntwrks2.alt}
								imgSrc3={data.images.prntwrks.src}
								imgAlt3={data.images.prntwrks.alt}
								caption='Newspaper ads, Printworks London / Only'
							>
								<p>
									The topic of newspapers reminded me of the <em>Printworks London</em> brand, an old favorite of mine.
									This dance venue's identity honored the building's heritage as an old printing factory—bold and
									striking with a clear respect for traditional design principles.
								</p>
								<p>
									Their work resonated with my own history, my love for design and dance music making it a perfect
									springboard for exploration.
								</p>
							</MultiImage>
						</div>
						<div className={styles.sideImagesContainer}>
							<SideImage
								imgSrc={data.images.color.src}
								imgAlt={data.images.color.alt}
								caption={data.images.color.caption}
								imgRight
							>
								<h4 className={styles.h3}>
									Color{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Font
									</span>{' '}
									Exploration
								</h4>
								<p>
									I studied design when print was the primary force in the industry and the CMYK color system ruled
									modern printing presses. Together, cyan, magenta, yellow, and key (black) formed the core ink
									ingredients that create a wide spectrum of colors visible to the human eye.
								</p>
								<p>
									This concept aligned perfectly with my goal of simple, modular ingredients—fundamental colors serving
									as building blocks for endless possibilities, <em>just like the design system itself</em>.
								</p>
								<p>
									Not to mention these 'neon' colors were used heavily in the early 90's to make{' '}
									<strong>the most radical ski gear ever</strong>. Purple was added to provide more opportunity for
									theme exploration.
								</p>
								<p>
									In certain typographical situations, these colors did not pass WCAG accessibility validation. However,
									when carefully applied as accents to the black and white system, they passed... with flying colors,
									heyoooo!&nbsp;🙌
								</p>
							</SideImage>
						</div>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.font1.src}
								imgAlt1={data.images.font1.alt}
								imgSrc2={data.images.font2.src}
								imgAlt2={data.images.font2.alt}
								imgSrc3={data.images.font3.src}
								imgAlt3={data.images.font3.alt}
								imgSrc4={data.images.font4.src}
								imgAlt4={data.images.font4.alt}
								textRight
								caption='Exploring combinations of fonts and color.'
							>
								<h4 className={styles.h4}>Finding the right font</h4>
								<p>
									The purpose of this experiment was to discover font combinations with the right boldness, balance and
									rhythm.
								</p>
								<p>
									The usual questions filtered through...{' '}
									<em>Serif or sans serif? What would work best to meet my project goals?</em> Sans serif fonts are easy
									to read and more modern, while serifs can bring a traditional elegance. Finding the right balance
									between the two was critical.
								</p>
								<p>
									I explored various combinations, carefully avoiding anything resembling a 90's hair spray product.
								</p>
								<p>
									The final approach was a bold sans serif to lead, with a subtle serif for accents—mirroring my color
									strategy. Just enough to add visual excitement.
								</p>
							</MultiImage>
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								imgSrc4={data.images.hero.src}
								imgAlt4={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h4 className={styles.h3}>Logo Exploration</h4>
								<p>
									text here [ideation, concepts, mark, modularity and flexibility... color but also option for 1 color,
									good/bad/final, favicon]
								</p>
							</MultiImage>
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h3 className={styles.h3}>Discovery Boards</h3>
								<p>
									Bringing the pieces together. After fleshing out a few rounds of discovery, I decided on a direction
									that I felt accomplished the project goals. This process helped iron out many potential issues such as
									size restraints, font size and color combinations and limitations, to avoid running into larger issues
									down the road as I start coding the system.
								</p>
								<p>[sketching, mocking]</p>
								<p>
									After I established all the basics, I started constructing a more concrete set of pillars to build
									from.
								</p>
							</MultiImage>
						</div>
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
