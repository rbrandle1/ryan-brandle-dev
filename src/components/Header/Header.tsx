import cn from 'classnames';
import styles from './Header.module.scss';
import Image from 'next/image';
import ThemePicker from '../ThemePicker/ThemePicker';

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
						<a href='/style' className={styles.link}>
							style
						</a>
					</li>
				</ul>
				<ThemePicker />
			</div>
		</header>
	);
};

export default Header;
