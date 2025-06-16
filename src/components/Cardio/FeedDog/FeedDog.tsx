'use client';
import { useState } from 'react';
import Bag from './Bag';
import Fridge from './Fridge';
import Bowl from './Bowl';
import Dog from './Dog';
import styles from './FeedDog.module.scss';

const FeedDog = () => {
	const [kibbleAmt, setKibbleAmt] = useState(0);
	const [wetAmt, setWetAmt] = useState(0);
	const [dogState, setDogState] = useState('hungry');

	const handleKibble = (amount: number) => {
		setKibbleAmt(amount);
	};

	const handleWetFood = (amount: number) => {
		setWetAmt(amount);
	};

	const handleFeed = () => {
		const totalFood = kibbleAmt + wetAmt;
		totalFood === 0 ? setDogState('dead') : setDogState('alive');
	};

	const handleReset = () => {
		setKibbleAmt(0);
		setWetAmt(0);
		setDogState('hungry');
	};

	return (
		<div className={styles.componentGrid}>
			<Bag getFood={handleKibble} qty={kibbleAmt} />
			<Fridge getFood={handleWetFood} qty={wetAmt} />
			<Bowl reset={handleReset} kibbleAmt={kibbleAmt} wetAmt={wetAmt} onFeed={handleFeed} />
			<Dog reset={handleReset} dogState={dogState} />
		</div>
	);
};
export default FeedDog;
