'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { insp as data } from '@/data';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import SideImage from '@/components/Article/SideImage/SideImage';
import MultiImage from '@/components/Article/MultiImage/MultiImage';
import styles from '../projects.module.scss';

export const InspContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						<span className={styles.altFont}>Crafting</span> Inspirato's Design System
					</h1>
					<div className={styles.subhead}>{data.text.descriptionShort}</div>
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
							logo={<IconLogoInsp />}
							logoOffset='-5%'
							logoMaxWidth='380px'
							metaTags={data.tags}
							isHero
							placeholder='blur'
							priority
						/>
						<p>[GO THROUGH AND SEE WHERE CALLOUTS CAN GO]</p>
						<p>
							During my seven-year tenure at{' '}
							<a href='https://www.inspirato.com' className={styles.link} target='_blank' rel='noopener noreferrer'>
								Inspirato
							</a>
							, a fast-growing startup to IPO, I spearheaded the creation of a unified design system that transformed
							our approach to UX and front-end development.
						</p>
						<p>
							Initially starting as the lead Senior UX Designer then transitioned into a developer-centric UX Engineer
							role, I established essential UX processes and developed code-driven solutions that delivered a luxury
							digital experience.
						</p>
						<p>
							This article examines the journey of creating a design system, highlighting the challenges and successes
							along the way.
						</p>
						<h2 className={styles.h2}>
							The
							<br />
							Challenge
						</h2>
						<p>
							Like many startups, rapid growth led to the usual challenges of an evolving company. In the early days, we
							faced inconsistent interfaces across multiple teams, which led to varying implementations of the same UI
							elements and a fragmented user experience. Legacy styles, isolated landing pages, and differing front-end
							frameworks only compounded the issue.
						</p>
						<p>
							With multiple teams contributing to the product, each bringing their own brand interpretations, the value
							of a single source of truth emerged—
							<em>
								we needed a design system capable of evolving alongside the company's rapid growth and changing
								technical landscape.
							</em>
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
							As a small UX team, we defined and grounded ourselves in a set of shared principles that would guide us
							through foundational decisions and help us build the tools we needed to execute fast and smart.
						</p>
						<h3 className={styles.h3}>Building a New System</h3>
						<p>
							We began advocating for a shared vision of a design system—communicating its value, building
							cross-functional buy-in, and forming a collaborative network to help shape its direction while keeping the
							end-users in focus.
						</p>
						<p>
							I teamed up with folks from tech, product, design, and marketing to understand their needs and pain
							points. This initial research highlighted the complexity of our current systems—so I mapped out a phased
							approach to tackle these issues step by step.
						</p>
						<p>[FULL, IMAGE OF CURRENT STATE PHASE GRAPH]</p>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.hero.src}
							alt={data.images.hero.alt}
							caption={data.images.hero.caption}
						/>
						<h4 className={styles.h4}>
							<span className={styles.altFont}>Phase&nbsp;1:</span>
							<br />
							Gather
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Identify
							</span>
						</h4>
						<p>
							I took all the data from my research and cataloged every element on the site—like fonts, colors, icons,
							and spacing—using old design files, browser tools, and my own observations to spot inconsistencies. This
							gave us a clear view of our current UI, which was crucial for planning next steps.
						</p>
						<p>[3-4-UP, GATHER ICONS, CAN BE MESSY, LEGACY VERSIONS SNAPSHOTS]</p>
						<p>
							This process led to our first design style guide, which teams used to keep things consistent while I
							explored ways to streamline and document everything into a cohesive system.
						</p>
						<h4 className={styles.h4}>
							<span className={styles.altFont}>Phase&nbsp;2:</span>
							<br />
							Consolidate
						</h4>
						<p>
							With a clear understanding of the current state, I created a cleaner, more consistent style guide focused
							on consolidating typography, color, and iconography.
						</p>
						<p>[4-UP, CONSOLIDATED NOTES LEGACY ICONS, TYPOGRAPHY, COLORS... NICE GUIDE WITH CONSOLIDATED NOTES]</p>
						<p>
							I prioritized consolidation over aesthetics - first reduce, then refine. This consolidation was not just
							about visual consistency;{' '}
							<strong>it established design tokens that could be used by both designers and developers</strong>,
							ensuring that every element was represented in one uniform language.
						</p>
						<p>
							It also provided a roadmap for locating and replacing various instances throughout the site, greatly
							simplifying the implementation process.
						</p>
						<h4 className={styles.h4}>
							<span className={styles.altFont}>Phase&nbsp;3:</span>
							<br />
							Integrate
						</h4>
						<p>
							The design version of the system was updated with a side by side comparison of what the{' '}
							<em>integrated</em> styles and components would look like while maintaining legacy counterparts as a
							reference.
						</p>
						<p>
							[FULL, IMAGE OF SIDE BY SIDE LEGACY AND INTEGRATED] OR A 3-4 UP WITH MOCKS OF HOW SITE LOOKS WITH NEW
							STYLES
						</p>
						<p>
							This enabled our design team to create mocks for an interface that had yet to be released and
							simultaneously provided a guide for QA efforts once code changes were implemented.
						</p>
						<h3 className={styles.h3}>Jumping into the Code</h3>
						<p>
							Code implementation was planned and executed through a series of controlled deployments, ensuring minimal
							disruption to the greater teams and a smooth transition across multiple repositories.
						</p>
						<p>
							For each wave of changes, I hunted down and replaced raw CSS values with design system tokens, tested for
							visual issues, and carefully merged code to be deployed across the various repos.{' '}
							<em>The work was meticulous</em>, but it enabled me to cover a lot of ground to unify the UI under the
							hood.
						</p>
						<p>
							[SOME KIND OF SIDE IMAGE TO INDICATE REPLACING CODE INSTANCES WITH A SINGLE TOKEN, AND TYPOGRAPHY MIXINS
							EXAMPLES... DUMMY DATA...UTILIZE AI TO SET UP BASIC CODE STRUCTURE TO GET SCREENCAP]
						</p>
						<p>
							[OR PERHAPS THE UI LAYER THAT HOVERS OVER THE VARIOUS SILOS, INDICATING WHERE DESIGN SYSTEM LIVES AND HOW
							SILOS ARE INTEGRATED]
						</p>
						<p>
							I began with updating colors, which provided a low-risk entry point and a testing ground for our approach.
							Next, I tackled typography, carefully applying SASS mixins to unify font sizes, spacing, and styles.
							Finally, I standardized iconography by replacing varied file types with a defined global SVG sprite for
							all icon instances site-wide.
						</p>
						<p>
							Design system styles and tokens were now implemented and could be fine-tuned to handle future
							enhancements. Even legacy frameworks could integrate seamlessly without risky refactors.
						</p>
						<p>[ENHANCE... 4-UP, ALL NEW SLICK STUFF FROM SYSTEM, SCREENSHOTS OF CURRENT SITE, ETC]</p>
						<h4 className={styles.h4}>
							<span className={styles.altFont}>Phase&nbsp;4:</span>
							<br />
							Enhance
						</h4>
						<p>
							With the system in place as the official single source of truth, teams could easily adapt to brand changes
							and other architectural pivots.
						</p>
						<p>
							A company rebrand in 2018 showcased the system's flexibility, guiding future design and development
							efforts.
						</p>
						<p>
							We updated brand styles in one place, and saw them ripple across the product. The design system, now
							referred to as the <em>IDS 2.0</em>, became the North Star for all future designs and features, while
							legacy UI was gradually deprecated.
						</p>
						<p>
							[INTO THE FUTURE - ADD "STORYBOOK" TO TEXT BELOW AND USE SB IMAGES HERE?] OR AS 4 UP ABOVE THIS SECTION
							HEADER... SHOWCASE CODE CODE CODE
						</p>
						<h3 className={styles.h3}>Into the Future</h3>
						<p>
							As the company continued to evolve, the design system adapted alongside new frameworks and modular code
							structures. It eventually matured into a monorepo model using tools like Lerna and Nx, that housed styles
							and reusable components, making it easier to integrate with emerging technologies.
						</p>
						<p>
							Over the years, I founded a variety of collaborative “guilds”, cross-functional weekly meetups where
							Design and Front-end teams came together weekly to align, iterate, plan improvements and help ensure that
							the system remained dynamic and aligned with the company's goals. This ongoing evolution has enabled our
							teams to innovate confidently, knowing they have a robust foundation to build upon.
						</p>

						{/* <div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.hero.src}
								imgAlt={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
								imgRight
							>
								<h3 className={styles.h3}>Research and Identify</h3>
								<p>
									TESTING SIDEIMAGE RIGHT The outcome of this project was a testament to the power of effective branding
									in driving business success. By prioritizing user experience and visual cohesion, we were able to
									craft a web branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</SideImage>
							<SideImage imgSrc={data.images.hero.src} imgAlt={data.images.hero.alt}>
								<h3 className={styles.h3}>Consolidate</h3>
								<p>
									TESTING SIDEIMAGE LEFT The outcome of this project was a testament to the power of effective branding
									in driving business success. By prioritizing user experience and visual cohesion, we were able to
									craft a web branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</SideImage>
							<SideImage
								imgSrc={data.images.hero.src}
								imgAlt={data.images.hero.alt}
								caption={data.images.hero.caption}
								imgRight
							>
								<h3 className={styles.h3}>Implement</h3>
								<p>
									TESTING SIDEIMAGE RIGHT The outcome of this project was a testament to the power of effective branding
									in driving business success. By prioritizing user experience and visual cohesion, we were able to
									craft a web branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</SideImage>
						</div>
						<h3 className={styles.h3}>Continuation of the process</h3>
						<p>
							The project's impact extended beyond the client's organization, contributing to the advancement of web
							branding best practices and inspiring future projects to prioritize user experience and visual cohesion.
						</p>
						<p>
							The modular approach to design ensured that the new branding elements could be easily integrated into
							existing and future projects, streamlining the development process and reducing costs. This
							forward-thinking strategy positioned the client for long-term success in the ever-evolving digital
							landscape.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								imgSrc4={data.images.hero.src}
								imgAlt4={data.images.hero.alt}
								textRight
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h3 className={styles.h3}>
									Research <span className={styles.altFont}>&amp;</span>&nbsp;Identify all utilized UI
								</h3>
								<p>
									TESTING SIDEIMAGE RIGHT The outcome of this project was a testament to the power of effective branding
									in driving business success. By prioritizing user experience and visual cohesion, we were able to
									craft a web branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</MultiImage>
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								imgSrc4={data.images.hero.src}
								imgAlt4={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h3 className={styles.h3}>
									Research <span className={styles.altFont}>&amp;</span>&nbsp;Identify all utilized UI
								</h3>
								<p>
									TESTING SIDEIMAGE RIGHT The outcome of this project was a testament to the power of effective branding
									in driving business success. By prioritizing user experience and visual cohesion, we were able to
									craft a web branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</MultiImage>
							<MultiImage
								imgSrc1={data.images.hero.src}
								imgAlt1={data.images.hero.alt}
								imgSrc2={data.images.hero.src}
								imgAlt2={data.images.hero.alt}
								imgSrc3={data.images.hero.src}
								imgAlt3={data.images.hero.alt}
								caption='Example of discovery process, wire-framing, journey mapping.'
							>
								<h3 className={styles.h3}>
									Research <span className={styles.altFont}>&amp;</span>&nbsp;Identify all utilized UI
								</h3>
								<p>
									3 ONLY. The outcome of this project was a testament to the power of effective branding in driving
									business success. By prioritizing user experience and visual cohesion, we were able to craft a web
									branding solution that not only met but exceeded the client's expectations.
								</p>
								<p>
									The outcome of this project was a testament to the power of effective branding in driving business
									success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
									solution that not only met but exceeded the client's expectations.
								</p>
							</MultiImage>
						</div>
						<h3 className={styles.h3}>Continuation of the process</h3>
						<p>
							The project's impact extended beyond the client's organization, contributing to the advancement of web
							branding best practices and inspiring future projects to prioritize user experience and visual cohesion.
						</p>
						<p>
							The modular approach to design ensured that the new branding elements could be easily integrated into
							existing and future projects, streamlining the development process and reducing costs. This
							forward-thinking strategy positioned the client for long-term success in the ever-evolving digital
							landscape.
						</p> */}
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						The culmination of these efforts was an integrated, custom component-driven front-end (Next.js, TypeScript,
						CSS Modules) that streamlined our development process and unlocked even more potential.
					</p>
					<p>
						[LARGE IMAGE OF SOLID WEBSITE PAGE WITH STYLES... PERHAPS ONE OF MY BRANDLE TEST PAGES... ON LAPTOP MOBILE,
						ETC.]
					</p>
					<p>
						Myself and a dedicated front-end team could now build semantic, accessible, reusable, tested and responsive
						components{' '}
						<a
							href='https://yellow-pond-097ca5b10.2.azurestaticapps.net/?path=/docs/introduction--docs'
							className={styles.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							documented in Storybook
						</a>
						. This not only reduced development time and errors but also opened the door for continuous exploration and
						innovation among designers, developers and marketing content creators.
					</p>
					{/* <LargeImage
						className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
						src={data.images.final.src}
						alt={data.images.final.alt}
					/> */}
					<p>
						Teams across departments were finally aligned under a unified brand and UI, with a robust design system to
						support their work. The IDS has become a core asset of Inspirato's digital products and a flexible platform
						to build for the future.
					</p>
					<h3 className={styles.h3}>
						<span className={styles.noWrap}>
							Learnings
							<br />
							<span className={styles.altFont}>&amp;</span>&nbsp;Challenges
						</span>
					</h3>
					<p>
						The project was not without its challenges. During periods of rapid change, maintaining temporary duplicates
						of the design system was necessary to ensure seamless local development and gradual transitions.
					</p>
					<p>
						Additionally, adapting to shifting architectural frameworks and changing priorities required a flexible
						mindset and resilience. Despite these hurdles, the long-term benefits of a unified design system—improved
						collaboration, enhanced user experience, and accelerated development—made the investment worthwhile.
					</p>
					<p>
						Overall, this experience demonstrated that with strategic planning, collaboration, and a commitment to
						user-centered design, even a fast-paced startup can successfully implement a scalable and adaptable design
						system in an ever-changing landscape.
					</p>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default InspContent;
