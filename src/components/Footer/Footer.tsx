// import { useState } from 'react';
// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LogoSwitcher from '../LogoSwitcher/LogoSwitcher';
import styles from './Footer.module.scss';

// interface FooterProps {
// 	exampleA?: string;
// 	exampleB?: string;
// }

const Footer = () => {
	// const pathName = usePathname();
	// const [activeLink, setActiveLink] = useState(pathName);

	// const handleLinkClick = (path: string) => {
	// 	setActiveLink(path);
	// };

	return (
		<footer className={styles.footer}>
			<div className={styles.logoContainer}>
				<div className={styles.logoIcon}>
					<Link
						href='/'
						aria-label='Return to home page'
						// onClick={() => handleLinkClick('/')}
					>
						<LogoSwitcher />
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
