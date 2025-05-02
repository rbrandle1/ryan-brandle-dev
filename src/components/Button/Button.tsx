import cn from 'classnames';
import Link from 'next/link';
import styles from './Button.module.scss';

interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	href: string;
	ariaLabel?: string;
}

const Button = ({ className, children, href, ariaLabel }: ButtonProps) => {
	const isExternal = href.startsWith('http') || href.startsWith('mailto:');

	return (
		<div className={className}>
			<div className={styles.buttonContainer}>
				{isExternal ? (
					<a className={styles.button} target='_blank' rel='noopener noreferrer' href={href} aria-label={ariaLabel}>
						{children}
					</a>
				) : (
					<Link className={styles.button} href={href} aria-label={ariaLabel}>
						{children}
					</Link>
				)}
				<div className={cn(styles.buttonShadow, styles.bottomLeft)}></div>
				<div className={cn(styles.buttonShadow, styles.topRight)}></div>
			</div>
		</div>
	);
};

export default Button;
