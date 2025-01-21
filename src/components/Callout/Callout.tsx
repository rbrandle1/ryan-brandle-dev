import IconCodePen from '@/components/Icons/IconCodePen';
import styles from './Callout.module.scss';

const Callout = () => {
	return (
		<div className={styles.callOut}>
			<div className={styles.icon}>
				<IconCodePen />
			</div>
			<div className={styles.title}>I make modular, flexible systems that are easy to use.</div>
			<div className={styles.body}>
				My approach is to create a system that is modular and flexible, so that it can be used in a variety of ways.
			</div>
		</div>
	);
};

export default Callout;
