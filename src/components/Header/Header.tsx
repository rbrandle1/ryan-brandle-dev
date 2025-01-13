'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import Link from 'next/link';
import ThemePicker from '@/components/ThemePicker/ThemePicker';
import LogoSwitcher from '@/components/LogoSwitcher/LogoSwitcher';
import styles from './Header.module.scss';

const PAGES = [
	{ path: '/', label: 'Work' },
	{ path: '/style', label: 'About' },
] as const;

const Header = () => {
	const pathName = usePathname();
	const [activeLink, setActiveLink] = useState(pathName);

	const handleLinkClick = (path: string) => {
		setActiveLink(path);
	};

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div className={styles.logoIcon}>
					<Link href='/' aria-label='Return to home page' onClick={() => handleLinkClick('/')}>
						<LogoSwitcher />
					</Link>
				</div>
				<div className={styles.logoText}>
					<div>Ryan Brandle</div>
					<div>DES + DEV</div>
				</div>
			</div>
			<nav className={styles.navContainer}>
				<ul className={styles.nav}>
					{PAGES.map(({ path, label }, i) => (
						<li key={i}>
							<Link
								href={path}
								className={cn(styles.link, activeLink === path && styles.isActive)}
								data-text={label}
								onClick={() => handleLinkClick(path)}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>
				<ThemePicker />
			</nav>
		</header>
	);
};

export default Header;
