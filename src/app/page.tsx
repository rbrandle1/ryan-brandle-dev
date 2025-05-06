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
* Codepen height issues on mobile... CSP? duckduck. why???
* Add link to exact codepen in case not loading correctly.

* Adjust flow spacing between text and image in multi image.

* Fix extra space between 1st header section and 2nd... Notice on pages with callout between 2 sections.

* Check screen reader and reduced motion settings.

* Prep robots to prevent indexing of company names.

* Accessibility audit. check svg icons and accessibility. do they need a role? alts, etc.

* set up a new GMAIL account and update all mailto links!!!

* FIX BUGS BELOW


* PERFORMANCE AUDIT. Use Chrome LightHouse. Double check cpu and performance/paint issues. If gradient is still causing performance issues, try the png. Maybe will-change is causing issues. jpg for images, png for snapshots. hero under 200kb, thumbnails under 30kb. NEXT JS SHOULD OPTIMIZE ALREADY. https://medium.com/@jun55tsuno/optimize-your-nextjs-app-e4fe9718fc8a


* BUGS TO SOLVE:
*** 1. CSP NOTES
* Codepen errors on mobile.
* Fix the CSP read report only errors from codepen. https://blog.codepen.io/documentation/embedded-pens/
* CODEPEN ISSUES: Can codepens be loaded faster and not when appears on page? Don't seem to be loading right... not getting hover states, etc. look at CF.

*** 2. LOCAL STORAGE ISSUE NOTES:
* MUST FIX localstorage issue as it is causing a build error before performance audits can be done. Before a build can be made.
* is the local storage issue back? Look at brand page on mobile... initial load is pink...
* Nullify or disregard the bug?
* https://developer.chrome.com/blog/new-in-devtools-133/?utm_source=devtools#perf-image-delivery
* Try using the window object to check if it's loaded in the ThemePicker useEffect and maybe use an empty string as the default theme? This would likely create a FOUC though. Try refactoring with a ThemeProvider component to manage the theme state.
* Maybe put my header in a top level component so it doesn't reload disappear and come back on every pg load? nested layout?
*/

export default function Home() {
	const marqueeText = 'Crispy, Rad, 🔥, Boss, Steezy, Dope, Sick,';

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
									<span className={cn(styles.altFont, styles.top)}>New Site,</span>
									<br />
									So&nbsp;Fresh{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;So&nbsp;Clean
									</span>
								</>
							}
							accessibleTitle={brand.text.title}
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
									<span className={cn(styles.altFont, styles.top)}>Crafting</span>
									<br />
									Inspirato's Design System
								</>
							}
							accessibleTitle={insp.text.title}
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
							accessibleTitle={cf.text.title}
							description={cf.text.description}
							metaTags={cf.tags}
							imgSrc={cf.images.hero.src}
							imgAlt={cf.images.hero.alt}
							caption={cf.images.hero.caption}
							buttonText='Explore'
							href='/cf?from=cf'
							hasCropIcon
							gapLg
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
								Staying sharp tinkering, exploring,
								<br />
								and sparking new ideas.&nbsp;⚡️
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
								accessibleTitle={flashcards.text.title}
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
								accessibleTitle={codepen.text.title}
								description={codepen.text.description}
								metaTags={codepen.tags}
								imgSrc={codepen.images.hero.src}
								imgAlt={codepen.images.hero.alt}
								buttonText='Read more'
								href='/codepen?from=codepen'
							/>
							<ProjectCard
								id='comparison'
								title={
									<>
										Comparison Cards <span className={styles.altFont}>with</span> CSS Grid
									</>
								}
								accessibleTitle={comparison.text.title}
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
