'use client';
import React, { useState } from 'react';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ThemePicker from '../ThemePicker/ThemePicker';
import styles from './Header.module.scss';

const PAGES = [
	{ url: '/', label: 'Work' },
	{ url: '/style', label: 'About' },
] as const;

const Header = () => {
	const pathname = usePathname();
	const [activeLink, setActiveLink] = useState(pathname);

	const handleLinkClick = (url: string) => {
		setActiveLink(url);
	};

	return (
		<header className={styles.header}>
			<Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
			<nav className={styles.navContainer}>
				<ul className={styles.nav}>
					{PAGES.map(({ url, label }, i) => (
						<li key={i}>
							<Link
								href={url}
								className={cn(styles.link, activeLink === url && styles.isActive)}
								data-text={label}
								onClick={() => handleLinkClick(url)}
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
