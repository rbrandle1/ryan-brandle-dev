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
								<p>
									And of course, I wanted to infuse it with personality—my humor, attention to detail, love of music and
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
									The topic of newspapers reminded me of the{' '}
									<a
										href='https://printworkslondon.co.uk/'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Printworks London
									</a>{' '}
									brand, an old favorite of mine. This dance venue's identity honored the building's heritage as an old
									printing factory—bold and striking with a clear respect for traditional design principles.
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
									I studied design when print dominated the industry and the CMYK color system was the standard.
									Together, cyan, magenta, yellow, and key (black) formed the ingredients to create a wide spectrum of
									colors visible to the human eye.
								</p>
								<p>
									This concept aligned perfectly with my goal of simple, modular ingredients—fundamental colors serving
									as building blocks for endless possibilities, <em>just like the design system itself</em>.
								</p>
								<p>
									Purple was added to provide more opportunity for theme exploration. As an added bonus, these 'neon'
									colors were used heavily in the early 90's to make <strong>the raddest ski gear ever</strong>.
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
								imgSrc3={data.images.font4.src}
								imgAlt3={data.images.font4.alt}
								imgSrc4={data.images.font3.src}
								imgAlt4={data.images.font3.alt}
								textRight
								caption='Exploring combinations of fonts and color.'
							>
								<h4 className={styles.h3}>
									The
									<br />
									Type Hunt
								</h4>
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
						</div>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
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
									title—could be stacked, scaled, and styled independently while maintaining harmony. I explored ideas
									like typographic ligatures, mountain shapes, retro styling, pinewood derby cars, and pattern overlays.
								</p>
								<p>
									The mark, formed by two overlapping elements creating a 'B,' represented how simple components
									interact to form something greater. For smaller applications like favicons, a single-color version
									with thicker lines preserved legibility across all color themes.
								</p>
								<p>
									The final SVG-based logo ensured crisp rendering, leveraged CSS and JS enabling precise style control
									across applications.
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
							together. Solving scaling issues and combination limitations early on helps avoid much bigger problems
							down the road.
						</p>
						<p>
							I created a two-tiered token system (primitives and semantic) in Figma with clear and purposeful naming
							conventions—making it easy to update and seamlessly translate into their coded counterparts.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.breakout, styles.flowOffset)}>
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
									Wireframing and multiple mockup iterations came next, using the token system to shape a few basic
									components and a responsive design. Since I'm flying solo on this project—
									<em>and let's be honest, I'd rather be coding</em>—I skipped the usual Figma component library step
									and went straight into development.
								</p>
							</MultiImage>
						</div>
						<h2 className={styles.h2}>Defining the Stack</h2>
						<p>
							My tech stack focused on showcasing a design system approach. Instead of making a simple static site, I
							chose to explore the latest versions of{' '}
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
							Next.js offered a straightforward setup with robust performance capabilities and the flexibility to add
							specific dependencies from the start. In the spirit of exploring new technologies, Turbopack was chosen
							over Webpack for bundling.
						</p>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='Building beyond the ordinary to reveal the intricacies of a cohesive system.'
							titleAccent
						/>
						<p>
							State management was another key consideration. Initially, basic prop drilling seemed sufficient due to
							the app's simplicity. However, the need for multiple components to access shared state, like theme state,
							led to the use of React Context.
						</p>
						<p>
							A rough data structure was also planned, organizing and modularizing types, imagery, and styles before
							finalizing the tech stack and beginning app development.
						</p>
						<p>
							<em>Is this overkill for a portfolio site?</em> On the surface, possibly. But the goal is to highlight not
							just the end result, but all the intricacies and details involved in crafting a cohesive, functional, and
							flexible design system.
						</p>
						<h3 className={styles.h3}>
							Into
							<br />
							the Code
						</h3>
						<p>
							I converted my tiered token system into code, using CSS Modules and custom properties as the primary
							variable structure.
						</p>
						<p>
							'Primitives' were referenced as semantic tokens, and used in top-level 'utility' partials with global
							mixins. These partials, organized into SCSS files like <em>_elements.scss</em>, <em>_layout.scss</em>, and
							<em>_typography.scss</em>, were imported into component-level modules as needed.
						</p>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.tokenCode.src}
							alt={data.images.tokenCode.alt}
							caption={data.images.tokenCode.caption}
						/>
						<p>
							Placing global theme variables in the semantic token file enabled top-level theme changes to cascade
							through components, and while maintaining the option for component-level theme declarations if needed.
						</p>
						<p>
							I created a basic{' '}
							<Link className={styles.link} href={'/style'} target='_blank'>
								living style guide
							</Link>{' '}
							to reference and ensure system elements functioned properly, allowing stress-testing of the style system,
							theme changes, and animations before component construction. For a full team, tools like Storybook or
							ZeroHeight would be ideal for documentation.
						</p>
						<p>
							<strong>Regarding CSS Modules:</strong> A CSS Module-based style system with custom properties is my
							preferred approach. It maintains a separation of concerns while{' '}
							<em>maximizing flexibility and control</em>
							over styles. Pairing this with native CSS features like custom properties helps future-proof your code,
							avoiding massive refactoring and tech-debt issues. It also allows developers to fully leverage the power
							of CSS, keeping it clean, modular, and easy to build component systems.
						</p>
						<h3 className={styles.h3}>Component Creation</h3>
						<p>
							With ingredients prepped and ready to rock, it was time to start cooking! I began with atomic components
							like buttons, gradually working up to more complex ones like headers, footers, and project cards.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.component2.src}
								imgAlt1={data.images.component2.alt}
								imgSrc2={data.images.component3.src}
								imgAlt2={data.images.component3.alt}
								imgSrc3={data.images.componentCode.src}
								imgAlt3={data.images.componentCode.alt}
								imgSrc4={data.images.component4.src}
								imgAlt4={data.images.component4.alt}
								caption='Header, Featured Project, Button,  and Footer components'
							>
								<p>
									These components were built using responsive and fluid design techniques that ensured a seamless
									experience across all devices. Each component was controlled by props that toggled features or
									achieved specific layouts. They were customizable where needed, giving developers (just me in this
									case) freedom while maintaining design integrity.
								</p>
								<p>
									For components requiring theme state, React Context enabled dynamic features like animated logos
									during theme changes and subtle style updates based on user preferences.
								</p>
							</MultiImage>
						</div>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.optimization.src}
								imgAlt={data.images.optimization.alt}
								caption={data.images.optimization.caption}
							>
								<h3 className={styles.h3}>
									Fast, Fluid{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Accessible
									</span>
								</h3>
								<p>
									To keep the site speedy and responsive, I leveraged the Next.js{' '}
									<a
										href='https://nextjs.org/docs/pages/api-reference/components/image'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Image component
									</a>{' '}
									for optimized image loading and sizing, using blur effects and data URLs where appropriate. Adding to
									this performance boost, I implemented a combination of server and client-side rendering, along with
									dynamic loading for below-fold components, which helped minimize initial paint times.
								</p>
								<p>
									Accessibility was baked in from the start, with semantic HTML and appropriate ARIA attributes
									providing an optimal experience for keyboard navigation and screen readers.
								</p>
								<p>
									To ensure everything worked smoothly, I regularly ran performance and accessibility checks using
									Chrome Lighthouse and{' '}
									<a
										href='https://accessibilityinsights.io/docs/web/overview/'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										Accessibility Insights
									</a>
									, catching UI issues early and maintaining a seamless user experience.
								</p>
							</SideImage>
							<SideImage
								imgSrc={data.images.optimization.src}
								imgAlt={data.images.optimization.alt}
								caption={data.images.optimization.caption}
								imgRight
							>
								<h3 className={styles.h3}>Squashin' Bugs</h3>
								<p>
									Every ambitious project comes with its share of challenges. While bugfixing and smoothing animations,
									I encountered some interesting hurdles with Turbopack. For starters, it{' '}
									<a
										href='https://nextjs.org/docs/app/api-reference/turbopack#unsupported-and-unplanned-features'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										did not support
									</a>{' '}
									ICSS ':export' pseudo-selectors, which I typically used to share viewport values between SCSS and JS
									files. Without a clean solution, I had to duplicate some values—not my favorite workaround!
								</p>
								<p>
									The animation quirks were another fun surprise. Turbopack wasn't playing nice with keyframe rules,
									whether at the component level or in global CSS partials. <em>The fix?</em> Loading animations as a
									separate stylesheet on page load. Not elegant, but it did the trick.
								</p>
								<p>
									Finally, there was the stubborn theme state bug that stuck around. The challenge was preventing a
									FOUC, <em>Flash of Unstyled Content</em>, during initial page load when setting theme values from
									localStorage. At the time of launch, there was a 500 error on initial load, though the app functioned
									normally. It remains a puzzle I looked forward to solving properly in the future.
								</p>
							</SideImage>
						</div>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						This project has an awesome ride - a perfect blend of past experience and fresh exploration. While I've
						spent years bringing design to life through code, it's especially challenging to build a reflection of
						yourself, your wins, your stumbles, and everything in between.
					</p>
					<p>
						Along the way, I expanded my toolkit with some updated CSS grid layouts, discovered the magic of 'lh' values
						for cleaner typography, and dove into some sweet Next.js and React enhancements. Though the project is
						technically 'done,' it's really just the beginning. Even after years in the field, there's always something
						new to try out and explore.
					</p>
					<p>
						<strong>Resources &amp; Inspiration:</strong>
						<br />
						Much ❤️ and respect to the people who've helped inspire this project and some helpful tools used along the
						way:
					</p>
					<ul className={styles.ul}>
						<li>
							<a href='https://ryanmulligan.dev/' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Ryan Mulligan
							</a>{' '}
							- Past mentor and code beast
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
							- Super helpful fluid type generator
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
							- For those smooth CSS gradients
						</li>
					</ul>
					<p>
						Feel free to poke around and explore! Your{' '}
						<a href='mailto:hello@example.com' className={styles.link}>
							thoughts and feedback
						</a>{' '}
						are always welcome.
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
