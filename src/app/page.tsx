import cn from 'classnames';
import Callout from '@/components/Callout/Callout';
import IconCodePen from '@/components/Icons/IconCodePen';
import FeaturedProject from '@/components/FeaturedProject/FeaturedProject';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import styles from './home.module.scss';

/* Todo: 
* Componentize Featured component
* Create a boilerplate ts file for each page to include commonly used things like project title, meta tags, etc.
* update aspect to 9/16 on very large screens?
* add drop shadow to logos in featured project?
* update crop icon to replace LinkedIn icon
* Figure out image saturation on scroll instead of hover. Figure out mobile.
* How to make & in featured title work if is passed in as a prop.
* Make ProjectCard component
* make scroll arrow a circular button... or a square, with accent background.
* Animate vertical text on scroll... using intersection observer?
* Make buttons view link
* Add backup words for each FeaturedProject
* Try updating to line-height units: https://12daysofweb.dev/2024/css-margin-trim-line-height-units/
* check svg icons and accessibility. do they need a role? alt? run a accessibility audit.
* make favicon
* Read through all text, footer text, etc and finalize.
* Get peer review
* set up a new contact email

* BUGS:
* In safari, the filter blur is buggy. Sometimes it fills space, sometimes it doesn't. Potentially update the blur for a background image instead of a css filter. Also might be affecting performance with such a large blur.
* in safari, underlines in link doesn't change on theme change. It does change when you hover over the link.

* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?

* FUTURE CLEANUP AND EXPLORATION:
* Change image saturation to be based on whether section is in view instead of hover. 
* Make a mixin or a variable for hover translate animations.
* update margins for margin-inline and margin-block elements.
* Incorporate purple as a gradient to pink?
	* have logo present on page load.
	
	* Set typography utils and classes... explore more modern ways to do this? has:, etc?
  * Add shadows/elevation, gradients, animation timing and others that don't exist in figma
  * Try setting base space from 1.6 to 1.8. Also, might need to adjust the real big spaces % max to be larger for a more noticeable difference. Can also run the calculation to a raw value to enhance performance.
	
* TALKING POINTS, TROUBLESHOOTING, ETC, WITH THIS PROJECT:
	* State management. I had to decide whether prop drilling or using react context was the best approach. I went with context because I came to understand how multiple components could be affected by the theme state, and the best way to manage it was to avoid prop drilling.
	* 
	* Animation keyframe rendering issues with Turbopack. I had to move the keyframes to the top of the file to get them to render, instead of utilizing them as css module partials like the other utilities. Also, general challenges getting animations to work smoothly in a responsive way to themes changing.
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
							<span className={styles.alt}>Dope, 🔥, Rizz</span>
							<br />
							<span className={styles.right}>products</span>
						</h1>
						<div className={styles.heroDetails}>
							<p className={styles.heroSubtitle}>
								This is the 100% custom crafted portfolio site of Ryan Brandle, a Design Engineer and maker of the web.
							</p>
							<p className={styles.heroCopy}>
								I’m a bing bang with over 15 years of experience in design, development and making top notch products.
								There are a lot of titles that seem to morph through the years but what it comes down to is I bing bang
								boom. yadda yadda yadda with bing bang boom experience. Industry's standard There are a lot of titles
								that seem to morph.
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
			<section className={styles.multiSectionGradient} data-section='dark'>
				<section className={styles.vertSection}>
					<div className={styles.vertText}>
						<div>UX</div>
						<div>DES</div>
						<div>UI</div>
						<div>DEV</div>
						<div>UX</div>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.container}>
						<Callout title='I make modular, flexible systems that are easy to use.' iconAccent>
							<IconCodePen />
						</Callout>
					</div>
				</section>
				<section className={styles.section}>
					<div className={cn(styles.container, styles.featuredContainer)}>
						<FeaturedProject
							caption='Credit: Inspirato, Unsplash/Ishan @seefromthesky'
							imgSrc='https://images.unsplash.com/photo-1484821582734-6c6c9f99a672'
							imgAlt='Luxury travel website'
							logo={<IconLogoInsp />}
							title='The Inspirato Design System'
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/style'
						/>
						<FeaturedProject
							caption='Credit: Innovative Business Solutions'
							imgSrc='https://images.unsplash.com/photo-1560461396-ec0ef7bb29dd'
							imgAlt='Brand and token system'
							imgRight
							title='CableFinder Rebrand & Token System'
							metaTags={['Branding', 'UX/UI', 'Figma', 'HTML', 'CSS']}
							description="Work sans Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, link example when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							buttonText='Explore'
							href='/style'
						/>
						{/* <FeaturedProject /> */}
					</div>
				</section>
			</section>
			<section className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.container}>light here</div>
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
