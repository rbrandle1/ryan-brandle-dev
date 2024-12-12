import styles from './Footer.module.scss';

interface FooterProps {
	exampleA?: string;
	exampleB?: string;
}

const Footer = ({ exampleA, exampleB }: FooterProps) => {
	return <div className={styles.footer}>footer here</div>;
};

export default Footer;
