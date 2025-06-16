import styles from './FeedDog.module.scss';

interface BowlProps {
	kibbleAmt: number;
	wetAmt: number;
	onFeed: () => void;
	reset: () => void;
}

const Bowl = ({ kibbleAmt, wetAmt, onFeed, reset }: BowlProps) => {
	const hasFood = kibbleAmt > 0 || wetAmt > 0;

	return (
		<div className={`${styles.component} ${styles.full}`}>
			<h2>{hasFood ? 'There is food in the bowl.' : 'The bowl is empty'}</h2>
			<button onClick={onFeed}>Feed the dog?</button>
			{hasFood && <button onClick={reset}>Empty</button>}
		</div>
	);
};

export default Bowl;
