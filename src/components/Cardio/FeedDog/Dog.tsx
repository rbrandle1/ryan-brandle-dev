import styles from './FeedDog.module.scss';

interface DogProps {
	dogState: string;
	reset: () => void;
}

const Dog = ({ dogState, reset }: DogProps) => {
	const result =
		dogState === 'dead' ? (
			<>
				<p>Dog died... ☠️</p>
				<button onClick={reset}>Try Again</button>
			</>
		) : dogState === 'alive' ? (
			<>
				<p>Dog is happy 🐶</p>
				<button onClick={reset}>Start over</button>
			</>
		) : (
			<p>dog is hungry 🐕</p>
		);

	return <div className={`${styles.component} ${styles.full}`}>{result}</div>;
};
export default Dog;
