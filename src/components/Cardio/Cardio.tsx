// Practice from Tim:
// Swagger docs:  https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Books/get_books
// end point for books: https://potterapi-fedeperin.vercel.app/en/books

// 1. Create a parent container that holds state
// 2. fetch the data from the /books endpoint and set the array of books to state
// 3. if data then map to child components, else return null
// 4. pass data to child, try passing multiple props in the function
// 5. display data on child.
// 6. bring the data from the child back up and console.log it... or do something with it to update another piece of state.

'use client';
import { useState, useEffect } from 'react';
import CardioCard from './CardioCard';

const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

export interface CardioProps {
	title: string;
	pages: number;
	description: string;
	releaseDate: number;
}

type Books = CardioProps[];

const Cardio = () => {
	const [data, setData] = useState<Books | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(MY_DATA);
				const data = await res.json();
				setData(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const handleToggle = (releaseDate: number, buttonText: string) => {
		setIsOpen(!isOpen);
		console.log({ releaseDate, buttonText });
	};

	return data ? (
		<>
			<div>I have data! {isOpen ? 'OPEN' : 'CLOSED'}</div>
			{data.map((d, i) => (
				<CardioCard key={i} data={d} isOpen={isOpen} onToggle={handleToggle} />
			))}
		</>
	) : null;
};

export default Cardio;

// 'use client';
// import { useState, useEffect } from 'react';
// import CardioCard from './CardioCard';

// const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

// export interface Book {
// 	title: string;
// 	pages: number;
// 	description: string;
// 	releaseDate: number;
// }

// type Books = Book[];

// const Cardio = () => {
// 	const [data, setData] = useState<Books | null>(null);
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [description, setDescription] = useState('');

// useEffect(() => {
// 	const fetchData = async () => {
// 		try {
// 			const res = await fetch(MY_DATA);
// 			const data = await res.json();
// 			setData(data);
// 		} catch (error) {
// 			console.log('There has been an error', error);
// 		}
// 	};
// 	fetchData();
// }, []);

// 	// console.log(data);

// 	// const handleToggle = () => {
// 	// 	setIsOpen(!isOpen);
// 	// };
// 	const handleToggle = (description: string, releaseDate: number, buttonText: string) => {
// 		console.log({ description, releaseDate, buttonText });
// 		setIsOpen(!isOpen);
// 		setDescription(description);
// 	};

// 	return data ? (
// 		<>
// 			<div>We have data!</div>
// 			{isOpen ? (
// 				<div>
// 					<p>It is OPEN!</p>
// 					<p>{description}</p>
// 				</div>
// 			) : null}
// 			{data.map((data, i) => (
// 				<div key={i}>
// 					<CardioCard data={data} onToggle={handleToggle} isOpen={isOpen} />
// 				</div>
// 			))}
// 		</>
// 	) : null;
// };

// export default Cardio;

// ANSWER

// 'use client';
// import { useEffect, useState } from 'react';
// import CardioCard from './CardioCard';

// const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

// export interface Book {
// 	title: string;
// 	pages: number;
// }

// export type Books = Book[];

// const Cardio = () => {
// 	const [data, setData] = useState<Books | null>(null);
// 	const [isOpen, setIsOpen] = useState(false);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const res = await fetch(MY_DATA);
// 				const data = await res.json();
// 				console.log(data);
// 				setData(data);
// 			} catch (error) {
// 				console.log('There is an error', error);
// 			}
// 		};
// 		fetchData();
// 	}, []);

// 	// const handleToggle = (a) => setIsOpen(!isOpen);

// 	const handleToggle = (bookTitle: string, bookDescription: string, e: any) => {
// 		console.log({ bookTitle, bookDescription, e }); // console log to see what's being pulled back up the tube.
// 		// ANALOGY ... drive through, banker behind glass (the banker is handleToggle). He gives you instructions on what he needs in the tube. He sends the tube. In the child component the tube arrives and you need to supply some cash and some coins into the tube. You send it back up with an onClick{() => onToggle(cash, coins)}. THE BANKER DOESN'T CARE how the cash got in there, he just wants the cash when it comes back up.

// 		//GET COMFORTABLE WITH PASSING INFORMATION UP AND DOWN THE TUBE!! THE INFO CAN BE ANYTHING. USE THE CONSOLE LOG TECHNIQUE FROM ABOVE TO SHOW WHAT DATA IS COMING BACK UP THE TUBE FROM THE CHILDREN.
// 	};

// 	return data ? (
// 		<>
// 			<div>We have data with {data.length} arrays</div>
// 			{isOpen ? <div>It's open!</div> : null}
// 			{data.map((d, i) => (
// 				<div key={i}>
// 					<CardioCard data={d} onToggle={handleToggle} isOpen={isOpen} />
// 				</div>
// 			))}
// 		</>
// 	) : null;
// };

// export default Cardio;
