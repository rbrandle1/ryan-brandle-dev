import cn from 'classnames';
import Link from 'next/link';
import { Metadata } from 'next';
import Callout from '@/components/Callout/Callout';
import HeroImage from '@/components/Article/HeroImage/HeroImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import styles from '../projects.module.scss';

export const metadata: Metadata = {
	title: 'testing 134',
	description: 'Example description',
};

const InspPage = () => {
	return (
		<article className={styles.projectPage}>
			<header className={cn(styles.heroSection, styles.accentEdge)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						Creation <span className={styles.altFont}>&amp;</span>&nbsp;Growth of the Inspirato Design System
					</h1>
					<div className={styles.subhead}>
						Preparing a scalable design system for the future of Inspirato's products.
					</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<HeroImage
							className={cn(styles.imageContainer, styles.breakout)}
							src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							alt='Boats anchored off a white sandy beach in turquoise blue water'
							caption='Example of discovery process, wire-framing, journey mapping.'
							captionRight
							logo={<IconLogoInsp />}
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
						/>
						<h2 className={styles.h2}>
							The
							<br />
							Problem
						</h2>
						<p className={styles.p}>
							As the web evolves, so do the expectations of users. Our client, a leading e-commerce platform, recognized
							the need to revamp their online presence to better resonate with their target audience. This project aimed
							to redefine their web branding, ensuring a cohesive visual identity across all digital touchpoints.
						</p>
						<p className={styles.p}>
							Through a series of workshops and stakeholder interviews, we identified key areas for improvement. The
							existing brand identity was fragmented, with inconsistent typography, color schemes, and imagery across
							different platforms. This led to a disjointed user experience, negatively impacting customer engagement
							and ultimately, conversion rates.
						</p>
						<HeroImage
							className={cn(styles.imageContainer, styles.breakout)}
							src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							alt='Boats anchored off a white sandy beach in turquoise blue water'
							caption='Example of discovery process, wire-framing, journey mapping.'
						/>
						<p className={styles.p}>
							Our solution involved developing a comprehensive brand style guide, encompassing a refreshed color
							palette, typography, and imagery strategy. This ensured a unified visual language across the website,
							social media, and marketing materials, effectively communicating the brand's values and personality.
						</p>
						<p className={styles.p}>
							To further enhance the user experience, we implemented a responsive design that adapted seamlessly to
							various devices and screen sizes. This not only improved the overall aesthetic but also increased
							accessibility and usability, resulting in a significant boost to user engagement and conversion rates.
						</p>
						<p className={styles.p}>
							The project's success was evident in the positive feedback from users and stakeholders alike. The revamped
							web branding effectively communicated the client's values, resonating with their target audience and
							ultimately driving business growth.
						</p>
						<Callout
							className={cn(styles.callout, styles.breakout)}
							title='Creation is bing bang in a simple, modular approach since.'
							titleAccent
						/>
						<p className={styles.p}>
							The modular approach to design ensured that the new branding elements could be easily integrated into
							existing and future projects, streamlining the development process and reducing costs. This
							forward-thinking strategy positioned the client for long-term success in the ever-evolving digital
							landscape.
						</p>
						<p className={styles.p}>
							By embracing a user-centric approach and leveraging cutting-edge technologies, we were able to craft a web
							branding solution that not only met but exceeded the client's expectations. The project's outcome serves
							as a testament to the power of effective branding in driving business success.
						</p>
						<p className={styles.p}>
							The project's impact extended beyond the client's organization, contributing to the advancement of web
							branding best practices and inspiring future projects to prioritize user experience and visual cohesion.
						</p>
					</div>
				</section>
				<section className={styles.section}>
					<div className={styles.containerGrid}>
						<h3 className={styles.h3}>Research, Consolidate, Implement</h3>
						<p className={styles.p}>
							Our research phase involved conducting competitor analysis, user surveys, and stakeholder interviews to
							gain a deeper understanding of the target audience and their needs. This informed the development of a
							comprehensive brand strategy, ensuring that the new web branding was both visually appealing and
							functionally effective.
						</p>
						<p className={styles.p}>
							Consolidation of the brand identity was crucial in establishing a cohesive visual language across all
							digital touchpoints. This included the creation of a brand style guide, outlining the use of typography,
							color schemes, imagery, and tone of voice.
						</p>
						<p className={styles.p}>
							Implementation involved the redesign of the website, social media assets, and marketing materials to align
							with the new brand identity. This ensured a seamless user experience across all platforms, reinforcing the
							brand's message and values.
						</p>
						{/* <figure className={cn(styles.imageContainer, styles.breakout)}>
							<div className={styles.image}>
								<Image
									src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
									alt='Boats anchored off a white sandy beach in turquoise blue water'
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw'
								/>
							</div>
							<figcaption>test caption</figcaption>
						</figure> */}
						<p className={styles.p}>
							The outcome of this project was a testament to the power of effective branding in driving business
							success. By prioritizing user experience and visual cohesion, we were able to craft a web branding
							solution that not only met but exceeded the client's expectations.
						</p>
						<p className={styles.p}>
							The project's impact extended beyond the client's organization, contributing to the advancement of web
							branding best practices and inspiring future projects to prioritize user experience and visual cohesion.
						</p>
						<p className={styles.p}>
							The modular approach to design ensured that the new branding elements could be easily integrated into
							existing and future projects, streamlining the development process and reducing costs. This
							forward-thinking strategy positioned the client for long-term success in the ever-evolving digital
							landscape.
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.accentEdge)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p className={styles.p}>
						Ship it! Has been the industry's standard dummy text ever since the 1500s, example when an unknown printer
						took a galley of type and scrambled it to make a type specimen book.Work sans Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, example when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
					<Link className={styles.button} href='/'>
						back
					</Link>
				</div>
			</footer>
		</article>
	);
};

export default InspPage;
