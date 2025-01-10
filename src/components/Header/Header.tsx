'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Theme } from '@/types/themeTypes';
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
	const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'm');

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.dataset.theme = theme;
	}, [theme]);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
	};

	const pathName = usePathname();
	const [activeLink, setActiveLink] = useState(pathName);

	const handleLinkClick = (path: string) => {
		setActiveLink(path);
	};

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<div className={styles.logoIcon}>
					<LogoSwitcher theme={theme} />
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
				<ThemePicker theme={theme} onThemeChange={handleThemeChange} />
			</nav>
		</header>
	);
};

export default Header;
