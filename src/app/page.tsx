import cn from 'classnames';
import dynamic from 'next/dynamic';
import { insp, cf, brand, flashcards, codepen, comparison } from '@/data';
import Callout from '@/components/Callout/Callout';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import IconModular from '@/components/Icons/IconModular';
import IconPolish from '@/components/Icons/IconPolish';
import styles from './home.module.scss';

const FeaturedProject = dynamic(() => import('@/components/FeaturedProject/FeaturedProject'), {
	ssr: true,
});

const ProjectCard = dynamic(() => import('@/components/ProjectCard/ProjectCard'), {
	ssr: true,
});

/* Todo:

* LINKS ON HOME PAGE, not-found and footer not tabbable? Likely because they are missing those styles that might be present in the project.scss file.
* Update header line heights... especially large headlines. Knock down to a 1. Make h2's, etc a 1.1? Prob need to adjust altFont to 0.8 or something like that.
* reduce gap space when caption is present in featured project component, .5lh?.
* Review major articles and see if code can be added to the article pages.
* CODEPEN ISSUES: Can codepens be loaded faster and not when appears on page? Don't seem to be loading right... not getting hover states, etc. look at CF.
* Publish and point kids accessible flashcards site to ryanbrandle.dev/flashcards... or something like that.
* Fix the CSP read report only errors from codepen. https://blog.codepen.io/documentation/embedded-pens/

* Do not come across as too arrogant. Polish, So fresh, So clean, Too 🔥 To Brandle*, etc. Might need to tone it down. EXAMPLE: Update hero text to use more descriptive text like flexible, modular, accessible, etc... maybe mix in a few "fun" words.
* 
* MUST FIX localstorage issue as it is causing a build error before performance audits can be done. Before a build can be made.
* Nullify or disregard the bug?
* https://developer.chrome.com/blog/new-in-devtools-133/?utm_source=devtools#perf-image-delivery
* Accessibility audit. check svg icons and accessibility. do they need a role? alts, etc.
* https://medium.com/@jun55tsuno/optimize-your-nextjs-app-e4fe9718fc8a
* PERFORMANCE AUDIT. Use Chrome LightHouse. Double check cpu and performance/paint issues. If gradient is still causing performance issues, try the png. Maybe will-change is causing issues. jpg for images, png for snapshots. hero under 200kb, thumbnails under 30kb. NEXT JS SHOULD OPTIMIZE ALREADY.
* Check reduced motion settings.
* Check screen reader settings.




* FINAL RUN-THROUGH:
* Prep robots to prevent indexing of company names.
* Double check remove all odd formatted spacing, apostrophes, etc. from all text content in article pages. 
* Double check the FOCUS animation works smoothly on ipads. If not, change the font size back to 1024 mq from 768
* Double check codepens on touch devices... might not be able to interact?
* Search all todos and fix them.
* Search all [EDIT]s and fix them.
* Remove all unused comments.
* ensure all pages have correct metadata and optimize to AVOID SEO FOR COMPANY NAMES.
* Remove any unused remotePatterns in next.config.ts if not needed from unsplash.
* set up a new contact email and update all mailto links!!!
* UPDATE ALL PROFILE IMAGES to up-to-date image.
* Check mailto links work. I don't have a default email client on my computer so it doesn't appear to work. Need to check on another device, possibly after a build and deployment.



* BUGS:
* Occasional black flicker when scroll down page... like browser paint issue?
* Theme picker on load error.
* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?



* FUTURE CLEANUP AND EXPLORATION:
* Find icons for callouts... modular, polish (sparkle), etc. Do after content? Boop these? Or should these remain static as they are not interactive?
* Make Boop to scroll it down with a path, then back up as if painting?
* Add Boop to hover states! Also make the boop apply to the entire logo like previously tried. Can also do it to an svg arrow on the link arrows. https://www.joshwcomeau.com/react/boop/
* Animate the paint droplet to drop down and fade out, rinse and repeat.
* Make Mosaic component HOLD. Might not need this.
* Maybe make the multi image component a simple off the page carousel... just an overflow, nothing crazy.
* Add backup words for each FeaturedProject or article page footers.
	


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
	* 
	* accentEdge gradient compromised the animation transition color.
	* 
	* Performance optimization: Using the next/image component with blurDataURL and placeholder. I had to use static image imports for the blurDataURL to work, which takes away the benefit of using the relative path for the src by default. However, the blurDataURL will automatically generate the blurDataURL for the image which is helpful especially for hero images. I ultimately decided to move my images into an assets folder to make it easier to manage the blurDataURL and import my images from there.
	* 
	* When creating my branded site images, I had to make a decision to make it theme specific where the unique logo is used, vs a black/white agnostic version of the logo and lean into theme color variables instead.
*/

