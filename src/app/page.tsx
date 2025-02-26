import cn from 'classnames';
import dynamic from 'next/dynamic';
import Callout from '@/components/Callout/Callout';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import styles from './home.module.scss';

const FeaturedProject = dynamic(() => import('@/components/FeaturedProject/FeaturedProject'), {
	ssr: true,
});

const ProjectCard = dynamic(() => import('@/components/ProjectCard/ProjectCard'), {
	ssr: true,
});

/* Todo:
* figure out the placeholder blur issue.
* update crop icon/s to replace LinkedIn icon
* FIX localstorage issue as it is causing a build error.
* https://developer.chrome.com/blog/new-in-devtools-133/?utm_source=devtools#perf-image-delivery
* Accessibility audit. check svg icons and accessibility. do they need a role? alts, etc.
* https://medium.com/@jun55tsuno/optimize-your-nextjs-app-e4fe9718fc8a
* PERFORMANCE AUDIT. Use Chrome LightHouse. Double check cpu and performance/paint issues. If gradient is still causing performance issues, try the png. Maybe will-change is causing issues. jpgs for images, pngs for snapshots. heros under 200kb, thumbnails under 30kb. NEXT JS SHOULD OPTIMIZE ALREADY.
* Check reduced motion settings.
* Check screen reader settings.
* Consider only animating the text side of FeaturedProject?

* CONTENT CREATION:
* Make all pages with images and text content.
* Finalize all home text and hero text.
* Find icons for callouts... modular, polish (sparkle), etc. Do after content? Booop these? Or should these remain static as they are not interactive?



* FINAL RUN-THROUGH:
* Search all todos and fix them.
* Remove all unused comments.
* ensure all pages have correct metadata and optimize to AVOID SEO FOR COMPANY NAMES.
* Remove any unused remotePatterns in next.config.ts if not needed from unsplash.
* Get peer review
* set up a new contact email
* UPDATE ALL PROFILE IMAGES to up-to-date image.
* Make sure safari is loading correct favicon.



* BUGS:
* Theme picker on load error.
* why does article hero image expand wider immediately on page load? How to lessen the FOUC.
* fade in ups are not fast enough. If someone is scrolling too quickly, the fade in lags and needs to catch up. Looks like a blank page at first.
* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?



* FUTURE CLEANUP AND EXPLORATION:
* Make a paint roller instead of droplet? Maybe use boop to scroll it down with a path, then back up as if painting?
* Add Boops to hover states! Also make the boop apply to the entire logo like previously tried. Can also do it to an svg arrow on the link arrows. https://www.joshwcomeau.com/react/boop/
* ??? Make Mosaic component HOLD. Might not need this.
* Try to get all altfont ampersands to be centered, not baseline.
* Add backup words for each FeaturedProject or article page footers.
* Animate the paint droplet to drop down and fade out, rinse and repeat.
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
	* Performance optimization: Using the next/image component with blurDataURL and placeholder. I had to use static image imports for the blurDataURL to work, which takes away the benefit of using the relative path for the src by default. However, the blurDataURL will automatically generate the blurDataURL for the image which is helpful especially for hero images.
*/

export default function Home() {
	return (
		<div className={styles.home}>
			<header className={cn(styles.section, styles.heroSection, styles.accentEdgeGrad)}>
				<div className={cn(styles.containerGrid, styles.heroContent)}>
					<h1 className={cn(styles.heroTitle, styles.breakoutXl)}>
						I make
						<br />
						<span className={styles.altFont}>Dope, 🔥, Rizz</span>
						<br />
						<span className={styles.right}>products</span>
					</h1>
					<div className={styles.heroDetails}>
						<p className={styles.heroSubtitle}>
							This is the 100% custom crafted portfolio site of Ryan&nbsp;Brandle, a Design Engineer and maker of the
							web.
						</p>
						<p className={styles.heroCopy}>
							I’m a bing bang with over 15 years of experience in design, development and making top notch products.
							There are a lot of titles that seem to morph through the years but what it comes down to is I bing bang
							boom. yadda yadda yadda with bing bang boom experience. Industry's standard There are a lot of titles that
							seem to morph. <a href='mailto:hello@example.com'>Say hi anytime!</a>
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
					{/* ACCESSIBILITY: THIS CAN BE IGNORED, STRICTLY DECORATIVE */}
					<div className={cn(styles.bgVertText, styles.vertTextHero)}>
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
							id='insp'
							className={styles.breakoutXl}
							caption='Credit: Inspirato, Unsplash/@seefromthesky'
							imgSrc='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							imgAlt='Boats anchored off a white sandy beach in turquoise blue water'
							hasCropIcon
							logo={<IconLogoInsp />}
							title='The Inspirato Design System'
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/insp?from=insp'
						/>
						<FeaturedProject
							id='cf'
							className={styles.breakoutXl}
							caption='Credit: Innovative Business Solutions'
							imgSrc='https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd'
							imgAlt='Brand and token system'
							hasCropIcon
							imgRight
							title={
								<>
									CableFinder Rebrand <span className={styles.altFont}>&amp;</span>&nbsp;Token System
								</>
							}
							metaTags={['Branding', 'UX/UI', 'Figma', 'HTML', 'CSS']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/cf?from=cf'
						/>
						<FeaturedProject
							id='sr'
							className={styles.breakoutXl}
							caption='Credit: SchoolRunner, Unsplash/@benmullins'
							imgSrc='https://images.unsplash.com/photo-1534643960519-11ad79bc19df'
							imgAlt='SchoolRunner student'
							hasCropIcon
							title={
								<>
									School Runner Rebrand <span className={styles.altFont}>&amp;</span>&nbsp;Website
								</>
							}
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/sr?from=sr'
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
							<h2 className={styles.multiSectionTitle}>Dabblings on the side</h2>
							<p className={styles.multiSectionCopy}>
								I love to dabble! As an essential part of continued education and staying fresh on the latest
								techniques, I tinker and explore with personal projects in my spare time.
							</p>
						</div>
						<div className={styles.projectCardContainer}>
							<ProjectCard
								id='flashcards'
								imgSrc='/images/flashcards.png'
								imgAlt='Image of accessible flashcards for kids'
								hasCropIcon
								title='Accessible Flashcards for Kids'
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React']}
								description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
								buttonText='Read more'
								href='/flashcards?from=flashcards'
							/>
							<ProjectCard
								id='codepen'
								imgSrc='/images/codepen-focus.png'
								imgAlt='Image of a CodePen project'
								title='CodePen Explorations'
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS']}
								description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
								buttonText='Read more'
								href='/codepen?from=codepen'
							/>
							<ProjectCard
								id='comparison-cards'
								imgSrc='/images/comparison-card.png'
								imgAlt='A grid of vibrant colors'
								title='Comparison Cards with CSS Grid'
								metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React']}
								description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
								buttonText='Read more'
								href='/comparison-cards?from=comparison-cards'
							/>
						</div>
					</div>
				</section>
				<section className={cn(styles.section, styles.lastCallout)}>
					<div className={styles.containerGrid}>
						<Callout
							title='For product teams that love the extra polish!'
							body='I make flexible, modular systems that are easy to use. I make flexible, modular systems that are easy to use. I make flexible, modular systems that are easy to use.'
							iconAccent
							size='lg'
						>
							<IconCodePen />
						</Callout>
					</div>
				</section>
				<div className={cn(styles.bgVertText, styles.vertTextBottomRight)}>
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
