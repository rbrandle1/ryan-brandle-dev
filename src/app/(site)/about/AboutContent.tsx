'use client';

import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { cfImages } from '@/data/images';
import Link from 'next/link';
import Callout from '@/components/Callout/Callout';
import LargeImage from '@/components/Article/LargeImage/LargeImage';
import IconLogoInsp from '@/components/Icons/IconLogoInsp';
import SideImage from '@/components/Article/SideImage/SideImage';
import MultiImage from '@/components/Article/MultiImage/MultiImage';
import styles from './about.module.scss';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconGithub from '@/components/Icons/IconGithub';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import Button from '@/components/Button/Button';

// I've been building for the web for 17 years, specializing in UX/UI engineering, front-end development, and product design. Throughout my career, I’ve collaborated with tech, product, and marketing teams to craft experiences people trust, love, and enjoy using. My goal is simple: to build high-quality products that are intuitive, accessible, and beautifully executed.

// I bring the design eye every dev team needs, crafting flexible, modular design systems that turn good products into great ones. I ensure design, accessibility, and user experience aren’t afterthoughts but woven into the fabric of the product. By coding fluid, scalable, and elegant UI components, I help teams build with consistency and ease.

// I thrive in fun, supportive teams that value craftsmanship and thoughtful execution. I love sharing knowledge, giving meaningful feedback, and refining the small details that make a big impact. And nothing beats the thrill of building something, perfecting it, and releasing it into the world.

// Beyond the web, I’m a proud dad raising two wild boys with my amazing wife. We love camping, cycling, and getting lost on off-the-path adventures—enjoying the journey and everything it brings.

