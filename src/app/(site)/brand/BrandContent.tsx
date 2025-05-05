'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { brand as data } from '@/data';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
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
						<span className={cn(styles.altFont, styles.top)}>New Site,</span>
						<br />
						So&nbsp;Fresh{' '}
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
							Challenge
						</h2>
						<p>
							For years, I've been juggling code, career, and dad life—which meant a portfolio rebrand had taken a back
							seat, buried among cheerios, lost socks, and sticky fingerprints. A&nbsp;refresh was long overdue.
						</p>
						<p>
							Then came the industry-wide tech layoffs, including my own. Life handed out some lemons, so I decided to
							make some tasty, sticky-fingered lemonade.
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
							With a fresh perspective, I set out to build an experience that unites my design roots with my engineering
							expertise. To create a system that reflects who I am—both as a person and a developer.
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
								<p>To keep the project focused, I established a set of goals, parameters, and objectives.</p>
								<p>
									<strong>Primary Goal</strong>
									<br />
									To build a modular design system of <em>simple, reusable ingredients</em> that create a harmonious and
									consistent user experience. One that's themeable, accessible, and aligned with modern web standards.
								</p>
								<p>
									<strong>Objectives</strong>
									<br />
									My system aims to suggest:
								</p>
								<ul className={styles.ul}>
									<li>A reflection of my roots in design and visual communication</li>
									<li>The fundamental principles of traditional design theory</li>
									<li>A strong sense of space, contrast, rhythm and harmony</li>
									<li>A simple yet impactful use of color</li>
									<li>Beautiful bold typography</li>
								</ul>
								<p>And of course, I wanted to infuse it with my humor, attention to detail, and love of music.</p>
							</SideImage>
						</div>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title={
								<>
									Simple ingredients,
									<br />
									endless possibilities.
								</>
							}
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
							accessibility validation. I wanted to challenge myself with a system rooted in black and white—where
							limited colors push creativity.
						</p>
						<div className={styles.multiImagesContainer}>
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
									I remember flipping through newspaper cinema ads as a kid. Each ad fought for attention in a sea of
									black and white print, yet still captured the movie's brand with a single color. Pure chaos, and
									beautiful in its own way.
								</p>
								<p>
									This topic of newspaper ads reminded me of the{' '}
									<a
										href='https://printworkslondon.co.uk/'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Printworks London
									</a>{' '}
									brand, an old favorite of mine. It referenced the building's heritage as an old printing factory
									turned dance venue—bold and striking with a clear respect for traditional design principles.
								</p>
								<p>
									Their work resonated with my own history, my love for design and dance music making it a perfect
									springboard for exploration.
								</p>
							</MultiImage>
						</div>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.color.src}
								imgAlt={data.images.color.alt}
								caption={data.images.color.caption}
								imgRight
							>
								<h4 className={styles.h3}>Retro Color Revival</h4>
								<p>
									I've always loved the CMYK color system and thought it would make a great foundation for my themes.
									Back when print ruled the universe, cyan, magenta, yellow, and key (black) formed the ingredients to
									create a wide spectrum of colors visible to the human eye. I tossed purple in there as well to expand
									the theme options.
								</p>
								<p>
									This concept aligned perfectly with my goal of simple, modular ingredients—fundamental colors serving
									as building blocks for endless possibilities, <em>just like the design system itself</em>.
								</p>
								<p>
									As an added bonus, these colors were also used heavily in the early 90's to make{' '}
									<strong>the raddest ski gear ever</strong>.
								</p>
								<p>
									They were carefully applied as accents to the black and white system, and passed WCAG validation...
									with flying colors, heyoooo!&nbsp;🙌
								</p>
							</SideImage>
						</div>
						<h4 className={styles.h3}>
							The
							<br />
							Type Hunt
						</h4>
						<p>
							To uncover the right boldness, balance and rhythm I was looking for, I explored a few font combinations.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset)}>
							<MultiImage
								imgSrc1={data.images.font1.src}
								imgAlt1={data.images.font1.alt}
								imgSrc2={data.images.font2.src}
								imgAlt2={data.images.font2.alt}
								imgSrc3={data.images.font4.src}
								imgAlt3={data.images.font4.alt}
								imgSrc4={data.images.font3.src}
								imgAlt4={data.images.font3.alt}
								textRight
								caption='Exploring combinations of fonts and color.'
							>
								<p>
									The usual questions filtered through...{' '}
									<em>Serif or sans serif? What would work best to meet my project goals?</em> Sans serif fonts are easy
									to read and more modern, while serifs can bring a traditional elegance. Finding the right balance
									while avoiding anything resembling a 90's hair spray product was critical.
								</p>
								<p>
									The final approach was a bold sans serif to lead, with a subtle serif for accents—mirroring my color
									strategy. Just enough to add visual excitement.
								</p>
							</MultiImage>
						</div>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset)}>
							<MultiImage
								imgSrc1={data.images.logo2.src}
								imgAlt1={data.images.logo2.alt}
								imgSrc2={data.images.logo1.src}
								imgAlt2={data.images.logo1.alt}
								imgSrc3={data.images.logo3.src}
								imgAlt3={data.images.logo3.alt}
								imgSrc4={data.images.logo4.src}
								imgAlt4={data.images.logo4.alt}
								caption='Logo ideation, final logos and favicons'
							>
								<h4 className={styles.h3}>
									Logo
									<br />
									Ideation
								</h4>
								<p>
									My logo concept reflected a component library's dynamic relationships. Each element—mark, name, and
									title—could be stacked, scaled, and styled independently while maintaining harmony. I explored using
									typographic ligatures, mountain shapes, pinewood derby cars, and more!
								</p>
								<p>
									The mark was formed by two overlapping elements creating a 'B,' representing how simple components
									interact to form something greater.
								</p>
								<p>
									For other use-cases like favicons, a thicker one-color version preserved legibility across color
									themes.
								</p>
								<p>
									The final SVG-based logo ensured crystal clear rendering, and leveraged CSS and JS for precise style
									control across applications.
								</p>
							</MultiImage>
						</div>
						<h4 className={styles.h3}>
							All
							<br />
							Together Now
						</h4>
						<p>
							With the core ingredients in place—typography, color, and logo—I started fine-tuning how they worked
							together. I tackled some scaling and combination issues early on to avoid much bigger problems down the
							road.
						</p>
						<div className={styles.multiImagesContainer}>
							<MultiImage
								imgSrc1={data.images.tokens.src}
								imgAlt1={data.images.tokens.alt}
								imgSrc2={data.images.sketchMock.src}
								imgAlt2={data.images.sketchMock.alt}
								imgSrc3={data.images.mock.src}
								imgAlt3={data.images.mock.alt}
								caption='Figma token system, wireframing sketches, and homepage mockup.'
							>
								<p>
									I created a <strong>two-tiered token system</strong> (primitives and semantic) in Figma with clear
									naming conventions—making it easy to update and translate into their coded counterparts.
								</p>
								<p>
									Wireframing and mockup iterations came next, using the token system to flesh-out some components and
									responsive layouts. Since I'm flying solo on this project, I skipped making a Figma component library
									and dove straight into development.
								</p>
							</MultiImage>
						</div>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='Building beyond the ordinary to reveal the intricacies of a cohesive system.'
							titleAccent
						/>
						<h3 className={styles.h3}>Defining the Stack</h3>
						<p>
							Before jumping into code, I needed to establish the tools and strategies I'd use to make my site. My stack
							focused on showcasing a design system approach. Instead of making a simple static site, I chose to explore
							the latest versions of{' '}
							<a href='https://react.dev/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								React
							</a>{' '}
							(v19) and{' '}
							<a href='https://nextjs.org/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Next.js
							</a>{' '}
							(v15) with TypeScript, SASS, and CSS Modules for the front-end, deploying with{' '}
							<a href='https://vercel.com/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Vercel
							</a>
							.
						</p>
						<p>
							Next.js offered a bare-bones setup with awesome performance capabilities and the flexibility to add
							dependencies from the get-go. In the spirit of exploring new technologies, I chose Turbopack for bundling
							(<em>which caused a few headaches...</em> see "Squashin' Bugs" below).
						</p>
						<p>
							State management was another major consideration. Initially, prop drilling seemed sufficient due to the
							app's simplicity. However, I used{' '}
							<a
								href='https://react.dev/learn/passing-data-deeply-with-context'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								React Context
							</a>{' '}
							to allow multiple components to access shared state.
						</p>
						<p>
							Finally, I made a rough data structure to organize types, imagery, and styles before finalizing my stack
							and beginning development.
						</p>
						<h3 className={cn(styles.h3, styles.soloHeader)}>
							Into
							<br />
							the Code
						</h3>
						<p>I converted my tokens into code, using CSS Modules and custom properties as the variable structure.</p>
						<p>Functional 'primitive' tokens were given meaningful names in a 'semantic' token file.</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.comment}>/* primitive.scss */</span>
								{'\n'}
								<span className={styles.class}>:root</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>--p-font-display</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>'Oswald'</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>sans-serif</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--p-font-sans</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>'Source Sans 3'</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>sans-serif</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--p-font-serif</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>'Source Serif 4'</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>serif</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--p-font-mono</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>'Fira Code'</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>monospace</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// continued with colors, spacing, etc...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.comment}>/* semantic.scss */</span>
								{'\n'}
								<span className={styles.comment}>// Mapped "primitives" into semantic variables.</span>
								{'\n'}
								<span className={styles.class}>:root</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>--font-header</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-font-display</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--font-body</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-font-sans</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--font-alt</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-font-serif</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.property}>--font-mono</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-font-mono</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// etc...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							I imported <code>semantic.scss</code> into top-level 'utility' partials (<code>_elements.scss</code>,{' '}
							<code>_layout.scss</code>, <code>_typography.scss</code>, etc.) and used them to create global mixins I'd
							be using throughout the project.
						</p>
						<p>
							My utilities could then be imported <code>@use '@/styles/utils/element';</code> into component-level
							modules as needed.
						</p>
						<p>
							Placing global theme variables in the <code>semantic.scss</code> enabled top-level theme changes to
							cascade through components, while maintaining the option for component-level theme declarations if needed.
						</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.comment}>/* semantic.scss */</span>
								{'\n'}
								<span className={styles.class}>:root</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.comment}>// ...semantic tokens above</span>
								{'\n\n  '}
								<span className={styles.selector}>[data-section='dark']</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n    '}
								<span className={styles.property}>--color-primary</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-color-white</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>--color-secondary</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-color-black</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.comment}>// etc...</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n  '}
								<span className={styles.selector}>[data-theme='c']</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n    '}
								<span className={styles.property}>--color-accent</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--p-color-cyan-500</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.property}>--button-background-hover</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-accent</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.comment}>// etc...</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							I created a basic{' '}
							<Link className={styles.link} href={'/style'} target='_blank'>
								living style demo
							</Link>{' '}
							to stress-test styles and ensure they functioned properly with theme changes, and animations before
							building components. For a full team, I would typically use tools like Storybook for documentation.
						</p>
						<p>
							<strong>Regarding CSS Modules:</strong> A CSS Module-based style system with custom properties is my
							preferred approach. It maintains a separation of concerns while{' '}
							<em>maximizing flexibility and control</em> over styles. Pairing this with native CSS features like custom
							properties helps future-proof code, avoiding massive refactoring and tech-debt issues. It enables teams to
							fully leverage the power of CSS, keeping it clean, adaptable, and easy to build component systems.
						</p>
						<h3 className={cn(styles.h3, styles.soloHeader)}>Component Creation</h3>
						<p>
							With ingredients prepped and ready to rock, it was time to start cooking! I set up atomic components like
							buttons first, then gradually worked up to more complex ones like headers, footers, and cards.
						</p>
						<div className={styles.multiImagesContainer}>
							<MultiImage
								imgSrc1={data.images.component2.src}
								imgAlt1={data.images.component2.alt}
								imgSrc2={data.images.component3.src}
								imgAlt2={data.images.component3.alt}
								imgSrc3={data.images.component4.src}
								imgAlt3={data.images.component4.alt}
								caption='Header, Featured Project, Button,  and Footer components'
							>
								<p>
									These components were built with responsive and fluid design techniques to ensure a seamless
									experience across all devices.
								</p>
							</MultiImage>
						</div>
						<p>
							To achieve specific layouts, component features could be toggled on and off or controlled with simple
							props. They were customizable where needed, giving developers (<em>just me in this case</em>) freedom
							while maintaining design integrity.
						</p>
						<pre className={styles.syntax}>
							<code>
								<span className={styles.comment}>/* page.tsx */</span>
								{'\n'}
								<span className={styles.keyword}>import</span> <span className={styles.function}>dynamic</span>{' '}
								<span className={styles.keyword}>from</span> <span className={styles.string}>"next/dynamic"</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.keyword}>import</span> <span className={styles.punctuation}>{'{'}</span>{' '}
								<span className={styles.variable}>brand</span> <span className={styles.punctuation}>{'}'}</span>{' '}
								<span className={styles.keyword}>from</span> <span className={styles.string}>"@/data"</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.keyword}>import</span> <span className={styles.variable}>styles</span>{' '}
								<span className={styles.keyword}>from</span> <span className={styles.string}>"./home.module.scss"</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n'}
								<span className={styles.comment}>// dynamic import for performance boost</span>
								{'\n'}
								<span className={styles.keyword}>const</span> <span className={styles.variable}>FeaturedProject</span>{' '}
								<span className={styles.operator}>=</span> <span className={styles.function}>dynamic</span>
								<span className={styles.punctuation}>(()</span> <span className={styles.operator}>{'=>'}</span>{' '}
								<span className={styles.function}>import</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>"@/components/FeaturedProject/FeaturedProject"</span>
								<span className={styles.punctuation}>),</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>ssr</span>
								<span className={styles.punctuation}>:</span> <span className={styles.boolean}>true</span>
								<span className={styles.punctuation}>,</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>);</span>
								{'\n\n'}
								<span className={styles.keyword}>export default function</span>{' '}
								<span className={styles.function}>Home</span>
								<span className={styles.punctuation}>()</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.comment}>// variables, hooks, etc...</span>
								{'\n\n  '}
								<span className={styles.keyword}>return</span> <span className={styles.punctuation}>(</span>
								{'\n    '}
								<span className={styles.tag}>&lt;section&gt;</span>
								{'\n      '}
								<span className={styles.tag}>&lt;div</span> <span className={styles.attribute}>className</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>styles</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>containerGrid</span>
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.tag}>&gt;</span>
								{'\n        '}
								<span className={styles.tag}>&lt;FeaturedProject</span>
								{'\n          '}
								<span className={styles.attribute}>id</span>
								<span className={styles.operator}>=</span>
								<span className={styles.string}>"brand"</span>
								{'\n          '}
								<span className={styles.attribute}>className</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>styles</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>breakoutXl</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>title</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>text</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>title</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>accessibleTitle</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>text</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>title</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>description</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>text</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>description</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>metaTags</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>tags</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>imgSrc</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>images</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>hero</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>src</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>imgAlt</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>images</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>hero</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>alt</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>caption</span>
								<span className={styles.operator}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>brand</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>images</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>hero</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.property}>caption</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n          '}
								<span className={styles.attribute}>buttonText</span>
								<span className={styles.operator}>=</span>
								<span className={styles.string}>"Explore"</span>
								{'\n          '}
								<span className={styles.attribute}>href</span>
								<span className={styles.operator}>=</span>
								<span className={styles.string}>"/brand?from=brand"</span>
								{'\n          '}
								<span className={styles.attribute}>hasCropIcon</span>
								{'\n          '}
								<span className={styles.attribute}>accentBg</span>
								{'\n        '}
								<span className={styles.tag}>/&gt;</span>
								{'\n      '}
								<span className={styles.tag}>&lt;/div&gt;</span>
								{'\n    '}
								<span className={styles.tag}>&lt;/section&gt;</span>
								{'\n  '}
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>
							For components requiring theme state, <code>useContext()</code> enabled dynamic features like animated
							logos during theme changes and subtle style updates based on user preferences.
						</p>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.optimization.src}
								imgAlt={data.images.optimization.alt}
								caption={data.images.optimization.caption}
								imgRight
							>
								<h3 className={styles.h3}>
									Fast, Fluid{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Accessible
									</span>
								</h3>
								<p>
									To keep the site speedy and responsive, I leaned into the Next.js{' '}
									<a
										href='https://nextjs.org/docs/pages/api-reference/components/image'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Image component
									</a>{' '}
									for optimized loading, sizing, blur effects and data URLs where appropriate. I also implemented a
									combination of server and client-side rendering, along with dynamic loading for out-of-view
									components, which helped minimize initial paint times.
								</p>
								<p>
									Accessibility was baked in from the start, with semantic HTML and ARIA attributes providing an optimal
									experience for keyboard navigation and screen readers.
								</p>
								<p>
									To ensure everything worked smoothly, I ran performance and accessibility checks using Chrome
									Lighthouse and{' '}
									<a
										href='https://accessibilityinsights.io/docs/web/overview/'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Accessibility Insights
									</a>
									, catching UI issues early and maintaining a pleasant user experience.
								</p>
							</SideImage>
						</div>
						<h3 className={styles.h3}>Squashin' Bugs</h3>
						<p>
							Every project comes with its share of challenges. While bugfixing and smoothing animations, I ran into
							some interesting hurdles with Turbopack. For starters, it{' '}
							<a
								href='https://nextjs.org/docs/app/api-reference/turbopack#unsupported-and-unplanned-features'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								didn't support
							</a>{' '}
							ICSS <code>:export</code> pseudo-selectors, which I typically used to share viewport values between SCSS
							and JS files. Without a clean solution, I had to duplicate some values—not my favorite workaround!
						</p>
						<p>
							The animation kinks were another fun surprise. Turbopack wasn't playing nice with <code>@keyframes</code>{' '}
							rules, whether at the component level or in global CSS partials. <em>The fix?</em> Loading animations as a
							separate stylesheet on page load. Not elegant, but it did the trick.
						</p>
						<p>
							Finally, there was a stubborn theme state bug that stuck around. The challenge was preventing a FOUC,{' '}
							<em>Flash of Unstyled Content</em>, during initial page load when setting theme values from{' '}
							<code>localStorage</code>. At the time of launch, there was a 500 error on initial load, even though the
							app functioned normally. I'm still puzzled by it but look forward to a proper solution in the future.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						This project has been an epic ride - the perfect blend of past experience with fresh exploration. While I've
						spent years as a Design Engineer, it's especially challenging to build a reflection of yourself, your wins,
						your stumbles, and everything in between.
					</p>
					<LargeImage
						className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
						src={data.images.final.src}
						alt={data.images.final.alt}
					/>
					<p>
						Throughout the journey, I expanded my toolkit with some new CSS grid layouts, discovered the magic of{' '}
						<code>lh</code> values for better typographical rhythm, and dove into some sweet Next.js and React
						enhancements.
					</p>
					<p>
						Though the project is technically 'done,' it's really just the beginning. Even after years in the field,
						there's always something new to try out and explore.
					</p>
					<p>
						You can{' '}
						<a
							href='https://github.com/rbrandle1/ryan-brandle-dev'
							className={styles.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							view my site repo
						</a>{' '}
						in its entirety on Github. Feel free to poke around! Your{' '}
						<a href='mailto:hello@example.com' className={styles.link}>
							thoughts and feedback
						</a>{' '}
						are always welcome.
					</p>
					<p>
						Much ❤️ and respect to the people who've helped inspire this project and some helpful tools I used along the
						way:
					</p>
					<ul className={styles.ul}>
						<li>
							<a href='https://ryanmulligan.dev/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Ryan Mulligan
							</a>{' '}
							- Past Mentor & Code Maestro
						</li>
						<li>
							<a href='https://www.joshwcomeau.com/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Josh Comeau
							</a>{' '}
							- Front-End Guru
						</li>
						<li>
							<a href='https://thinkdobecreate.com/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Stephanie Eckles
							</a>{' '}
							- Front-End Engineer
						</li>
						<li>
							<a
								href='https://www.fluid-type-scale.com/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Fluid Type Scale
							</a>{' '}
							- Super helpful type generator
						</li>
						<li>
							<a
								href='https://www.joshwcomeau.com/gradient-generator/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Gradient Generator
							</a>{' '}
							- For those <em>oh-so-smooth</em> CSS gradients
						</li>
					</ul>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default BrandContent;
