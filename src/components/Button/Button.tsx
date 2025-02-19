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
	return (
		<div className={cn(styles.buttonContainer, className)}>
			<Link className={styles.button} href={href} aria-label={ariaLabel}>
				{children}
			</Link>
			<div className={cn(styles.buttonShadow, styles.bottomLeft)}></div>
			<div className={cn(styles.buttonShadow, styles.topRight)}></div>
		</div>
	);
};

export default Button;
