'use client';

import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import LogoSwitcher from '@/components/LogoSwitcher/LogoSwitcher';
import IconCircleText from '@/components/Icons/IconTextCircle';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconGithub from '@/components/Icons/IconGithub';
import styles from './Footer.module.scss';

const Footer = () => {
	const pathname = usePathname();
	const [isAccentAlt, setIsAccentAlt] = useState(false);

	useEffect(() => {
		let dataNotFound = document.querySelector('[data-not-found]');

		const useAccentAlt = pathname === '/about' || !!dataNotFound;
		setIsAccentAlt(useAccentAlt);
	}, [pathname]);

	return (
		<footer
			className={cn(styles.footer, pathname === '/about' || isAccentAlt ? styles.accentEdgeAlt : styles.accentEdge)}
		>
			<div className={cn(styles.container, styles.full)}>
				<div className={styles.logoContainer}>
					<Link className={styles.logoLink} href='/' aria-label='Return to home page'>
						<div className={styles.logoCircle}>
							<IconCircleText />
						</div>
						<div className={styles.logoIcon}>
							<LogoSwitcher />
						</div>
					</Link>
				</div>
				<div className={styles.contactContainer}>
					<h3>Contact</h3>
					<p>
						I'm always open to new opportunities so please don't&nbsp;hesitate to{' '}
						<a href='mailto:hello@example.com'>say&nbsp;hi&nbsp;anytime!</a>
					</p>
				</div>
				<div className={styles.copyContainer}>
					<p>100% designed &amp;&nbsp;developed by Ryan&nbsp;Brandle &copy;&nbsp;2025</p>
				</div>
				<div className={styles.socialContainer}>
					<a className={styles.icon} href='https://github.com/rbrandle1' target='_blank' rel='noopener noreferrer'>
						<IconGithub />
					</a>
					<a className={styles.icon} href='https://codepen.io/brandledesign' target='_blank' rel='noopener noreferrer'>
						<IconCodePen />
					</a>
					<a
						className={styles.icon}
						href='https://www.linkedin.com/in/rbrandle'
						target='_blank'
						rel='noopener noreferrer'
					>
						<IconLinkedIn />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
