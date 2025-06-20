'use client';
import styles from './Cardio.module.scss';
import { CardioProps } from './Cardio';
import { useState } from 'react';

const CardioCard = ({ title, pages, description, releaseDate }: CardioProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((is) => !is);
	};

	return (
		<div className={styles.card}>
			<h2>{title}</h2>
			<button onClick={handleToggle}>Learn more</button>
			{isOpen && (
				<>
					<p>{description}</p>
					<span>{pages}pgs </span>
					<span>Released: {releaseDate}</span>
				</>
			)}
		</div>
	);
};
export default CardioCard;

// interface CardioCardProps {
// 	data: CardioProps;
// 	isOpen: boolean;
// 	onToggle: () => void;
// }

// const CardioCard = ({ data, isOpen, onToggle }: CardioCardProps) => {
// 	return (
// 		<div className={styles.card}>
// 			<h2>{data.title}</h2>
// 			<p>{data.pages}</p>
// 			<button onClick={onToggle}>toggle</button>
// 			{isOpen ? <p>{data.description}</p> : null}
// 		</div>
// 	);
// };

// export default CardioCard;

// 'use client';
// import styles from './Cardio.module.scss';
// import { Book } from './Cardio';

// interface CardioCardProps {
// 	data: Book;
// 	isOpen: boolean;
// 	onToggle: (description: string, releaseDate: number, buttonText: string) => void;
// }

// const CardioCard = ({ data, onToggle, isOpen }: CardioCardProps) => {
// 	return (
// 		<div className={styles.card}>
// 			<h2>{data.title}</h2>
// 			<p>{data.pages}</p>
// 			<button onClick={(event) => onToggle(data.description, data.releaseDate, event.currentTarget.innerText)}>
// 				{isOpen ? 'Close' : 'Open'}
// 			</button>
// 		</div>
// 	);
// };

// export default CardioCard;

// ANSWER

// 'use client';
// import styles from './Cardio.module.scss';
// import { Book } from './Cardio';

// interface CardioCardProps {
// 	data: Book;
// 	isOpen: boolean;
// 	// onToggle: () => void;
// 	onToggle: (bookTitle: string, bookDescription: string, e: any) => void; // if you have arguments, you need the long form when writing the onClick below like () => onToggle('a', 'b')
// }

// const CardioCard = ({ data, isOpen, onToggle }: CardioCardProps) => {
// 	const handleOnClick = (e: any) => onToggle(data.title, 'sack', e);

// 	return (
// 		<div className={styles.card}>
// 			<h2>{data.title}</h2>
// 			<p>{data.pages} pages</p>
// 			{/* <button onClick={onToggle}>{isOpen ? 'Close' : 'Open'}</button> */}
// 			{/* <button onClick={(e) => onToggle(data.title, 'sack', e)}>{isOpen ? 'Close' : 'Open'}</button> */} // the (e) is also giving space for more even more to happen in the function... remember the banker doesn't care how this get's back to him.
// 			<button onClick={handleOnClick}>{isOpen ? 'Close' : 'Open'}</button>
// 		</div>
// 	);
// };
// export default CardioCard;
