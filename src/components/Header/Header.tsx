'use client';
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
						<div>DES + DEV</div>
					</div>
				</div>
				<nav className={styles.navContainer}>
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
