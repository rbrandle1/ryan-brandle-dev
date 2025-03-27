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
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='I decided to focus on the core ingredients that make a system functional and easy to use.'
							titleAccent
						/>
						<h3 className={styles.h3}>
							Research{' '}
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Discovery
							</span>
						</h3>
						<p>
							I began gathering inspiration and exploring ideas that fit my parameters down to the <em>smallest</em>{' '}
							ingredient.
						</p>
						<p>
							This included font and color explorations, accessibility validation, theme and mode strategies, visual
							rhythm and tone experimentation, animation concepts, creation of icons, logos, discovery boards, and more!
						</p>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.hero.src}
								imgAlt={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
								imgRight
							>
								<h4 className={styles.h3}>Getting Inspired</h4>
								<p>
									about Printworks, big, bold, in your face rock posters, but done with taste… Black and White is hard
									for a reason. I originally started back in the days when print design was dominant, so this touches on
									that aspect of my life.
								</p>
								<p>[printworks, cmyk, printing press, etc…]</p>
							</SideImage>
						</div>
						<h4 className={styles.h3}>
							Font{' '}
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Color
							</span>{' '}
							Exploration
						</h4>
						<p>
							For font… striking the right spacial system with rhythm and tone.mention accessibility considerations and
							WCAG compliance, color and theme strategies… why black and white and how it was challenging. Include
							decision over light/dark modes due to contrast already
						</p>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							{/* <MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h4 className={styles.h3}>Get Inspired</h4>
								<p>
									About Printworks, big, bold, in your face rock posters, but done with taste… Black and White is hard
									for a reason. I originally started back in the days when print design was dominant, so this touches on
									that aspect of my life.
								</p>
								<p>[printworks, cmyk, printing press, etc…]</p>
							</MultiImage> */}
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								imgSrc4={data.images.hero.src}
								imgAlt4={data.images.hero.alt}
								textRight
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								{/* <h4 className={styles.h3}>
									Font{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Color
									</span>{' '}
									Exploration
								</h4> */}
								<p>
									about Printworks, big, bold, in your face rock posters, but done with taste… Black and White is hard
									for a reason. I originally started back in the days when print design was dominant, so this touches on
									that aspect of my life.
								</p>
								<p>
									For font… striking the right spacial system with rhythm and tone.mention accessibility considerations
									and WCAG compliance, color and theme strategies… why black and white and how it was challenging.
									Include decision over light/dark modes due to contrast already
								</p>
								<p>
									For font… striking the right spacial system with rhythm and tone.mention accessibility considerations
									and WCAG compliance, color and theme strategies… why black and white and how it was challenging.
									Include decision over light/dark modes due to contrast already
								</p>
								<p>[some text here with images to the right… or the 3 or 4 up if enough]</p>
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
								<p>text here [ideation, concepts, good/bad/final, favicon]</p>
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
						{/* <p>
							This included font and color explorations, accessibility validation, theme and mode strategies, visual
							rhythm and tone experimentation, animation concepts, creation of icons, logos, discovery boards, and more!
						</p> */}
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
