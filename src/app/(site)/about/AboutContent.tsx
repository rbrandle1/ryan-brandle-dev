'use client';

import cn from 'classnames';
import styles from './about.module.scss';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconGithub from '@/components/Icons/IconGithub';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import Button from '@/components/Button/Button';

export const AboutContent = () => (
	<article className={styles.about} data-not-found>
		<section className={cn(styles.soloSection, styles.accentEdgeGrad)}>
			<div className={styles.containerGrid}>
				<h1 className={styles.h1}>
					Too 🔥 To Brandle<sup>*</sup>
				</h1>
				<p>
					I've been building for the web for well over a decade, specializing in UX/UI engineering, front-end
					development, and product design.
				</p>
				<p>
					Throughout my career, I've worked with startups and industry leaders to create flexible, visual systems that
					help teams build awesome products. My goal is simple:{' '}
					<strong>to craft high-quality experiences that people love, trust, and enjoy using!</strong>
				</p>
				<p>
					I bring that <em>design eye</em> dev teams love, coding interfaces that aren't just functional—they're
					polished, intuitive, and scalable. With a strong focus on UX, accessibility, and design quality, I blend
					attention to detail with thoughtful execution.
				</p>
				<p>
					I'm a proud dad. When I'm not at my desk, I spend my time raising two wild boys with my amazing wife. We love
					camping, cycling, and getting lost on off-the-path adventures.
				</p>
				<p>Interested in partnering? I'd love to hear from you!</p>
				<Button className={styles.button} href={'mailto:ryanbrandle.dev@gmail.com?subject=Hello!'}>
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
				<cite className={styles.citation}>
					<sup>*</sup> Apologies for the headline... I only get to bust this out at happy hour game nights.
				</cite>
			</div>
		</section>
	</article>
);

export default AboutContent;
