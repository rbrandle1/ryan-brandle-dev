import { useState } from 'react';
import styles from './FeedDog.module.scss';

interface BagProps {
	getFood: (value: number) => void;
}

const Bag = ({ getFood }: BagProps) => {
	const [qty, setQty] = useState(0);

	let hasFood = true;

	const handleClick = () => {
		let newQty = qty + 0.5;

		setQty(newQty);
		getFood(newQty);
	};

	const handleReset = () => {
		setQty(0);
		getFood(0);
	};

	return (
		<div className={`${styles.component} ${styles.bag}`}>
			{hasFood ? (
				<>
					<h2>Amt: {qty ? qty : 0} cups</h2>
					<button onClick={handleClick}>Add 1/2 Cup</button>
					{qty !== 0 && <button onClick={handleReset}>Reset</button>}
				</>
			) : (
				<p>There is no kibble in the bag :/</p>
			)}
		</div>
	);
};

export default Bag;
