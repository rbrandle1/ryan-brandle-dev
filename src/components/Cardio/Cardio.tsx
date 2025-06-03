// Practice from Tim:
// Swagger docs:  https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/#/Books/get_books

// end point for books: https://potterapi-fedeperin.vercel.app/en/books

// 1. Create a parent container that holds state
// 2. fetch the data from the /books endpoint and set the array of books to state
// 3. if data then map to child components, else return null
// 4. pass data to child
// 5. display data on child.

// 'use client';
// import { useEffect, useState } from 'react';

// const MY_DATA = 'https://jsonplaceholder.typicode.com/todos/';

// const Cardio = () => {
// 	const [data, setData] = useState(null);

// 	useEffect(() => {
// 		try {
// 			const fetchData = async () => {
// 				const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
// 				const data = await res.json();
// 				setData(data);
// 			};
// 			fetchData();
// 		} catch (error) {
// 			console.log('Error fetching data', error);
// 		}
// 	}, []);

// 	return data ? <div>There is data!</div> : null;
// };

// export default Cardio;

// 'use-client';
// import { useState, useEffect } from 'react';

// const MY_DATA = 'api';

// const Cardio = () => {
// 	const [data, setData] = useState(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const res = await fetch(MY_DATA);
// 				const data = await res.json();
// 				setData(data);
// 			} catch (error) {
// 				console.log('there has been an error fetching data', error);
// 			}
// 		};

// 		fetchData();
// 	}, []);

// 	return data ? <div>there is data</div> : null;
// };

// 'use-client';

// import { useState, useEffect } from 'react';
// const MY_DATA = 'https://jsonplaceholder.typicode.com/todos/';

// interface CardioProps {
// 	title: string;
// 	description: string;
// 	isAvailable: boolean;
// }

// type Data = CardioProps[];

// const Cardio = () => {
// 	const [data, setData] = useState<Data | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const res = await fetch(MY_DATA);
// 				const data = await res.json();
// 				setData(data);
// 			} catch (error) {
// 				console.log('there is an error', error);
// 			}
// 		};
// 		fetchData();
// 	}, []);

// return data ? (
// 	<>
// 		<div>There is data and it is {data.length}</div>
// 		{data.map((d, i) => (
// 			<div key={i}>{d.title}</div>
// 		))}
// 	</>
// ) : null;
// };

'use client';
import { useEffect, useState } from 'react';

const MY_DATA = 'https://potterapi-fedeperin.vercel.app/en/books';

interface Todo {
	title: string;
	description: string;
}

type Data = Todo[];

const Todo = () => {
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

export default Todo;
