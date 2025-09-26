'use client';
import { useState } from 'react';
import Bowl from './Bowl';
import Dog from './Dog';
import styles from './FeedDog.module.scss';
import FoodContainer from './FoodContainer';

type DogState = 'hungry' | 'alive' | 'dead';

const FeedDog = () => {
	const [kibbleAmt, setKibbleAmt] = useState(0);
	const [wetAmt, setWetAmt] = useState(0);
	const [dogState, setDogState] = useState<DogState>('hungry');

	const handleKibble = (amount: number) => {
		setKibbleAmt(amount);
	};

	const handleWetFood = (amount: number) => {
		setWetAmt(amount);
	};

	const handleFeed = () => {
		const totalFood = kibbleAmt + wetAmt;
		setDogState(totalFood === 0 ? 'dead' : 'alive');
	};

	const handleReset = () => {
		setKibbleAmt(0);
		setWetAmt(0);
		setDogState('hungry');
	};

	return (
		<div className={styles.componentGrid}>
			<FoodContainer getFood={handleKibble} qty={kibbleAmt} increment={0.5} label='cup' type='bag' />
			<FoodContainer getFood={handleWetFood} qty={wetAmt} increment={1} label='bag' type='fridge' />
			<Bowl reset={handleReset} kibbleAmt={kibbleAmt} wetAmt={wetAmt} onFeed={handleFeed} />
			<Dog reset={handleReset} dogState={dogState} />
		</div>
	);
};
export default FeedDog;