export default function Home() {
	const marqueeText = 'Crispy, Rad, 🔥, Boss, Steezy, Dope, Sick,';
	// const marqueeText = 'Crispy, Rad, 🔥, Intuitive, Scalable, Fun,';
	// const marqueeText = 'Crispy, Simple, 🔥, Intuitive, Scalable, Fun,';
	// const marqueeText = 'Crispy, Dope, 🔥, Boss, Steezy, Rad, Sick,';
	// const marqueeText = 'Steezy, Dope, 🔥, Boss, Crispy, Rad, Sick,';

	return (
		<div className={styles.home}>
			<header className={cn(styles.section, styles.heroSection, styles.accentEdgeGrad)}>
				<div className={cn(styles.heroContent)}>
					<h1 className={cn(styles.containerGrid, styles.heroTitle)}>
						<span className={styles.breakoutXl}>I Code</span>
						<span className={cn(styles.marquee, styles.breakoutFull)}>
							<span className={cn(styles.altHeader, styles.marqueeText)}>{marqueeText}</span>
							<span className={cn(styles.altHeader, styles.marqueeText)} aria-hidden>
								{marqueeText}
							</span>
						</span>
						<span className={cn(styles.right, styles.breakoutXl)}>
							Design
							<br />
							Systems
						</span>
					</h1>
					<div className={cn(styles.heroDetails, styles.containerGrid)}>
						<p className={styles.heroSubtitle}>
							Hey there. I'm Ryan Brandle, a Design Engineer who empowers teams to build exceptional experiences.
						</p>
						<p className={styles.heroCopy}>
							This site was designed and coded by me — to show that design systems{' '}
							<strong>
								<em>can</em>
							</strong>{' '}
							be sexy, and to make your search for the right fit a little easier. With over a decade of experience
							uniting design and code, I create accessible, intuitive, and scalable interfaces. I enjoy coding design to
							life and pushing the boundaries of front-end craftsmanship. 🚀&nbsp;
							<a href='mailto:hello@example.com'>Let's build</a> a product that leaves a lasting impression!
						</p>
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
							<IconModular />
						</Callout>
					</div>
				</section>
				<section className={cn(styles.section, styles.featuredSection)}>
					<div className={styles.containerGrid}>
						<FeaturedProject
							id='brand'
							className={styles.breakoutXl}
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
							description={brand.text.description}
							metaTags={brand.tags}
							imgSrc={brand.images.hero.src}
							imgAlt={brand.images.hero.alt}
							caption={brand.images.hero.caption}
							buttonText='Explore'
							href='/brand?from=brand'
							hasCropIcon
							accentBg
						/>
						<FeaturedProject
							id='insp'
							className={styles.breakoutXl}
							title={
								<>
									<span className={styles.altFont}>Crafting</span>
									<br />
									Inspirato's Design System
								</>
							}
							description={insp.text.description}
							metaTags={insp.tags}
							imgSrc={insp.images.hero.src}
							imgAlt={insp.images.hero.alt}
							logo={<IconLogoInsp />}
							caption={insp.images.hero.caption}
							buttonText='Explore'
							href='/insp?from=insp'
							hasCropIcon
							imgRight
						/>
						<FeaturedProject
							id='cf'
							className={styles.breakoutXl}
							title={
								<>
									CableFinder Rebrand{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Token
									</span>{' '}
									System
								</>
							}
							description={cf.text.description}
							metaTags={cf.tags}
							imgSrc={cf.images.hero.src}
							imgAlt={cf.images.hero.alt}
							caption={cf.images.hero.caption}
							buttonText='Explore'
							href='/cf?from=cf'
							hasCropIcon
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
								title={
									<>
										Accessible Flashcards{' '}
										<span className={styles.noWrap}>
											<span className={styles.altFont}>for</span>&nbsp;Kids
										</span>
									</>
								}
								description={flashcards.text.description}
								metaTags={flashcards.tags}
								imgSrc={flashcards.images.hero.src}
								imgAlt={flashcards.images.hero.alt}
								buttonText='Read more'
								href='/flashcards?from=flashcards'
							/>
							<ProjectCard
								id='codepen'
								title={codepen.text.title}
								description={codepen.text.description}
								metaTags={codepen.tags}
								imgSrc={codepen.images.hero.src}
								imgAlt={codepen.images.hero.alt}
								buttonText='Read more'
								href='/codepen?from=codepen'
							/>
							<ProjectCard
								id='comparison-cards'
								title={
									<>
										Comparison Cards <span className={styles.altFont}>with</span> CSS Grid
									</>
								}
								description={comparison.text.description}
								metaTags={comparison.tags}
								imgSrc={comparison.images.feature.src}
								imgAlt={comparison.images.feature.alt}
								buttonText='Read more'
								href='/comparison?from=comparison'
							/>
						</div>
					</div>
				</section>
				<section className={cn(styles.section, styles.lastCallout)}>
					<div className={styles.containerGrid}>
						<Callout
							title='For tech teams that love the extra polish!'
							iconAccent
							size='lg'
							body="Let's build a product that leaves a lasting impression."
							buttonText='Say hello'
							href='mailto:hello@example.com?subject=Hello!'
						>
							<IconPolish />
						</Callout>
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
