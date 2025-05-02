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
						<span className={cn(styles.altFont, styles.top)}>Crafting</span>
						<br />
						Inspirato's Design System
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
				<Callout className={cn(styles.callout, styles.flowOffset)} title='One truth. One system.' titleAccent />
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
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.phase.src}
							alt={data.images.phase.alt}
							caption={data.images.phase.caption}
						/>
						<p>
							I teamed up with folks from tech, product, design, and marketing to understand their needs and pain
							points. This initial research highlighted the complexity of our current systems—so I mapped out a phased
							approach to tackle these issues step by step.
						</p>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.gather.src}
								imgAlt1={data.images.gather.alt}
								imgSrc2={data.images.gather2.src}
								imgAlt2={data.images.gather2.alt}
								imgSrc3={data.images.gather3.src}
								imgAlt3={data.images.gather3.alt}
								imgSrc4={data.images.gather4.src}
								imgAlt4={data.images.gather4.alt}
								caption='Gathering and documenting all product styles and UI elements.'
							>
								<h3 className={styles.h3}>
									<span className={cn(styles.altFont, styles.top)}>Phase&nbsp;1:</span>
									<br />
									Gather{' '}
									<span className={styles.noWrap}>
										<span className={styles.altFont}>&amp;</span>&nbsp;Identify
									</span>
								</h3>
								<p>
									I took all the data from my research and cataloged every element on the site—like fonts, colors,
									icons, and spacing—using old design files, browser tools, and my own observations to spot
									inconsistencies. This gave us a clear view of our current UI, which was crucial for planning next
									steps.
								</p>
								<p>
									This process led to our first design style guide, which teams used to keep things consistent while I
									explored ways to streamline and document everything into a cohesive system.
								</p>
							</MultiImage>
						</div>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.consolidate2.src}
								imgAlt1={data.images.consolidate2.alt}
								imgSrc2={data.images.consolidate.src}
								imgAlt2={data.images.consolidate.alt}
								imgSrc3={data.images.consolidate3.src}
								imgAlt3={data.images.consolidate3.alt}
								imgSrc4={data.images.consolidate4.src}
								imgAlt4={data.images.consolidate4.alt}
								caption='Organized guide for consolidating foundational styles and components.'
								textRight
							>
								<h3 className={styles.h3}>
									<span className={cn(styles.altFont, styles.top)}>Phase&nbsp;2:</span>
									<br />
									Consolidate
								</h3>
								<p>
									With a clear understanding of the current state, I created a cleaner, more consistent style guide
									focused on consolidating typography, color, and iconography.
								</p>
								<p>
									I prioritized consolidation over aesthetics - first reduce, then refine. This consolidation was not
									just about visual consistency;{' '}
									<strong>it established design tokens that could be used by both designers and developers</strong>,
									ensuring that every element was represented in one uniform language.
								</p>
								<p>
									It also provided a roadmap for locating and replacing various instances throughout the site, greatly
									simplifying the implementation process.
								</p>
							</MultiImage>
						</div>
						<div className={cn(styles.multiImagesContainer, styles.flowOffset, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.integrate2.src}
								imgAlt1={data.images.integrate2.alt}
								imgSrc2={data.images.integrate4.src}
								imgAlt2={data.images.integrate4.alt}
								imgSrc3={data.images.integrate3.src}
								imgAlt3={data.images.integrate3.alt}
								imgSrc4={data.images.integrate5.src}
								imgAlt4={data.images.integrate5.alt}
								caption='Integrated styles and components into a new style guide.'
							>
								<h3 className={styles.h3}>
									<span className={cn(styles.altFont, styles.top)}>Phase&nbsp;3:</span>
									<br />
									Integrate
								</h3>
								<p>
									The design version of the system was updated with a side by side comparison of what the{' '}
									<em>integrated</em> styles and components would look like while maintaining legacy counterparts as a
									reference.
								</p>
								<p>
									This enabled our design team to create mocks for an interface that had yet to be released and
									simultaneously provided a guide for QA efforts once code changes were implemented.
								</p>
							</MultiImage>
						</div>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.integrateLg.src}
							alt={data.images.integrateLg.alt}
							caption={data.images.integrateLg.caption}
							captionLeft
						/>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title={
								<>
									From raw CSS
									<br />
									to systemized style.
								</>
							}
							titleAccent
						/>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.ui.src}
								imgAlt={data.images.ui.alt}
								caption={data.images.ui.caption}
								imgRight
							>
								<h3 className={styles.h3}>Jumping into the Code</h3>
								<p>
									Code implementation was planned and executed through a series of controlled deployments, ensuring
									minimal disruption to the greater teams and a smooth transition across multiple repositories.
								</p>
								<p>
									For each wave of changes, I hunted down and replaced raw CSS values with design system tokens, tested
									for visual issues, and carefully merged code to be deployed across the various repos.{' '}
									<em>The work was meticulous</em>, but it enabled me to cover a lot of ground to unify the UI under the
									hood.
								</p>
							</SideImage>
							<SideImage
								imgSrc={data.images.token.src}
								imgAlt={data.images.token.alt}
								caption={data.images.token.caption}
							>
								<p>
									I began updating colors, which provided a low-risk entry point and a testing ground for our approach.
									Next, I tackled typography, carefully applying SASS mixins to unify font sizes, spacing, and styles.
									Finally, I standardized iconography by replacing varied file types with a defined global SVG sprite
									for all icon instances site-wide.
								</p>
								<p>
									Design system styles and tokens were now implemented and could be fine-tuned to handle future
									enhancements. Even legacy frameworks could integrate seamlessly without risky refactors.
								</p>
							</SideImage>
						</div>
						<h3 className={styles.h3}>
							<span className={cn(styles.altFont, styles.top)}>Phase&nbsp;4:</span>
							<br />
							Enhance
						</h3>
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
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src={data.images.enhanceFull.src}
							alt={data.images.enhanceFull.alt}
							caption={data.images.enhanceFull.caption}
							captionLeft
						/>
						<div className={cn(styles.multiImagesContainer, styles.breakout)}>
							<MultiImage
								imgSrc1={data.images.enhance.src}
								imgAlt1={data.images.enhance.alt}
								imgSrc2={data.images.enhance2.src}
								imgAlt2={data.images.enhance2.alt}
								imgSrc3={data.images.enhance3.src}
								imgAlt3={data.images.enhance3.alt}
								caption='Rebranded design system with component examples.'
							/>
						</div>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc={data.images.sb.src}
								imgAlt={data.images.sb.alt}
								caption={data.images.sb.caption}
								imgRight
							>
								<h3 className={styles.h3}>Into the Future</h3>
								<p>
									As the company continued to evolve, the design system adapted alongside new frameworks and code
									architecture strategies. It utilized Lerna for versioning and evolved into a React monorepo powered by
									Next.js and Nx, with Storybook as the team's{' '}
									<a
										href='https://yellow-pond-097ca5b10.2.azurestaticapps.net/?path=/docs/introduction--docs'
										className={styles.link}
										target='_blank'
										rel='noopener noreferrer'
									>
										living component library
									</a>
									.
								</p>
								<p>
									Over the years, I founded a variety of collaborative “guilds”, cross-functional weekly meetups where
									Design and Front-end teams came together weekly to align, iterate, plan and ensure the system remained
									dynamic and aligned with the company's goals.
								</p>
								<p>
									This ongoing evolution enabled teams to innovate confidently, knowing they have a robust foundation to
									build upon.
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
						In the end, we pulled it all together into a custom, component-based front end using Next.js, TypeScript,
						and CSS Modules — making our dev process smoother and opening the door to even more possibilities.
					</p>
					<LargeImage
						className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
						src={data.images.final.src}
						alt={data.images.final.alt}
					/>
					<p>
						As part of a dedicated front-end team, I helped build semantic, accessible, reusable, tested and well
						documented components in{' '}
						<a
							href='https://yellow-pond-097ca5b10.2.azurestaticapps.net/?path=/docs/introduction--docs'
							className={styles.link}
							target='_blank'
							rel='noopener noreferrer'
						>
							Storybook
						</a>
						. This not only reduced development time and errors but opened the door for continuous exploration and
						innovation among designers, developers and marketing content creators.
					</p>
					<p>
						Teams across departments were finally aligned under a unified brand and UI, with a robust design system to
						support their work. The IDS has become a core asset of Inspirato's digital products and a flexible platform
						to build for the future.
					</p>
					<h3 className={styles.h3}>
						<span className={styles.noWrap}>
							Learnings <br />
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
						Overall, this experience demonstrated that with strategic planning, collaboration, and a commitment to UX,
						even a fast-paced startup can successfully implement a scalable and adaptable design system in an
						ever-changing landscape.
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
