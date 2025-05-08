'use client';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemePicker from '@/components/ThemePicker/ThemePicker';
import LogoSwitcher from '@/components/LogoSwitcher/LogoSwitcher';
import styles from './Header.module.scss';

const PAGES = [
	{ path: '/', label: 'Work' },
	{ path: '/about', label: 'About' },
] as const;

const Header = () => {
	const pathName = usePathname();

	const hasLoggedRef = useRef(false);

	useEffect(() => {
		if (!hasLoggedRef.current) {
			console.log(
				'\n\n%cOh hey! 👋%c\n\nThanks for dropping by—your curiosity is %cmuch appreciated%c.\n\nNow go ahead... %csnoop around ;)%c\n\n',
				'color: #000000; font-weight: bold; background: #00ffff; padding: 2px 4px; border-radius: 4px;',
				'',
				'font-weight: bold;',
				'',
				'font-style: italic;',
				'',
			);

			hasLoggedRef.current = true;
		}
	}, []);

	return (
		<header className={styles.header}>
			<div className={cn(styles.container, styles.full)}>
				<Link href='#main' className={styles.skipLink}>
					Skip to main content
				</Link>
				<div className={styles.logoContainer}>
					<div className={styles.logoIcon}>
						<Link href='/' aria-label='Return to home page'>
							<LogoSwitcher />
						</Link>
					</div>
					<div className={styles.logoText}>
						<div>Ryan Brandle</div>
						<div>DESIGN + ENGINEER</div>
					</div>
				</div>
				<nav className={styles.navContainer} aria-label='Main navigation'>
					<ul role='list' className={styles.nav}>
						{PAGES.map(({ path, label }, i) => (
							<li key={i}>
								<Link href={path} className={cn(styles.link, pathName === path && styles.isActive)} data-text={label}>
									{label}
								</Link>
							</li>
						))}
					</ul>
					<ThemePicker className={styles.picker} />
				</nav>
			</div>
		</header>
	);
};

export default Header;
