'use client';
import styles from './Cardio.module.scss';
import { Book } from './Cardio';

interface CardioCardProps {
	data: Book;
	isOpen: boolean;
	onToggle: () => void;
}

const CardioCard = ({ data, isOpen, onToggle }: CardioCardProps) => {
	return (
		<div className={styles.card}>
			<h2>{data.title}</h2>
			<p>{data.pages} pages</p>
			<button onClick={onToggle}>{isOpen ? 'Close' : 'Open'}</button>
		</div>
	);
};
export default CardioCard;
