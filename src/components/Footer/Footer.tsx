import Link from 'next/link';
import LogoSwitcher from '@/components/LogoSwitcher/LogoSwitcher';
import IconCircleText from '@/components/Icons/IconTextCircle';
import IconLinkedIn from '@/components/Icons/IconLinkedIn';
import IconCodePen from '@/components/Icons/IconCodePen';
import IconGithub from '@/components/Icons/IconGithub';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logoContainer}>
					<div className={styles.logoCircle}>
						<IconCircleText />
					</div>
					<div className={styles.logoIcon}>
						<Link href='/' aria-label='Return to home page'>
							<LogoSwitcher />
						</Link>
					</div>
				</div>
				<div className={styles.contactContainer}>
					<h3>Contact</h3>
					<p>
						I’m always open to new opportunities so please don’t hesitate to{' '}
						<a href='mailto:hello@example.com'>say hi anytime!</a>
					</p>
				</div>
				<div className={styles.copyContainer}>
					<p>100% designed & developed by Ryan Brandle &copy; 2025</p>
				</div>
				<div className={styles.socialContainer}>
					<span className={styles.icon}>
						<IconGithub />
					</span>
					<span className={styles.icon}>
						<IconCodePen />
					</span>
					<span className={styles.icon}>
						<IconLinkedIn />
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
