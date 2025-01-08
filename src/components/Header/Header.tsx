'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ThemePicker from '../ThemePicker/ThemePicker';
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
			<Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
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
