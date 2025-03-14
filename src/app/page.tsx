import cn from 'classnames';
import dynamic from 'next/dynamic';
import Callout from '@/components/Callout/Callout';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import { inspImages, cfImages, brandImages, flashcardsImages, codepenImages, comparisonImages } from '@/data/images';
import styles from './home.module.scss';

const FeaturedProject = dynamic(() => import('@/components/FeaturedProject/FeaturedProject'), {
	ssr: true,
});

const ProjectCard = dynamic(() => import('@/components/ProjectCard/ProjectCard'), {
	ssr: true,
});

// Help me understand what the best job title is for the following characteristics:

// • A maker of web interfaces
// • A developer with design skills and background
// • A developer with UX background
// • Creates design systems and tools for other developers to use creating consistency and quality product execution
// • Skills include HTML, CSS, React, Design, Typography, Figma, Storybook, Modular Code, React components

// Areas where this person differs from typical front-end developers is that this person has a strong sense of visual product and ux design. This person does not have experience with back-end code and remains in the front of the front-end pairing well with design system teams and product design teams.
// ChatGPT said:
// The best job title for this role would be:

// "Design Engineer"
// This title accurately reflects the blend of front-end development, design, UX, and design systems work. It’s a common title used for engineers who bridge the gap between design and development, focusing on UI implementation, component libraries, and design system scalability.

// Alternative Titles (depending on company culture and emphasis):
// UX Engineer – If the role leans more toward user experience and interaction design.
// UI Engineer – If the focus is on implementing user interface components with high visual fidelity.
// Front-End Design Engineer – If you want to emphasize the engineering + design blend.
// Design Systems Engineer – If the primary responsibility is creating and maintaining design systems.
// Creative Developer – More common in agencies or startups with a strong design focus.
// Why "Design Engineer"?
// You’re not just a front-end developer; you have a strong UX and visual design sense.
// You create tools, components, and systems for other developers and designers.
// You work closely with designers and design system teams rather than backend teams.
// You think in components (React, Storybook, modular design).
// If you're looking to define your career path, Design Engineer is an emerging and respected title that aligns perfectly with your skill set. 🚀

