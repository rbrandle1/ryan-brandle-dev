// Practice from Tim:
// Swagger docs:  https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Books/get_books
// end point for books: https://potterapi-fedeperin.vercel.app/en/books

// 1. Create a parent container that holds state
// 2. fetch the data from the /books endpoint and set the array of books to state
// 3. if data then map to child components, else return null
// 4. pass data to child
// 5. display data on child.

'use client';
import { useEffect, useState } from 'react';
import CardioCard from './CardioCard';

const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

export interface Book {
	title: string;
	pages: number;
}

export type Books = Book[];

const Cardio = () => {
	const [data, setData] = useState<Books | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(MY_DATA);
				const data = await res.json();
				console.log(data);
				setData(data);
			} catch (error) {
				console.log('There is an error', error);
			}
		};
		fetchData();
	}, []);

	const handleToggle = () => setIsOpen(!isOpen);

	return data ? (
		<>
			<div>We have data with {data.length} arrays</div>
			{isOpen ? <div>It's open!</div> : null}
			{data.map((d, i) => (
				<div key={i}>
					<CardioCard data={d} onToggle={handleToggle} isOpen={isOpen} />
				</div>
			))}
		</>
	) : null;
};

export default Cardio;
