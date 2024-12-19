import cn from 'classnames';
import styles from './Header.module.scss';
import Image from 'next/image';

interface HeaderProps {
	isMenuOpen?: boolean;
	setIsMenuOpen?: (isOpen: boolean) => void;
}

//add isActive booleans to links

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
	return (
		<header className={styles.header}>
			<Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
			<div className={styles.navContainer}>
				<ul className={styles.nav}>
					<li>
						<a href='/insp' className={cn(styles.link, styles.isActive)}>
							work
						</a>
					</li>
					<li>
						<a href='/cf' className={styles.link}>
							about
						</a>
					</li>
				</ul>
				<div className={styles.themeSelector}>theme selector here</div>
			</div>
		</header>
	);
};

export default Header;
