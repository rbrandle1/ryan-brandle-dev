import styles from './FeedDog.module.scss';

interface BagProps {
	getFood: (value: number) => void;
	qty: number;
}

const Bag = ({ getFood, qty }: BagProps) => {
	let hasFood = true;

	const handleClick = () => {
		let newQty = qty + 0.5;
		getFood(newQty);
	};

	return (
		<div className={`${styles.component} ${styles.bag}`}>
			{hasFood ? (
				<>
					<h2>Amt: {qty ? qty : 0} cups</h2>
					<button onClick={handleClick}>Add 1/2 Cup</button>
				</>
			) : (
				<p>There is no kibble in the bag :/</p>
			)}
		</div>
	);
};

export default Bag;
