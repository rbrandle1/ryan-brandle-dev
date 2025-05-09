'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { flashcards as data } from '@/data';
import Link from 'next/link';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import SideImage from '@/components/Article/SideImage/SideImage';
import Callout from '@/components/Callout/Callout';
import styles from '../projects.module.scss';

export const FlashcardsContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						Accessible Flashcards <span className={styles.altFont}>for</span> Kids
					</h1>
					<div className={styles.subhead}>
						Inspired by the challenges faced by a loved one with dyslexia, this app was designed to support children{' '}
						<em>(and parents)</em> facing similar struggles.
					</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.heroImage)}
							src={data.images.hero.src}
							alt={data.images.hero.alt}
							caption={data.images.hero.caption}
							metaTags={data.tags}
							isHero
							placeholder='blur'
							priority
						/>
						<p>
							This is a project that is close to my heart and was the perfect opportunity to make something meaningful
							for a loved one with dyslexia.
						</p>
						<p>
							The app is a colorful, interactive flashcard experience focused on multiplication. But underneath the fun
							animations and responsive layout is a deeper purpose:{' '}
							<em>helping kids with dyslexia engage with math in a way that feels supportive and approachable.</em>
						</p>
						<p>
							<strong>Experience the app yourself:</strong>
						</p>
						<ul className={styles.ul}>
							<li>
								<a href='/flashcard-app' className={styles.link} target='_blank' rel='noopener noreferrer'>
									Live App
								</a>
							</li>
							<li>
								<a
									href='https://github.com/rbrandle1/accessible-flashcards-for-kids'
									className={styles.link}
									target='_blank'
									rel='noopener noreferrer'
								>
									Github
								</a>
							</li>
						</ul>
						<h2 className={styles.h2}>
							The
							<br />
							Challenge
						</h2>
						<p>
							Through personal experience, I saw how difficult it can be for kids with dyslexia to keep up in
							traditional learning environments—especially in math-heavy settings where online tools often fall short.
						</p>
						<p>
							In the post-COVID era, where digital learning had become the norm, many educational platforms still lacked
							the flexibility or accessibility to support different learning styles. Multiplication felt like the
							perfect focus—one clear, high-impact area where I could make a difference with a simple, well-designed
							tool.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<Callout
							className={cn(styles.callout, styles.sectionStart, styles.flowOffset)}
							title={
								<>
									Unlocking potential
									<br />
									for all minds to thrive.
								</>
							}
							titleAccent
						/>
						<h2 className={styles.h2}>
							The
							<br />
							Solution
						</h2>
						<p>
							I created a React-based flashcard app that helps kids focus on one concept at a time.{' '}
							<strong>No clutter</strong>. Just bite-sized learning at a pace that feels encouraging.
						</p>
						<p>
							The interface is intentionally bold, tactile, and responsive. Large buttons are easy to click or tap.
							Progress tracking is clearly visible and stretches across the screen to make improvement feel
							tangible—encouraging momentum and confidence.
						</p>
						<p>
							I also had a <em>secret weapon</em>: a live-in user tester. The child who inspired this project gave me
							immediate feedback as I prototyped different layouts, fonts, icons, and interactions. This meant I could
							make meaningful improvements fast, based on real reactions.
						</p>

						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.fonts.src}
								imgAlt={data.images.fonts.alt}
								caption={data.images.fonts.caption}
								imgRight
							>
								<h3 className={styles.h3}>
									Informed{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>by</span>&nbsp;Research
									</span>
								</h3>
								<p>
									From day one, I knew accessibility would be baked into every part of the experience. I started with
									research into dyslexia and how it affects learning—especially with math.
								</p>
								<p>
									It quickly became clear how impactful <em>seemingly</em> small choices (like font or alignment) can be
									for a dyslexic learner. I studied a range of helpful resources, including:
								</p>
								<ul className={styles.ul}>
									<li>
										<a
											href='https://uxplanet.org/designing-for-dyslexia-6d12e8c41cd7'
											className={styles.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											Designing for Dyslexia
										</a>{' '}
										- Alex Morris, UX Planet
									</li>
									<li>
										<a
											href='https://www.prologic-technologies.com/blog/how-to-design-for-users-with-dyslexia'
											className={styles.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											How to Design for Users with Dyslexia
										</a>{' '}
										- Prologic Technologies
									</li>
									<li>
										<a
											href='https://mathsnoproblem.com/blog/learner-focus/supporting-dyslexia-maths-classroom'
											className={styles.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											Supporting Dyslexia in Maths Classroom
										</a>{' '}
										- Natalie Packer, Maths No Problem
									</li>
									<li>
										<a
											href='https://homeschoolingwithdyslexia.com/dyslexia-mastering-math/'
											className={styles.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											Dyslexia: Mastering Math
										</a>{' '}
										- Marianne, Homeschooling with Dyslexia
									</li>
									<li>
										<a
											href='https://www.teleprompter.com/blog/effectiveness-of-lexend-and-opendyslexic-fonts'
											className={styles.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											Effectiveness of Lexend and OpenDyslexic Fonts in Improving Reading
										</a>{' '}
										- Teleprompter Team
									</li>
								</ul>
								<p>
									Dyslexia-friendly fonts were explored and tested, along with various icon and layout strategies, to
									simplify navigation and reduce cognitive friction.
								</p>
							</SideImage>
						</div>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.toggle.src}
								imgAlt={data.images.toggle.alt}
								caption={data.images.toggle.caption}
							>
								<h3 className={styles.h3}>Custom Theming</h3>
								<p>
									The app features two specific types of themes coexisting together—one designed for playful engagement,
									and the other tuned for accessibility features.
								</p>
								<p>
									A dedicated dyslexia toggle updates specialized fonts, spacing and visual aids to support those who
									need it.{' '}
								</p>
								<p>
									I applied themes using a simple CSS structure built around some custom attributes:{' '}
									<code>[data-theme]</code> and <code>[data-accessibility-theme]</code>.
								</p>
							</SideImage>
						</div>
						<p>
							These were set and modified using React hooks and <code>useEffect()</code>:
						</p>
						<pre className={styles.syntax} tabIndex={0} aria-label='Setting custom themes'>
							<code>
								<span className={styles.keyword}>const</span> <span className={styles.punctuation}>[</span>
								<span className={styles.variable}>dataAccessibilityTheme</span>
								<span className={styles.punctuation}>,</span>{' '}
								<span className={styles.variable}>setDataAccessibilityTheme</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>=</span>{' '}
								<span className={styles.function}>useState</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>''</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.keyword}>const</span> <span className={styles.punctuation}>[</span>
								<span className={styles.variable}>dataTheme</span>
								<span className={styles.punctuation}>,</span> <span className={styles.variable}>setDataTheme</span>
								<span className={styles.punctuation}>]</span> <span className={styles.operator}>=</span>{' '}
								<span className={styles.function}>useState</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>'🤖'</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n'}
								<span className={styles.function}>useEffect</span>
								<span className={styles.punctuation}>
									(() {'=>'} {'{'}
								</span>
								{'\n  '}
								<span className={styles.variable}>document</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.variable}>body</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>setAttribute</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>'data-accessibility-theme'</span>
								<span className={styles.punctuation}>,</span>{' '}
								<span className={styles.variable}>dataAccessibilityTheme</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>document</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.variable}>body</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>setAttribute</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>'data-theme'</span>
								<span className={styles.punctuation}>,</span> <span className={styles.variable}>dataTheme</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.keyword}>return</span>{' '}
								<span className={styles.punctuation}>
									() {'=>'} {'{'}
								</span>
								{'\n    '}
								<span className={styles.variable}>document</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.variable}>body</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>removeAttribute</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>'data-accessibility-theme'</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n    '}
								<span className={styles.variable}>document</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.variable}>body</span>
								<span className={styles.punctuation}>.</span>
								<span className={styles.function}>removeAttribute</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>'data-theme'</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'},</span> <span className={styles.punctuation}>[</span>
								<span className={styles.variable}>dataAccessibilityTheme</span>
								<span className={styles.punctuation}>,</span> <span className={styles.variable}>dataTheme</span>
								<span className={styles.punctuation}>]</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
							</code>
						</pre>
						<p>
							On the style side, I experimented with variable naming conventions, aiming for balance between flexibility
							and clarity.
						</p>
						<p>
							At first I considered mapping raw color variables to tiered tokens like{' '}
							<code>--theme-accent-primary</code>, but found that approach <em>a bit over-engineered and confusing</em>{' '}
							for this app.
						</p>
						<p>
							To prevent any confusion, I used theme specific color names, then mapped them into functional based
							variables, like this:
						</p>
						<pre className={styles.syntax} tabIndex={0} aria-label='Custom theme colors'>
							<code>
								<span className={styles.comment}>// Defined theme specific colors...</span>
								{'\n'}
								<span className={styles.punctuation}>:</span>
								<span className={styles.keyword}>root</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.comment}>// 🚀</span>
								{'\n  '}
								<span className={styles.variable}>--color-rocket-red</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>#ff0f09</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--color-rocket-yellow</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>#ffe113</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.comment}>// 🤖</span>
								{'\n  '}
								<span className={styles.variable}>--color-robot-electric-blue</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>#03fbff</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--color-robot-electric-mid</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>#00bef1</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// etc...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.comment}>// Mapped root colors to UI specific variables...</span>
								{'\n'}
								<span className={styles.punctuation}>[</span>
								<span className={styles.attribute}>data-theme</span>
								<span className={styles.punctuation}>=</span>
								<span className={styles.string}>"🚀"</span>
								<span className={styles.punctuation}>]</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.variable}>--theme-color-gradient-left</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-rocket-orange</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--theme-color-gradient-right</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-rocket-red</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--theme-color-gradient-left-alt</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--color-rocket-yellow</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// etc...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<p>In this case, simpler was definitely better.</p>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.focus.src}
								imgAlt={data.images.focus.alt}
								caption={data.images.focus.caption}
								imgRight
							>
								<h3 className={styles.h3}>Accessibility Enhancements</h3>
								<p>
									Building for accessibility meant keeping screen readers, keyboard navigation, and motion sensitivities
									in mind:
								</p>
								<ul className={styles.ul}>
									<li>
										<strong>Tab flow</strong> was carefully considered. While it was tempting to add more controls (like
										focus-able arrow buttons), I found that <em>maintaining simple tabbing between cards</em> and
										following the semantic HTML structure of the page worked better—fewer clicks, less confusion.
									</li>
									<li>
										<strong>Fonts</strong> were tested with my young user. We ditched a few that felt too chaotic
										(sorry, “Unkempt”) in favor of cleaner, more readable ones.
									</li>
									<li>
										<strong>Progress tracking</strong> is visual and satisfying. The progress bar spans nearly the full
										width of the screen, so even one completed card feels like forward motion.
									</li>
								</ul>
							</SideImage>
						</div>
						<h3 className={styles.h3}>
							Testing{' '}
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Feedback
							</span>
						</h3>
						<p>
							One of the joys of this project was being able to test with the very person who inspired it. That meant I
							had fast, direct feedback on everything from font legibility to interaction patterns.
						</p>
						<p>
							I tested how icons and spacing impacted comprehension, which fonts felt more readable, and whether things
							like a grid of cards vs a carousel layout made a difference (spoiler: the carousel won).
						</p>
						<p>
							Because of this feedback loop, I was able to revise quickly—removing visual clutter, adjusting layouts,
							and fine-tuning features until the experience felt just right.
						</p>
						<h3 className={styles.h3}>Overcoming Challenges</h3>
						<p>
							This project pushed me to explore some <strong>powerful tech tools and strategies</strong> to get around
							sticky situations.
						</p>
						<h4 className={styles.h4}>Container Queries</h4>
						<p>
							I used React with a custom component library, layered in SCSS and CSS custom properties for styling, and
							maintained fluid typography using{' '}
							<a
								href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								container queries
							</a>
							.
						</p>
						<p>
							To make a reusable way to unlock my fluid typography, I created a utility mixin, <code>_utils.scss</code>,
							and included it on a per-instance basis, like this:
						</p>
						<pre className={styles.syntax} tabIndex={0} aria-label='Fluid typography utility mixin'>
							<code>
								<span className={styles.comment}>// Utility mixin for fluid typography</span>
								{'\n'}
								<span className={styles.keyword}>@mixin</span> <span className={styles.function}>fluid-type</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.property}>font-size</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>clamp</span>
								<span className={styles.punctuation}>(</span>
								{'\n    '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--font-size-min</span>
								<span className={styles.punctuation}>,</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--text-base</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>,</span>
								{'\n    '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--font-size-fluid</span>
								<span className={styles.punctuation}>,</span> <span className={styles.string}>5cqi</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>,</span>
								{'\n    '}
								<span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--font-size-max</span>
								<span className={styles.punctuation}>,</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--text-lg</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>)</span>
								{'\n  '}
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								{'\n\n'}
								<span className={styles.class}>.cell</span> <span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.comment}>
									// define the min, fluid, and max values on a per instance basis...
								</span>
								{'\n  '}
								<span className={styles.variable}>--font-size-min</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--text-md</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--font-size-fluid</span>
								<span className={styles.punctuation}>:</span> <span className={styles.string}>7cqi</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.variable}>--font-size-max</span>
								<span className={styles.punctuation}>:</span> <span className={styles.function}>var</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.variable}>--text-xl</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n  '}
								<span className={styles.keyword}>@include</span>{' '}
								<span className={styles.function}>utils.fluid-type</span>
								<span className={styles.punctuation}>;</span>
								{'\n  '}
								<span className={styles.comment}>// additional styles...</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
							</code>
						</pre>
						<h4 className={styles.h4}>Lazy Loading</h4>
						<p>
							The entire app is fully responsive and performance-optimized which was especially important on mobile. I
							ran into rendering issues with icons in Safari, which I solved using React's{' '}
							<a
								href='https://react.dev/reference/react/lazy'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Lazy
							</a>{' '}
							loading and{' '}
							<a
								href='https://react.dev/reference/react/Suspense'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Suspense
							</a>{' '}
							features—loading assets only when they came into view.
						</p>
						<p>You can see an abbreviated JSX code example how I accomplished this for the Card component:</p>
						<pre className={styles.syntax} tabIndex={0} aria-label='Lazy loading example'>
							<code>
								<span className={styles.keyword}>import</span> <span className={styles.punctuation}>{'{'}</span>{' '}
								<span className={styles.variable}>lazy</span>
								<span className={styles.punctuation}>,</span> <span className={styles.variable}>Suspense</span>{' '}
								<span className={styles.punctuation}>{'}'}</span> <span className={styles.keyword}>from</span>{' '}
								<span className={styles.string}>"react"</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n'}
								<span className={styles.keyword}>const</span> <span className={styles.variable}>IconGrid</span>{' '}
								<span className={styles.punctuation}>=</span> <span className={styles.function}>lazy</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>=&gt;</span>{' '}
								<span className={styles.function}>import</span>
								<span className={styles.punctuation}>(</span>
								<span className={styles.string}>"../IconGrid/IconGrid"</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n\n'}
								<span className={styles.keyword}>export</span> <span className={styles.keyword}>const</span>{' '}
								<span className={styles.component}>Card</span> <span className={styles.punctuation}>=</span>{' '}
								<span className={styles.punctuation}>(</span>
								<span className={styles.punctuation}>{'{'}</span> <span className={styles.parameter}>props</span>{' '}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>=&gt;</span>{' '}
								<span className={styles.punctuation}>{'{'}</span>
								{'\n  '}
								<span className={styles.keyword}>return</span> <span className={styles.punctuation}>(</span>
								{'\n    '}
								<span className={styles.comment}>// code simplified for demo purposes...</span>
								{'\n    '}
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.punctuation}>&gt;</span>
								{'\n      '}
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>isDyslexic</span> <span className={styles.operator}>&&</span>{' '}
								<span className={styles.variable}>isVisible</span> <span className={styles.punctuation}>?</span>{' '}
								<span className={styles.punctuation}>(</span>
								{'\n        '}
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.element}>Suspense</span>
								<span className={styles.punctuation}>&gt;</span>
								{'\n          '}
								<span className={styles.punctuation}>&lt;</span>
								<span className={styles.element}>IconGrid</span> <span className={styles.attribute}>props</span>
								<span className={styles.punctuation}>=</span>
								<span className={styles.punctuation}>{'{'}</span>
								<span className={styles.variable}>props</span>
								<span className={styles.punctuation}>{'}'}</span> <span className={styles.punctuation}>/&gt;</span>
								{'\n        '}
								<span className={styles.punctuation}>&lt;/</span>
								<span className={styles.element}>Suspense</span>
								<span className={styles.punctuation}>&gt;</span>
								{'\n      '}
								<span className={styles.punctuation}>)</span> <span className={styles.punctuation}>:</span>{' '}
								<span className={styles.keyword}>null</span>
								<span className={styles.punctuation}>{'}'}</span>
								{'\n    '}
								<span className={styles.punctuation}>&lt;/</span>
								<span className={styles.punctuation}>&gt;</span>
								{'\n  '}
								<span className={styles.punctuation}>)</span>
								<span className={styles.punctuation}>;</span>
								{'\n'}
								<span className={styles.punctuation}>{'}'}</span>
								<span className={styles.punctuation}>;</span>
							</code>
						</pre>
						<h4 className={styles.h4}>Performance Optimizations</h4>
						<p>
							To ensure a quality experience, I removed unnecessary animations, prioritizing quick, snappy interactions
							over visual flourishes. Subtle fade-ins looked nice, but they dulled the feeling of responsiveness when
							flicking through the flashcards.
						</p>
						<p>
							Rather than overcomplicating keyboard accessibility with arrow button navigation, I kept the tab order
							simple and intuitive—letting users naturally tab through each card. Less friction, more flow.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						The finished product is a fun, focused, and easy-to-use learning app built from the heart. It uses modern
						CSS and React features to deliver a playful experience that's genuinely helpful—especially for young
						learners who need a little extra support.
					</p>
					<p>
						<strong>The app is more than a flashcard tool;</strong> it's a nudge in the right direction for how we can
						create more inclusive, empowering digital experiences.
					</p>
					<p>
						Of course, there's more I could build—support for other math skills, personalizing additional learning paths
						for different kinds of learners, a more advanced component system. But for now, this version has already
						brought confidence and smiles to one curious kid—<em>and that's a win worth celebrating</em>!
					</p>
					<h3 className={styles.h4}>My Thoughts</h3>
					<p>
						When we build with empathy, everyone benefits. This app might have started with one kiddo in mind, but its
						impact can ripple out much further. As technology continues to evolve, so does our opportunity to make the
						digital world more welcoming, playful, and powerful—for <em>all</em> learners.
					</p>
					<p>
						Be sure to check out{' '}
						<a href='/flashcard-app' className={styles.link} target='_blank' rel='noopener noreferrer'>
							the app
						</a>{' '}
						yourself, or visit{' '}
						<a
							href='https://github.com/rbrandle1/accessible-flashcards-for-kids'
							className={styles.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							Github
						</a>{' '}
						for a deeper look into the code.
					</p>
					<p>
						Interested in building something like this? These resources helped shape my project and might inspire you
						too:
					</p>
					<ul className={styles.ul}>
						<li>
							<a
								href='https://www.embla-carousel.com/get-started/react/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Embla Carousel
							</a>{' '}
							- A flexible, accessible React carousel component
						</li>
						<li>
							<a
								href='https://moderncss.dev/container-query-units-and-fluid-typography/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Container Query Units and Fluid Typography
							</a>{' '}
							- Stephanie Eckles
						</li>
						<li>
							<a
								href='https://uxplanet.org/designing-for-dyslexia-6d12e8c41cd7'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Designing for Dyslexia
							</a>{' '}
							- Alex Morris, UX Planet
						</li>
						<li>
							<a
								href='https://www.prologic-technologies.com/blog/how-to-design-for-users-with-dyslexia'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								How to Design for Users with Dyslexia
							</a>{' '}
							- Prologic Technologies
						</li>
						<li>
							<a
								href='https://mathsnoproblem.com/blog/learner-focus/supporting-dyslexia-maths-classroom'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Supporting Dyslexia in Maths Classroom
							</a>{' '}
							- Natalie Packer, Maths No Problem
						</li>
						<li>
							<a
								href='https://homeschoolingwithdyslexia.com/dyslexia-mastering-math/'
								className={styles.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								Dyslexia: Mastering Math
							</a>{' '}
							- Marianne, Homeschooling with Dyslexia
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

export default FlashcardsContent;
