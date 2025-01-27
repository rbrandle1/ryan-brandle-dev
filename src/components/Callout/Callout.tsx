import styles from './Callout.module.scss';
import setInlineStyles from '@/helpers/functions';

interface CalloutProps {
	children?: React.ReactNode;
	iconAccent?: boolean;
	title: string;
	titleAccent?: boolean;
	body?: string;
}

const Callout = ({ children, title, body, iconAccent, titleAccent }: CalloutProps) => {
	return (
		<div
			className={styles.callOut}
			style={setInlineStyles({
				'--icon-color': iconAccent ? 'var(--icon-accent)' : null,
				'--title-color': titleAccent ? 'var(--text-accent)' : null,
			})}
		>
			{children ? <div className={styles.icon}>{children}</div> : null}
			<h2 className={styles.title}>{title}</h2>
			{body ? <div className={styles.body}>{body}</div> : null}
		</div>
	);
};

export default Callout;
