'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
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
						CF <span className={styles.altFont}>&amp;</span>&nbsp;
					</h1>
					<div className={styles.subhead}>CF</div>
				</div>
			</header>
			<div data-section='dark'>
				<section className={cn(styles.section, styles.heroOffset)}>
					<div className={styles.containerGrid}>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.heroImage)}
							src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							alt='Boats anchored off a white sandy beach in turquoise blue water'
							caption='Example of discovery process, wire-framing, journey mapping.'
							logo={<IconLogoInsp />}
							logoOffset='-5%'
							logoMaxWidth='380px'
							metaTags={['Branding', 'UX/UI', 'HTML', 'CSS', 'JS', 'React', 'Storybook']}
							isHero
							priority
						/>
						<h2 className={styles.h2}>
							The
							<br />
							Problem
						</h2>
						<p>
							As the web evolves, so do the expectations of users. Our client, a leading e-commerce platform, recognized
							the need to revamp their online presence to better resonate with their target audience. This project aimed
							to redefine their web branding, ensuring a cohesive visual identity across all digital touchpoints.
						</p>
						<p>
							Through a series of workshops and stakeholder interviews, we identified key areas for improvement. The
							existing brand identity was fragmented, with inconsistent typography, color schemes, and imagery across
							different platforms. This led to a disjointed user experience, negatively impacting customer engagement
							and ultimately, conversion rates.
						</p>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							alt='Boats anchored off a white sandy beach in turquoise blue water'
							caption='Example of discovery process, wire-framing, journey mapping.'
							captionLeft
						/>
						<p>
							Our solution involved developing a comprehensive brand style guide, encompassing a refreshed color
							palette, typography, and imagery strategy. This ensured a unified visual language across the website,
							social media, and marketing materials, effectively communicating the brand's values and personality.
						</p>
						<p>
							To further enhance the user experience, we implemented a responsive design that adapted seamlessly to
							various devices and screen sizes. This not only improved the overall aesthetic but also increased
							accessibility and usability, resulting in a significant boost to user engagement and conversion rates.
						</p>
						<p>
							The project's success was evident in the positive feedback from users and stakeholders alike. The revamped
							web branding effectively communicated the client's values, resonating with their target audience and
							ultimately driving business growth.
						</p>
						<Callout
							className={cn(styles.callout, styles.flowOffset)}
							title='Creation is bing bang in a simple, modular approach since.'
							titleAccent
						/>
						<p>
							The modular approach to design ensured that the new branding elements could be easily integrated into
							existing and future projects, streamlining the development process and reducing costs. This
							forward-thinking strategy positioned the client for long-term success in the ever-evolving digital
							landscape.
						</p>
						<p>
							By embracing a user-centric approach and leveraging cutting-edge technologies, we were able to craft a web
							branding solution that not only met but exceeded the client's expectations. The project's outcome serves
							as a testament to the power of effective branding in driving business success.
						</p>
						<p>
							The project's impact extended beyond the client's organization, contributing to the advancement of web
							branding best practices and inspiring future projects to prioritize user experience and visual cohesion.
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
							Our research phase involved conducting competitor analysis, user surveys, and stakeholder interviews to
							gain a deeper understanding of the target audience and their needs. This informed the development of a
							comprehensive brand strategy, ensuring that the new web branding was both visually appealing and
							functionally effective.
						</p>
						<LargeImage
							className={cn(styles.imageContainer, styles.flowOffset, styles.breakout)}
							src='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
							alt='Boats anchored off a white sandy beach in turquoise blue water'
							caption='Example of discovery process, wire-framing, journey mapping.'
						/>
						<p>
							Consolidation of the brand identity was crucial in establishing a cohesive visual language across all
							digital touchpoints. This included the creation of a brand style guide, outlining the use of typography,
							color schemes, imagery, and tone of voice.
						</p>
						<p>
							Implementation involved the redesign of the website, social media assets, and marketing materials to align
							with the new brand identity. This ensured a seamless user experience across all platforms, reinforcing the
							brand's message and values.
						</p>
						<div className={cn(styles.sideImagesContainer, styles.flowOffset)}>
							<SideImage
								imgSrc='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt='Boats anchored off a white sandy beach in turquoise blue water'
								imgRight
								caption='Example of discovery process, wire-framing, journey mapping.'
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
							<SideImage
								imgSrc='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt='Boats anchored off a white sandy beach in turquoise blue water'
							>
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
								imgSrc='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt='Boats anchored off a white sandy beach in turquoise blue water'
								imgRight
								caption='Example of discovery process, wire-framing, journey mapping.'
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
								imgSrc1='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt1='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc2='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt2='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc3='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt3='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc4='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt4='Boats anchored off a white sandy beach in turquoise blue water'
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
								imgSrc1='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt1='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc2='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt2='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc3='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt3='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc4='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt4='Boats anchored off a white sandy beach in turquoise blue water'
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
								imgSrc1='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt1='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc2='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt2='Boats anchored off a white sandy beach in turquoise blue water'
								imgSrc3='/images/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg'
								imgAlt3='Boats anchored off a white sandy beach in turquoise blue water'
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
						</p>
					</div>
				</section>
			</div>
			<footer className={cn(styles.section, styles.footer, styles.accentEdgeGradRev)}>
				<div className={styles.containerGrid}>
					<h2 className={styles.h2}>The Final Result</h2>
					<p>
						Ship it! Has been the industry's standard dummy text ever since the 1500s, example when an unknown printer
						took a galley of type and scrambled it to make a type specimen book.Work sans Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, example when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
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
