import cn from 'classnames';
import styles from './home.module.scss';

/* Todo: 
* Finish footer - add correct links to social icons, add padding to the a tags, animate translate and color on hover.
* fix nav collision at 768
* check svg icons and accessibility. do they need a role? alt? run a accessibility audit.
* Make single div for vertical text under main section
* Make section callout component
* Make hero card component
* Make small card component
* make scroll arrow a circular button... or a square, with accent background.
* Try updating to line-height units: https://12daysofweb.dev/2024/css-margin-trim-line-height-units/
* Make buttons view link
* Read through all text, footer text, etc and finalize.
* set up a new contact email

* BUGS:
* in safari, underlines in link doesn't change on theme change. It does change when you hover over the link.

* THEME PICKER LOCAL STORAGE ISSUES:
* Continue setting up theme provider and theme picker. TRY creating a nested layout to manage the theme state. So the body, header, footer etc are not reloaded on every page load, therefore not causing a FOUC.
* Solve server 500 error on page load. Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?

* FUTURE EXPLORATION:
	* Incorporate purple as a gradient to pink?
	* have logo present on page load.
	
	* Set typography utils and classes... explore more modern ways to do this? has:, etc?
  * Add shadows/elevation, gradients, animation timing and others that don't exist in figma
  * Try setting base space from 1.6 to 1.8. Also, might need to adjust the real big spaces % max to be larger for a more noticeable difference. Can also run the calculation to a raw value to enhance performance.
	
* Talking points, troubleshooting, etc, with this project:
	* State management. I had to decide whether prop drilling or using react context was the best approach. I went with context because I came to understand how multiple components could be affected by the theme state, and the best way to manage it was to avoid prop drilling.
	* Animation keyframe rendering issues with Turbopack. I had to move the keyframes to the top of the file to get them to render, instead of utilizing them as css module partials like the other utilities.
	* Issues with local state to immediately update the theme state. Currently there is a 500 error on page load due to the initial localstorage value not being set. Would love to come back to this.

	* Design system. Utilizing design tokens to manage colors, spacing, and typography. Spacing and typography utilize fluid unit techniques.
	* Multiple theme systems and variables. Light and dark themes exist in addition to the theme picker accent colors.

	* Accessibility. Ensuring that the site is accessible and compliant with WCAG 2.1. And is navigable and usable for all.
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
			<section data-section='dark' className={styles.section}>
				<div className={styles.container}>dark here</div>
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
