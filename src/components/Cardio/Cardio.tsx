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

const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

interface Books {
	title: string;
	description: string;
}

type Data = Books[];

const Cardio = () => {
	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(MY_DATA);
				const data = await res.json();
				setData(data);
			} catch (error) {
				console.log('There is an error', error);
			}
		};
		fetchData();
	}, []);

	return data ? (
		<>
			<div>We have data with {data.length} arrays</div>
			{data.map((d, i) => (
				<div key={i}>{d.title}</div>
			))}
		</>
	) : null;
};

export default Cardio;