export const AboutContent = () => {
	const searchParams = useSearchParams();
	const fromSection = searchParams.get('from');

	return (
		<article className={styles.notFound} data-not-found>
			<section className={cn(styles.soloSection, styles.accentEdgeGrad)}>
				<div className={styles.containerGrid}>
					<h1 className={styles.h1}>
						Too 🔥 To Brandle<sup>*</sup>
					</h1>
					<cite className={styles.citation}>
						<sup>*</sup> Apologies for the headline... I only get to bust this out at happy hour game nights. It just
						fits so damn well.
					</cite>
					{/* <p>
						I've been building for the web for {new Date().getFullYear() - 2008} years, specializing in UX/UI
						engineering, front-end development, and product design. Throughout my career, I've collaborated with tech,
						product and marketing teams to build experiences people trust, love and enjoy using.
					</p>
					<p>
						My past roles have carried a mix of titles that include labels like{' '}
						<em>UX, UI, Developer, Engineer, Designer,</em> etc. But at the core, my mission has always been the same:
					</p>
					<p>
						<strong>To build high quality products that are easy and enjoyable to use.</strong>
					</p>
					<p>
						I bring that design eye every dev team needs and develop flexible, modular design systems that elevate good
						products to great ones. I ensure design, accessibility and user experience isn't an afterthought but is a
						part of the fabric of the product.
					</p>
					<p>
						I’m passionate about coding design to life, as fluid, accessible, and scalable experiences. I create simple,
						elegant design systems and modular components that empower teams to build with consistency and ease.
					</p>
					<p>
						I thrive in fun, supportive teams that care about craftsmanship, design quality, and thoughtful execution. I
						love sharing knowledge, giving meaningful feedback, and collaborating with designers and developers to
						refine the small details that make a big impact. And nothing beats the thrill of building something,
						perfecting it, and releasing it into the world.
					</p>
					<p>
						I'm a proud dad raising two wild boys with my lovely wife. We love to camp, cycle, and get lost in
						off-the-path adventures—enjoying the journey and all it brings.
					</p> */}
					<p>
						I've been building for the web for 17 years, specializing in UX/UI engineering, front-end development, and
						product design. Throughout my career, I’ve worked with tech, product, and marketing teams to create
						experiences people love, trust, and enjoy using.
					</p>
					<p>
						My goal has always been simple:
						<br />
						<strong>to build high-quality products that are intuitive, accessible, and beautifully executed.</strong>
					</p>
					<p>
						I bring that <em>"design eye"</em> every dev team loves, coding design systems that make products more
						consistent, scalable, and easy to use—[EDIT] Ensuring design quality and accessibility aren’t afterthoughts
						but are a core part of the product experience. [EDIT]By coding fluid, thoughtful interfaces, I help teams
						bring their ideas to life with precision and polish.
					</p>
					<p>
						[EDIT]I thrive in fun, supportive teams that value clean code, [EDIT] user experience, and embrace design. I
						love sharing knowledge, exchanging meaningful feedback, and refining the small details that make a big
						impact. [EDIT]And nothing beats the thrill of building something beautiful and releasing it into the world!
					</p>
					<p>
						Beyond the web, I’m a proud dad raising two wild boys with my lovely wife. We love camping, cycling, and
						getting lost in off-the-path adventures—enjoying the journey with love and open arms[EDIT]... too many
						"loves?".
					</p>
					<Button className={styles.button} href={'mailto:hello@example.com'}>
						Get in touch
					</Button>
					<div className={styles.socialContainer}>
						<p>You can also find me on the web at:</p>
						<ul className={styles.socialList}>
							<li>
								<a
									href='https://github.com/rbrandle1'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Visit Ryan Brandle on Github'
								>
									<IconGithub /> Github
								</a>
							</li>
							<li>
								<a
									href='https://codepen.io/brandledesign'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Visit Ryan Brandle on Codepen'
								>
									<IconCodePen /> Codepen
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/in/rbrandle'
									target='_blank'
									rel='noopener noreferrer'
									aria-label='Visit Ryan Brandle on LinkedIn'
								>
									<IconLinkedIn /> LinkedIn
								</a>
							</li>
						</ul>
					</div>
					{/* <cite className={styles.citation}>
						<span className={styles.bold}>
							<sup>*</sup> Apologies for the headline...
						</span>{' '}
						I only get to bust this out at happy hour game nights. It just fits so damn well.
					</cite> */}
					{/* <p>
						I bring 15+ years of experience crafting front-end experiences that are as polished as they are functional.
						I live in that sweet spot between design and code, ensuring products don’t just work—but feel amazing to
						use.
					</p>
					<p>
						I specialize in silky smooth CSS, meticulously crafted design systems, and pixel-perfect UI execution,
						enabling design and development teams to build kick-ass products with consistency and ease. I thrive on
						adding that final layer of polish—the refined interactions, the thoughtful spacing, the delightful
						micro-details that elevate a product from good to exceptional.
					</p>
					<p>
						I believe that design quality isn’t an afterthought—it’s a standard. I love working with fun, supportive,
						and detail-obsessed teams who share that mindset. Teams that care about craft, accessibility, and delivering
						world-class digital experiences.
					</p>
					<p>
						This site? Designed and built by me. Every pixel, every component, every animation—crafted with precision
						and care.
					</p>
					<p>Let’s build something exceptional together. 🚀</p>
					<p>
						Hey, I’m [Your Name] – a Design Engineer Who Builds the Pieces That Make Products Shine. I have a
						developer’s mindset with a designer’s eye, and I thrive on crafting the parts that bring a product to
						life—the systems, components, and polished UI details that make experiences feel effortless and refined. For
						over 15 years, I’ve been building flexible, modular design systems that empower teams to create consistent,
						high-quality products. I believe great design isn’t just how something looks—it’s how it works, how it
						scales, and how it feels to use. My work brings clarity, precision, and that extra level of polish every dev
						and product team needs. I love the process of crafting, refining, and releasing—that moment when something
						I’ve built goes out into the world and starts making an impact. I also love sharing my knowledge, offering
						feedback, and helping designers and developers sharpen their craft. The best teams are ones that respect
						design, value execution, and care about building great things together. This site? Designed and built by me.
						Every piece, every pixel, every interaction—crafted with intention and care. When I’m not fine-tuning the
						details of a UI, I’m traveling, being a dad, and geeking out over systems, structure, and the beauty of
						well-executed design. Let’s build something exceptional together. 🚀
					</p> */}
					{/* <Button className={styles.button} href={'/'}>
						View my work
					</Button> */}
				</div>
			</section>
		</article>
	);
};

export default AboutContent;
