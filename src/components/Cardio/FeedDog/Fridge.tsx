import { useState } from 'react';
import styles from './FeedDog.module.scss';

interface FridgeProps {
	getFood: (amount: number) => void;
}

const Fridge = ({ getFood }: FridgeProps) => {
	const [qty, setQty] = useState(0);

	let hasFood = true;

	const handleClick = () => {
		let newQty = qty + 1;

		setQty(newQty);
		getFood(newQty);
	};

	const handleReset = () => {
		setQty(0);
		getFood(0);
	};

	return (
		<div className={`${styles.component} ${styles.fridge}`}>
			{hasFood ? (
				<>
					<h2>Amt: {qty ? qty : 0} bags</h2>
					<button onClick={handleClick}>Add a bag</button>
					{qty !== 0 && <button onClick={handleReset}>Reset</button>}
				</>
			) : (
				<p>There is no food in the fridge.</p>
			)}
		</div>
	);
};

export default Fridge;
