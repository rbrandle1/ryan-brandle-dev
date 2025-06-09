import styles from './FeedDog.module.scss';

interface BowlProps {
	kibbleAmt: number;
	wetAmt: number;
	onFeed: () => void;
}

const Bowl = ({ kibbleAmt, wetAmt, onFeed }: BowlProps) => {
	return (
		<div className={`${styles.component} ${styles.bowl}`}>
			<h2>{kibbleAmt > 0 || wetAmt > 0 ? 'There is food in the bowl.' : 'The bowl is empty'}</h2>
			<button onClick={onFeed}>Feed the dog?</button>
		</div>
	);
};

export default Bowl;