/* Todo:
* * CONTENT CREATION:
* Feedback: Incorp "building component libraries" into the mix?
* Feedback: Don't forget about building for the user... baking in good ux with everything I do... read my linkedin or rez for ideas on how to sprinkle this in descriptions. Also, look at the info in purple above... some usable content in there.
* Feedback: Take "Dabblings" out... kind of cheesy. Something more edgy or leave out.
* Feedback: About page, put design last, focus on engineering first.
* Feedback: Think about what is the power of design and ux and how to work that into about.
* Feedback: Tone down the rabid wolverine... but still do something to suggest crazy fun boys.
* Feedback: Polish that shit... Is that really the #1 selling point? Maybe focus more on engineering modular systems that are easy to use.
* Do not come across as too arrogant. Polish, So fresh, So clean, Too 🔥 To Brandle*, etc. Might need to tone it down.
* Add a picture to about? Me and the boys in nica?
* Find or make a way to suggest polish... a can of polish? a rag? Put this on the right side of the hero section.
* For my rebrand, create a cool background image, a gradient with my logo svg. Perhaps it's possible to link it into the theme change! Or... make a prop that can be used for transparent imagery... and that could utilize the accent colors as a background color or background-image (gradient, etc)... Think of a hand holding a phone with a gradient background...
* How to implement codepen pens... hero?
* Make all pages with images and text content.
* Finalize all home text and hero text.
* 
* 
* MUST FIX localstorage issue as it is causing a build error before performance audits can be done. Before a build can be made.
* https://developer.chrome.com/blog/new-in-devtools-133/?utm_source=devtools#perf-image-delivery
* Accessibility audit. check svg icons and accessibility. do they need a role? alts, etc.
* https://medium.com/@jun55tsuno/optimize-your-nextjs-app-e4fe9718fc8a
* PERFORMANCE AUDIT. Use Chrome LightHouse. Double check cpu and performance/paint issues. If gradient is still causing performance issues, try the png. Maybe will-change is causing issues. jpg for images, png for snapshots. hero under 200kb, thumbnails under 30kb. NEXT JS SHOULD OPTIMIZE ALREADY.
* Check reduced motion settings.
* Check screen reader settings.
* Would help meta tags are correct... might help to put in data.



* FINAL RUN-THROUGH:
* Prep robots to prevent indexing of company names.
* Search all todos and fix them.
* Remove all unused comments.
* ensure all pages have correct metadata and optimize to AVOID SEO FOR COMPANY NAMES.
* Remove any unused remotePatterns in next.config.ts if not needed from unsplash.
* set up a new contact email
* UPDATE ALL PROFILE IMAGES to up-to-date image.



* BUGS:
* Occasional black flicker when scroll down page... like browser paint issue?
* Theme picker on load error.
* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?



* FUTURE CLEANUP AND EXPLORATION:
* Find icons for callouts... modular, polish (sparkle), etc. Do after content? Boop these? Or should these remain static as they are not interactive?
* Make a paint roller instead of droplet? Maybe use boop to scroll it down with a path, then back up as if painting?
* Add Boop to hover states! Also make the boop apply to the entire logo like previously tried. Can also do it to an svg arrow on the link arrows. https://www.joshwcomeau.com/react/boop/
* Animate the paint droplet to drop down and fade out, rinse and repeat.
* ??? Make Mosaic component HOLD. Might not need this.
* Add backup words for each FeaturedProject or article page footers.
* Consider ditching yellow. It doesn't work well with light colors. if want to keep, maybe put the icon in a yellow circle or something and make the svg black.
	


* TALKING POINTS, TROUBLESHOOTING, ETC, WITH THIS PROJECT:
	* State management. I had to decide whether prop drilling or using react context was the best approach. I went with context because I came to understand how multiple components could be affected by the theme state, and the best way to manage it was to avoid prop drilling.
	* 
	* Animation keyframe rendering issues with Turbopack. I had to move the keyframes to the top of the file to get them to render, instead of utilizing them as css module partials like the other utilities. Also, general challenges getting animations to work smoothly in a responsive way to themes changing.
	* 
	* Turbopack issues with utilizing sass :export. I tried to utilize the sass :export to create breakpoint variables to use as JS min/max widths but ultimately couldn't get it to work.
	* 
	* Issues with local state to immediately update the theme state. Currently there is a 500 error on page load due to the initial localstorage value not being set. Would love to come back to this.
	* 
	* Design system. Utilizing design tokens to manage colors, spacing, and typography. Spacing and typography utilize fluid unit techniques.
	* Multiple theme systems and variables. Light and dark themes exist in addition to the theme picker accent colors.
	* 
	* Accessibility. Ensuring that the site is accessible and compliant with WCAG 2.1. And is navigable and usable for all. Skip links are present.
	* 
	* Responsive vertical text was a challenge and there are likely better ways to do this. But I took a very granular and specific approach for this instance to this to make sure it works. Don't consider this a modular solution.
	* 
	* Utilizing inline css variables and ternary operators to manage various styles on component. Instead of using a class name to manage styles.
	* 
	* Utilizing lh values for a typographical based spacing system when appropriate.
	* 
	* Getting components like MultiImage to match the breakout portion of the grid. Very challenging. Got it close but not perfect. It was also challenging to get the caption to work in the most semantic and accessible way possible. Ideally I'd have a single figure with multiple images inside it and a single caption for the entire figure. Since I'm using a different grid layout on desktop, I had to make a choice to use aria-labelledby on each figure to reference a single caption being used on one of the images. Would like to come back to this.
	* accentEdge gradient compromised the animation transition color.
	* Performance optimization: Using the next/image component with blurDataURL and placeholder. I had to use static image imports for the blurDataURL to work, which takes away the benefit of using the relative path for the src by default. However, the blurDataURL will automatically generate the blurDataURL for the image which is helpful especially for hero images. I ultimately decided to move my images into an assets folder to make it easier to manage the blurDataURL and import my images from there.
*/

