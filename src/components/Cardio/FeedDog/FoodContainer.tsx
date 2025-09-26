import styles from './FeedDog.module.scss';

type ContainerTypes = 'bag' | 'fridge';
type QuantityTypes = 'cup' | 'bag';

interface FoodContainerProps {
	getFood: (value: number) => void;
	qty: number;
	increment: number;
	type: ContainerTypes;
	label: QuantityTypes;
}

const FoodContainer = ({ getFood, qty, type, label, increment = 0.5 }: FoodContainerProps) => {
	const handleClick = () => {
		const newQty = qty + increment;
		getFood(newQty);
	};

	return (
		<div className={`${styles.component} ${styles[type]}`}>
			<h2>
				Amt: {qty ? qty : 0} {`${label}s`}
			</h2>
			<button onClick={handleClick}>Add {`${increment} ${label}`}</button>
		</div>
	);
};

export default FoodContainer;
