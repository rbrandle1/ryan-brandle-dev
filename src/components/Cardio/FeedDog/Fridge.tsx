import styles from './FeedDog.module.scss';

interface FridgeProps {
	getFood: (amount: number) => void;
	qty: number;
}

const Fridge = ({ getFood, qty }: FridgeProps) => {
	let hasFood = true;

	const handleClick = () => {
		let newQty = qty + 1;
		getFood(newQty);
	};

	return (
		<div className={`${styles.component} ${styles.fridge}`}>
			{hasFood ? (
				<>
					<h2>Amt: {qty ? qty : 0} bags</h2>
					<button onClick={handleClick}>Add a bag</button>
				</>
			) : (
				<p>There is no food in the fridge.</p>
			)}
		</div>
	);
};

export default Fridge;
