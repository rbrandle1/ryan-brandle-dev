import styles from './Footer.module.scss';
import Image from 'next/image';

interface FooterProps {
	exampleA?: string;
	exampleB?: string;
}

const Footer = ({ exampleA, exampleB }: FooterProps) => {
	return (
		<div className={styles.footer}>
			<Image className={styles.logo} src='/next.svg' alt='Next.js logo' width={180} height={38} priority />
			<div>Footer stuff here</div>
		</div>
	);
};

export default Footer;
