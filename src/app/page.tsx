import cn from 'classnames';
import Callout from '@/components/Callout/Callout';
import IconCodePen from '@/components/Icons/IconCodePen';
import FeaturedProject from '@/components/FeaturedProject/FeaturedProject';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import styles from './home.module.scss';

/* Todo:
* make sure caption svg works on home page. probably need to introduce grid and gutter.
* Add shadow to metabox
* Add color transition to caption icons
* Add captions to multiImage
* Make buttons view link
* Add backup words for each FeaturedProject
* Add gradient bg to project pages?
* Shape up home page. Mobile spacing, remove arrow if not needed on small screens. Refactor home to be more like article. Make dark sections just a div with data-section='dark'. No other styling. Content within it will have section padding, etc.
* update project card buttons with extra padding to the left and right so highlight is not directly at edge of text.
* update project card buttons to use an icon, not text for vertical alignment purposes.
* Update section spacing to utilize lh system like articles. Possibly adjust footer widths to line up nicely with article widths and shared grid.
* update crop icon to replace LinkedIn icon
* ??? Make Mosaic component HOLD. Might not need this.
* update margins to margin-block elements.
* Create better easing with cubic-bezier
* make favicon
* delete scroll arrow or make a circular button... or a square, with accent background.
* Create a boilerplate ts file for each page to include commonly used things like project title, meta tags, etc.
* Search all todos and fix them.
* Accessibility audit. check svg icons and accessibility. do they need a role? alts, etc.
* Double check cpu and performance/paint issues. If gradient is still causing performance issues, try the png. Maybe will-change is causing issues. jpgs for images, pngs for snapshots. heros under 200kb, thumbnails under 30kb. NEXT JS SHOULD OPTIMIZE ALREADY.
* Try to get all altfont ampersands to be centered, not baseline.
* ensure all pages have correct metadata and optimize to AVOID seo for sensitive company names.
* Read through all text, footer text, etc and finalize.
* Get peer review
* set up a new contact email
* look in src/fonts. Do I need to do this for my fonts? Delete GeistMono, etc.

* BUGS:
* fade in ups are not fast enough. If someone is scrolling too quickly, the fade in lags and needs to catch up. Looks like a blank page at first.
* have logo present on page load, and does not animate in.

* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?

* FUTURE CLEANUP AND EXPLORATION:
* Use css grid stack instead of absolute positioning.
* Make a mixin or a variable for hover translate animations.
* Incorporate purple as a gradient to pink?
	
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
	* Accessibility. Ensuring that the site is accessible and compliant with WCAG 2.1. And is navigable and usable for all.
	* 
	* Responsive vertical text was a challenge and there are likely better ways to do this. But I took a very granular and specific approach for this instance to this to make sure it works. Don't consider this a modular solution.
	* 
	* Utilizing inline css variables and ternary operators to manage various styles on component. Instead of using a class name to manage styles.
	* 
	* Utilizing lh values for a typographical based spacing system when appropriate.
	* 
	* Getting components like MultiImage to match the breakout portion of the grid. Very challenging. Got it close but not perfect.
*/

export default function Home() {
	return (
		<div className={styles.home}>
			<section className={cn(styles.section, styles.heroSection, styles.accentEdge)}>
				<div className={styles.container}>
					<div className={styles.heroContent}>
						<h1 className={styles.heroTitle}>
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
								boom. yadda yadda yadda with bing bang boom experience. Industry's standard There are a lot of titles
								that seem to morph. <a href='mailto:hello@example.com'>Say hi anytime!</a>
							</p>
						</div>
					</div>
				</div>
				<div className={styles.scrollContainer}>
					<div className={styles.scroll}>
						<span className={styles.float}>&#8595;</span>
					</div>
				</div>
			</section>
			<section className={cn(styles.multiSection, styles.hasGradient)} data-section='dark'>
				<section className={styles.vertSection}>
					{/* ACCESSIBILITY: THIS CAN BE IGNORED, STRICTLY DECORATIVE */}
					<div className={cn(styles.bgVertText, styles.vertTextHero)}>
						<div>UX</div>
						<div>DEV</div>
						<div>UI</div>
						<div>DES</div>
						<div>UX</div>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.container}>
						<Callout title='I make flexible, modular systems that are easy to use.' size='lg' iconAccent>
							<IconCodePen />
						</Callout>
					</div>
				</section>
				<section className={cn(styles.section, styles.featuredSection)}>
					<div className={styles.container}>
						<FeaturedProject
							caption='Credit: Inspirato, Unsplash/@seefromthesky'
							imgSrc='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							imgAlt='Boats anchored off a white sandy beach in turquoise blue water'
							hasCropIcon
							logo={<IconLogoInsp />}
							title='The Inspirato Design System'
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/insp'
						/>
						<FeaturedProject
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
							href='/style'
						/>
						<FeaturedProject
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
							href='/style'
						/>
					</div>
				</section>
			</section>
			<section className={cn(styles.multiSection, styles.accentEdge)}>
				<div className={cn(styles.bgVertText, styles.vertTextTopLeft)}>
					<div>SYSTEM</div>
					<div>DES</div>
					<div>UX</div>
					<div>DEV</div>
					<div>UI</div>
				</div>
				<section className={cn(styles.section, styles.projectSection)}>
					<div className={styles.container}>
						<div className={styles.multiSectionHeader}>
							<h2 className={styles.multiSectionTitle}>Dabblings on the side</h2>
							<p className={styles.multiSectionCopy}>
								I love to dabble! As an essential part of continued education and staying fresh on the latest
								techniques, I tinker and explore with personal projects in my spare time.
							</p>
						</div>
						<ProjectCard
							imgSrc='/images/flashcards.png'
							imgAlt='Image of accessible flashcards for kids'
							hasCropIcon
							title='Accessible Flashcards for Kids'
							metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Read more'
							href='/style'
						/>
						<ProjectCard
							imgSrc='/images/codepen-focus.png'
							imgAlt='Image of a CodePen project'
							title='CodePen Explorations'
							metaTags={['UX/UI', 'HTML', 'CSS', 'JS']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Read more'
							href='/style'
						/>
						<ProjectCard
							imgSrc='/images/comparison-card.png'
							imgAlt='A grid of vibrant colors'
							title='Comparison Cards with CSS Grid'
							metaTags={['UX/UI', 'HTML', 'CSS', 'JS', 'React']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Read more'
							href='/style'
						/>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.container}>
						<Callout
							title='For product teams that care about the polish.'
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
			</section>
			{/* <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div> */}
			{/* <footer className={styles.footer}>
				<a
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
					Learn
				</a>
				<a
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
					Examples
				</a>
				<a
					href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer> */}
		</div>
	);
}
