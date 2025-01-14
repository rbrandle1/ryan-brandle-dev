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
					<a className={styles.icon} href='https://github.com/rbrandle1' target='_blank' rel='noopener noreferrer'>
						<IconGithub />
					</a>
					<a className={styles.icon} href='https://codepen.io/brandledesign' target='_blank' rel='noopener noreferrer'>
						<IconCodePen />
					</a>
					<a
						className={styles.icon}
						href='https://www.linkedin.com/in/rbrandle'
						target='_blank'
						rel='noopener noreferrer'
					>
						<IconLinkedIn />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
