'use client';
import cn from 'classnames';
import { useInView } from 'react-intersection-observer';
import styles from './Callout.module.scss';
import setInlineStyles from '@/helpers/functions';

interface CalloutProps {
	children?: React.ReactNode;
	iconAccent?: boolean;
	title: string;
	titleAccent?: boolean;
	size?: 'sm' | 'md' | 'lg';
	body?: string;
}

const Callout = ({ children, title, size = 'md', body, iconAccent, titleAccent }: CalloutProps) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});

	return (
		<div
			ref={ref}
			className={cn(styles.callOut, inView && styles.fadeInUp)}
			style={setInlineStyles({
				'--icon-color': iconAccent ? 'var(--icon-accent)' : null,
				'--title-color': titleAccent ? 'var(--text-accent)' : null,
			})}
		>
			{children ? <div className={styles.icon}>{children}</div> : null}
			<h2 className={cn(styles.title, styles[size])}>{title}</h2>
			{body ? <div className={styles.body}>{body}</div> : null}
		</div>
	);
};

export default Callout;