export default function Home() {
	return (
		<div className={styles.home}>
			<header className={cn(styles.section, styles.heroSection, styles.accentEdgeGrad)}>
				<div className={cn(styles.containerGrid, styles.heroContent)}>
					<h1 className={cn(styles.heroTitle, styles.breakoutXl)}>
						Polish
						<br />
						<span className={styles.right}>
							<span className={styles.altHeader}>that </span>Sh*t!
						</span>
					</h1>
					{/* <h1 className={cn(styles.heroTitle, styles.breakoutXl)}>
						For Teams
						<br />
						<span className={styles.altHeader}>that ❤️ the</span>
						<br />
						<span className={styles.right}>Extra Polish</span>
					</h1> */}
					{/* <h1 className={cn(styles.heroTitle, styles.breakoutXl)}>
						I make
						<br />
						<span className={styles.altHeader}>Dope, 🔥, Rizz</span>
						<br />
						<span className={styles.right}>products</span>
					</h1> */}
					<div className={styles.heroDetails}>
						{/* breathes life */}
						{/* brings digital concepts to life with flair */}
						{/* brings design systems to life with flair */}
						{/* infuses life into interactive realities*/}
						{/* with creativity and precision */}
						{/* creates vibrant digital experiences */}
						{/* bring your design system to life */}

						{/* provides ease, consistency, efficiency */}

						{/* <p className={styles.heroSubtitle}>
							Hey there! I'm Ryan Brandle, a Design Engineer that helps teams build exceptional experiences. Welcome to
							my 100% custom crafted portfolio site for you to explore.
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							Hey there! I'm Ryan Brandle, a Design Engineer that helps teams build exceptional experiences. This site
							was 100% custom designed & developed for you to explore.
						</p>
						<p className={styles.heroSubtitle}>
							Hey there! I'm Ryan Brandle, a Design Engineer that helps teams build exceptional experiences. This site
							was 100% custom designed & developed for you to explore - so dive in!
						</p>
						<p className={styles.heroSubtitle}>
							Hey there! I'm Ryan Brandle, a Design Engineer who helps teams build exceptional experiences. I 100%
							designed & developed this site for you to explore — so dive in!
						</p> */}

						{/* <p className={styles.heroSubtitle}>
							Welcome to the custom crafted portfolio site of me, Ryan Brandle, a Design Engineer who empowers teams to
							build exceptional experiences.
						</p> */}

						{/* <p className={styles.heroSubtitle}>
							This is the 100% custom crafted portfolio site of Ryan&nbsp;Brandle, a Design Engineer who transforms
							ideas into engaging experiences. (typical, boring)
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							This is the 100% custom crafted portfolio site of Ryan&nbsp;Brandle, a Design Engineer who blends
							creativity with technology to create vibrant digital experiences.
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							Welcome to the custom crafted portfolio site of me, Ryan&nbsp;Brandle, a Design Engineer who brings design
							systems to life.
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							This is the 100% custom crafted portfolio site of Ryan&nbsp;Brandle, a Design Engineer who empowers
							product and development teams with dynamic design systems. (wordy, but good)
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							Welcome to Ryan&nbsp;Brandle's custom portfolio—where design systems come alive and teams build awesome
							stuff. Enjoy the ride!
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							This is the 100% custom crafted portfolio site of Ryan&nbsp;Brandle, a Design Engineer who crafts systems
							that empower users to build exceptional interfaces. (empowering users... not bad, very long)
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							who transforms design systems into tools for creative empowerment. (not bad, confusing?)
						</p>
						<p className={styles.heroSubtitle}>
							who makes tools for creative empowerment. (eh? or quality design execution)
						</p>
						<p className={styles.heroSubtitle}>who makes tools for quality design execution.</p>
						<p className={styles.heroSubtitle}>...empower users to craft quality experiences. (not bad)</p>
						<p className={styles.heroSubtitle}>
							...empower product and development teams to craft quality experiences. (not bad)
						</p>
						<p className={styles.heroSubtitle}>who brings design systems to life.</p> */}
						{/* <p className={styles.heroSubtitle}>
							who brings design systems to life, empowering creators everywhere... empowering product teams to build
							exceptional interfaces... (like the concept, long and confusing)
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							who empowers product/development teams to build exceptional interfaces... (like the concept, how to make
							it shorter?)
						</p>
						<p className={styles.heroSubtitle}>
							who creates design systems for crafting quality digital experiences. (too wordy)
						</p> */}
						{/* <p className={styles.heroSubtitle}>
							Hey there. I'm Ryan Brandle, a Design Engineer who makes&nbsp;tools to build exceptional experiences.
						</p> */}
						<p className={styles.heroSubtitle}>
							Hey there. I'm Ryan Brandle, a Design Engineer who empowers teams to build exceptional experiences.
						</p>
						<p className={styles.heroCopy}>
							This site was designed and built by me — to show that design systems{' '}
							<strong>
								<em>can</em>
							</strong>{' '}
							be sexy, and to make your search for the right fit a little easier. With over a decade of experience
							uniting design and code, I create accessible, intuitive, and scalable interfaces. I love advancing design
							to life and pushing the boundaries of front-end craftsmanship. 🚀&nbsp;Let’s build something epic
							together. <a href='mailto:hello@example.com'>Say hi anytime!</a>
						</p>
						{/* <p className={styles.heroCopy}>
							This site was designed and built by me — to show that design systems{' '}
							<strong>
								<em>can</em>
							</strong>{' '}
							be sexy, and to make your search for the right fit a little easier. With over a decade of experience
							uniting design and code, I create accessible, intuitive, and scalable interfaces. Specializing in design,
							UX/UI engineering, and front-end development, I love advancing design to life and pushing the boundaries
							of front-end craftsmanship. 🚀&nbsp;Let’s build something epic together.{' '}
							<a href='mailto:hello@example.com'>Say hi anytime!</a>
						</p> */}
						{/* <p className={styles.heroCopy}>
							This site was designed and built by me — to show that design systems{' '}
							<strong>
								<em>can</em>
							</strong>{' '}
							be sexy, and to make your search for the right fit a little easier. I bring over 15 years of experience
							simplifying the relationship between design and code to create accessible, scalable, and easy-to-use
							interfaces. Specializing in design, UX/UI engineering, and front-end development, I love bringing design
							to life and pushing the boundaries of front-end craftsmanship. 🚀&nbsp;Let’s build something great
							together. <a href='mailto:hello@example.com'>Say hi anytime!</a>
						</p> */}
					</div>
				</div>
				<div className={cn(styles.containerGrid, styles.scrollContainer)}>
					<div className={styles.scroll}>
						<span className={styles.float}>&#8595;</span>
					</div>
				</div>
			</header>
			<div className={cn(styles.multiSection, styles.gradientBg)} data-section='dark'>
				<div className={styles.vertSection}>
					<div className={cn(styles.bgVertText, styles.vertTextHero)} aria-hidden>
						<div>UX</div>
						<div>DEV</div>
						<div>UI</div>
						<div>DES</div>
						<div>UX</div>
					</div>
				</div>
				<section className={cn(styles.section, styles.firstCallout)}>
					<div className={styles.containerGrid}>
						<Callout title='I make flexible, modular systems that are easy to use.' size='lg' iconAccent>
							<IconCodePen />
						</Callout>
					</div>
				</section>
				<section className={cn(styles.section, styles.featuredSection)}>
					<div className={styles.containerGrid}>
						<FeaturedProject
							id='brand'
							className={styles.breakoutXl}
							caption={brandImages.hero.caption}
							imgSrc={brandImages.hero.src}
							imgAlt={brandImages.hero.alt}
							hasCropIcon
							title={
								<>
									<span className={styles.altFont}>New Site,</span>
									<br />
									So Fresh{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;So&nbsp;Clean
									</span>
								</>
							}
							metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'TS', 'React', 'NextJS', 'Figma']}
							description='My own component-based design system built from the ground up, rooted in semantic, accessible code and a total self rebrand to boot — exploring the latest techniques and loving every minute!'
							buttonText='Explore'
							href='/brand?from=brand'
						/>
						<FeaturedProject
							id='insp'
							className={styles.breakoutXl}
							imgSrc={inspImages.hero.src}
							imgAlt={inspImages.hero.alt}
							caption={inspImages.hero.caption}
							hasCropIcon
							imgRight
							logo={<IconLogoInsp />}
							title='The Inspirato Design System'
							metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'TS', 'React', 'NextJS', 'Storybook']}
							description={
								<>
									A large-scale initiative to unify brand, UX, and UI strategy across departments and codebases. Built
									for consistency, usability, flexibility, and scalability, <em>IDS</em> empowered teams to deliver the
									high-quality experience expected of a luxury travel brand.
								</>
							}
							buttonText='Explore'
							href='/insp?from=insp'
						/>
						<FeaturedProject
							id='cf'
							className={styles.breakoutXl}
							imgSrc={cfImages.hero.src}
							imgAlt={cfImages.hero.alt}
							caption={cfImages.hero.caption}
							hasCropIcon
							title={
								<>
									CableFinder Rebrand{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Token
									</span>{' '}
									System
								</>
							}
							metaTags={['UX/UI', 'Branding', 'HTML', 'CSS', 'Figma']}
							description='An adaptable system with a multi-mode token approach, unifying UI for design, development, and&nbsp;marketing content teams.'
							buttonText='Explore'
							href='/cf?from=cf'
						/>
					</div>
				</section>
			</div>
			<div className={cn(styles.multiSection, styles.accentEdgeGradRev)}>
				<div className={cn(styles.bgVertText, styles.vertTextTopLeft)}>
					<div>SYSTEM</div>
					<div>DES</div>
					<div>UX</div>
					<div>DEV</div>
					<div>UI</div>
				</div>
				<section className={styles.projectSection}>
					<div className={styles.containerGrid}>
						<div className={styles.multiSectionHeader}>
							{/* <h2 className={styles.dabbleTitle}>
								<span className={styles.altFont}>Dabblings</span>
								<br />
								on the side
							</h2> */}
							{/* <h2 className={styles.dabbleTitle}>
								<span className={styles.altFont}>Creative Ventures</span>
								<br />
								on the side
							</h2> */}
							<h2 className={styles.dabbleTitle}>
								<span className={styles.altFont}>Dabbling</span>
								<br />
								on the side
							</h2>
							<p className={styles.multiSectionCopy}>
								Staying sharp tinkering, exploring, and sparking new ideas.&nbsp;⚡️
							</p>
						</div>
						<div className={styles.projectCardContainer}>
							<ProjectCard
								id='flashcards'
								imgSrc={flashcardsImages.hero.src}
								imgAlt={flashcardsImages.hero.alt}
								title={
									<>
										Accessible Flashcards{' '}
										<span className={styles.noWrap}>
											<span className={styles.altFont}>for</span>&nbsp;Kids
										</span>
									</>
								}
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React']}
								description='Inspired by the challenges faced by a loved one with dyslexia, this app was designed to support children (and parents) facing similar struggles. Kids can personalize their experience to match how they learn best, making math both engaging and fun.'
								buttonText='Read more'
								href='/flashcards?from=flashcards'
							/>
							<ProjectCard
								id='codepen'
								imgSrc={codepenImages.hero.src}
								imgAlt={codepenImages.hero.alt}
								title='CodePen Explorations'
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'Animation']}
								description='A mix of my own CodePen experiments — exploring new techniques, animations, and general code tinkering.'
								buttonText='Read more'
								href='/codepen?from=codepen'
							/>
							<ProjectCard
								id='comparison-cards'
								imgSrc={comparisonImages.hero.src}
								imgAlt={comparisonImages.hero.alt}
								title={
									<>
										Comparison Cards <span className={styles.altFont}>with</span> CSS Grid
									</>
								}
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
								description={
									<>
										Dive deep into a unique CSS Grid solution that helped prospective people compare products and choose
										the right option for them. Originally published on the <em>Inspirato Technology Blog</em>.
									</>
								}
								buttonText='Read more'
								href='/comparison?from=comparison'
							/>
						</div>
					</div>
				</section>
				<section className={cn(styles.section, styles.lastCallout)}>
					<div className={styles.containerGrid}>
						{/* <Callout
							title='For product teams that love the extra polish!'
							body="Don't overlook the value of a good design system. It's the foundation of a successful product."
							iconAccent
							size='lg'
						>
							<IconCodePen />
						</Callout> */}
						<Callout title='For product teams that love the extra polish!' iconAccent size='lg'>
							<IconCodePen />
						</Callout>
						{/* <Callout
							title='For product teams that love the extra polish!'
							body='Discover the difference that quality design can make with a reliable system.'
							iconAccent
							size='lg'
						>
							<IconCodePen />
						</Callout> */}
						{/* <Callout
							title='For product teams that love the extra polish!'
							body='I make flexible, modular systems that are easy to use. I make flexible, modular systems that are easy to use. I make flexible, modular systems that are easy to use.'
							iconAccent
							size='lg'
						>
							<IconCodePen />
						</Callout> */}
					</div>
				</section>
				<div className={cn(styles.bgVertText, styles.vertTextBottomRight)} aria-hidden>
					<div>SYSTEM</div>
					<div>DES</div>
					<div>UX</div>
					<div>DEV</div>
					<div>UI</div>
				</div>
			</div>
		</div>
	);
}
