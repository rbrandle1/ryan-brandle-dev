'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { cf as data } from '@/data';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import SideImage from '@/components/Article/SideImage/SideImage';
import MultiImage from '@/components/Article/MultiImage/MultiImage';
import styles from '../projects.module.scss';

export const CfContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.page}>
			<header className={cn(styles.heroSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						CableFinder Rebrand <span className={styles.altFont}>&amp;</span> Token System
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
							metaTags={data.tags}
							isHero
							placeholder='blur'
							priority
						/>
						<p>
							In this role, I led the creation of a unified design and token system to support rapid product growth and
							lay the groundwork for a more scalable front-end.
						</p>
						<p>
							While design-led, the work was built to complement existing development workflows and provide a clear path
							toward greater consistency and maintainability.
						</p>
						<h2 className={styles.h2}>
							The
							<br />
							Challenge
						</h2>
						<p>
							This fast-growing startup in the cable services industry needed to enhance their user experience and
							visual identity.
						</p>
						<p>
							With an established product, multiple teams, and no formal UX processes or cohesive CSS strategy, there
							was an opportunity to introduce a system that:
						</p>
						<ul className={styles.ul}>
							<li>Streamlined the front-end code and improved integration between design and development.</li>
							<li>Supported the product's rebranding efforts across marketing and development teams.</li>
							<li>Helped identify users' pain points and improve customer interactions.</li>
						</ul>
						<p>
							Alongside this, a full-scale rebrand was underway. The Marketing Team needed a modern identity system, and
							Product needed a scalable UI foundation to match.
						</p>
						<p>
							There was a clear opportunity to bridge the gap between design and code, unify the brand, and elevate the
							user experience across all touchpoints.
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
							Starting with initial brand guidelines from the Marketing Team, I extended these into a comprehensive UI
							kit to integrate into the product experience.
						</p>
						<p>
							At the time, design decisions within the product had evolved organically, often shaped by the fast pace of
							feature development.
						</p>
						<p>
							This presented an opportunity to introduce a shared identity system that could unify UI patterns and
							create a more cohesive experience across both product and marketing platforms.
						</p>
						<h3 className={styles.h3}>
							Research
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Discovery
							</span>
						</h3>
						<p>
							To understand the scope and needs of both marketing and product, I conducted a full audit of existing UI
							patterns using browser extensions, Figma plugin tools, and manual documentation. This included cataloging
							typography, color usage, spacing, icons, and more.
						</p>
						<p>From this, we had a clear map of inconsistencies and a starting point for simplification.</p>
						<h4 className={styles.h4}>Creating a Strategy</h4>
						<p>
							With a full picture of the product and marketing ecosystems, I drafted a system strategy focused on
							scalability, flexibility, and developer alignment.
						</p>
						<p>Key questions shaped the direction:</p>
						<ul className={styles.ul}>
							<li>Can a shared system support both marketing and product environments?</li>
							<li>How many visual modes (themes) do we need?</li>
							<li>Should we manage one central system, or split by brand/sub-brand?</li>
							<li>How can we future-proof the system for rapid growth?</li>
						</ul>
						<p>
							I presented these insights to the marketing, development, and product teams. We decided on a design system
							to support both the marketing CMS and the product UI. The plan featured two theme modes—a light variant
							for product use and a dark variant for marketing—while keeping the system flexible for future expansion.
						</p>
						<h3 className={styles.h3}>Building the System</h3>
						<p>
							With clear goals in place, I consolidated and documented elements into an atomic foundation, focusing on
							color, typography, and accessibility. This documentation would enable developers to easily replace raw
							data with system tokens during code implementation.
						</p>
						<p>
							I streamlined the palette by consolidating various grays into a series of neutral and brand-specific
							colors. I also established a clear type hierarchy with an updated font-scale based on harmonious
							mathematical ratios. To ensure the system met WCAG accessibility standards, multiple validation tests were
							performed and a chart of font and color combinations was created to guide usage in the system.
						</p>
						<p>
							To showcase early ideas, I coded a quick CodePen prototype using CSS custom properties. This allowed the
							team and stakeholders to see the system in action and provide feedback for quick iteration.
						</p>
						<h3 className={styles.h3}>
							Library
							<span className={styles.noWrap}>
								<span className={styles.altFont}>&amp;</span>&nbsp;Token
							</span>{' '}
							Architecture
						</h3>
						<p>
							With foundational decisions in place, I created a token structure with two theme modes using Figma
							variables, mapping them across a set of modular libraries—color, typography, icons, and logos. Organizing
							tokens into both global and project-specific libraries made the system easier to manage and flexible
							enough to support sub-branded implementations in the future. Each token was designed to translate cleanly
							to front-end code using CSS variables and consistent, developer-friendly naming conventions.
						</p>
						<h3 className={styles.h3}>Component Creation</h3>
						<p>
							Recognizing that future development would rely on clear, reusable components, I began building commonly
							used responsive patterns using Figma's auto-layout features. Designing the new marketing site in parallel
							provided a practical way to introduce components as needed and test the system holistically in a
							real-world context.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						The final outcome was a dual-mode Figma design system—modular, scalable, and ready for future development.
					</p>
					<p>Key deliverables included:</p>
					<ul className={styles.ul}>
						<li>
							A comprehensive Figma and multi-tiered CSS token system with clear, developer-friendly naming conventions.
						</li>
						<li>Design files for a refreshed marketing site, ready for handoff to development teams.</li>
						<li>Scalable libraries for company-wide and sub-brand adoption.</li>
						<li>Documentation and system assets prepared to support future development and growth.</li>
					</ul>
					<p>
						Although I concluded my work shortly after the design system was finalized, the system was ready for
						development implementation—positioned to evolve with the product and support a growing team.
					</p>
					<h3 className={styles.h3}>
						Learnings
						<span className={styles.noWrap}>
							<span className={styles.altFont}>&amp;</span>&nbsp;AI Tools
						</span>
					</h3>
					<p>
						Throughout the project, I leveraged various emerging AI tools—for research, note-taking, wireframing, and
						image manipulation—to accelerate the design process. Figma AI was especially useful for summarizing
						research, automating layout tasks, and generating early-stage copy. I explored Adobe Express to experiment
						with image and icon generation for graphic explorations, and ChatGPT played a key role in UX research,
						planning, and documentation.
					</p>
					<p>
						While these tools accelerated parts of the research and design process, production-quality visuals and
						illustrations still required manual refinement, which sometimes led to extra time spent reworking
						AI-generated assets. The experience highlighted the potential and limitations of AI. Overall, these tools
						served as helpful collaborators—but not full replacements.
					</p>
					<Link className={styles.buttonLink} href={fromSection ? `/#${fromSection}` : '/'}>
						&larr;&nbsp;Back to Work
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default CfContent;
