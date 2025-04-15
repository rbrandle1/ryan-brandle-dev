'use client';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import styles from './Callout.module.scss';
import setInlineStyles from '@/helpers/functions';
import Button from '@/components/Button/Button';

interface CalloutProps {
	className?: string;
	children?: React.ReactNode;
	iconAccent?: boolean;
	title: string;
	titleAccent?: boolean;
	size?: 'sm' | 'md' | 'lg';
	body?: string;
	buttonText?: string;
	href?: string;
}

const Callout = ({
	className,
	children,
	title,
	size = 'md',
	body,
	iconAccent,
	titleAccent,
	buttonText,
	href,
}: CalloutProps) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});

	return (
		<aside
			ref={ref}
			className={cn(styles.callOut, inView && styles.fadeInUp, className)}
			style={setInlineStyles({
				'--icon-color': iconAccent ? 'var(--icon-accent)' : null,
				'--title-color': titleAccent ? 'var(--text-accent)' : null,
			})}
		>
			{children ? <div className={styles.icon}>{children}</div> : null}
			<h2 className={cn(styles.title, styles[size])}>{title}</h2>
			{body ? <div className={styles.body}>{body}</div> : null}
			{buttonText && href ? (
				<Button className={styles.button} href={href} ariaLabel={`Send an email to Ryan`}>
					{buttonText}
				</Button>
			) : null}
		</aside>
	);
};

export default Callout;
