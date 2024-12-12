import styles from './Header.module.scss';
import Image from 'next/image';

interface HeaderProps {
	isMenuOpen?: boolean;
	setIsMenuOpen?: (isOpen: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
	return (
		<header className={styles.header}>
			<Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
			<div>theme selector here</div>
		</header>
	);
};

export default Header;
