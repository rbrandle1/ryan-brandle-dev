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

// Thought process: I wanted to show the end user with their local timezone. I researched ways to do this and found that the Intl.DateTimeFormat was a good way to make consistent.
// I learned this from @webDevSimplified https://www.youtube.com/shorts/jZUHZDXmQ_A
// I also pieced together the isNaN check through researching edge cases and how to prevent them when it comes to date formats:
// https://www.geeksforgeeks.org/how-to-check-a-date-is-valid-or-not-using-javascript/

const dateFormatter = (input?: string | Date) => {
	let date: Date; // just in case a Date object is passed in like dateFormatter(new Date("2024-03-14"))

	// Handles various input types safely
	if (input instanceof Date) {
		date = input;
	} else if (typeof input === 'string') {
		date = new Date(input);
	} else {
		date = new Date(); // fallback to current time if nothing provided
	}
	// const date = input ? new Date(input) : new Date(); //added this in case needed to use the current date

	if (isNaN(date.getTime())) return 'Invalid date';

	const formatDate = new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		timeZoneName: 'short', // shows 'PST', 'EDT', etc.
	});
	const formattedDate = formatDate.format(date);

	return formattedDate;
};

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

		// const getDate = new Date();
		// const simpleDate = getDate.toLocaleDateString();
		// const dateWithTime = getDate.toLocaleString();
		// const simpleTime = getDate.toLocaleTimeString();

		// console.log(getDate.getFullYear());

		// const customDate = new Intl.DateTimeFormat('en-us', {
		// 	dateStyle: 'full',
		// 	timeStyle: 'short',
		// });
		// const formattedDate = customDate.format(getDate);

		// console.log({ simpleDate, dateWithTime, formattedDate, simpleTime });
		const time = new Date();
		// const month = time.setMonth(2);
		// console.log(month);
		// console.log(time);

		const dateString = '2024-03-14';
		// const date = new Date(dateString);
		// console.log(date);
		// Wed Mar 13 2024 18:00:00 GMT-0600 (Mountain Daylight Time)
		// OFF BY 1 DAY

		// 2. Using Date.parse()
		// const timestamp = Date.parse(dateString);
		// const dateFromTimestamp = new Date(timestamp);
		// console.log(dateFromTimestamp);
		// Wed Mar 13 2024 18:00:00 GMT-0600 (Mountain Daylight Time)
		// OFF BY 1 DAY

		// const formatDate = (input: string): string => {
		// 	const date = new Date(input);
		// 	return date.toLocaleDateString('en-US', {
		// 		year: 'numeric',
		// 		month: 'short',
		// 		day: 'numeric',
		// 	});
		// };

		// console.log(formatDate('2024-03-14'));
		// console.log(formatDate('03-14-2024'));
		// console.log(formatDate('03/14/2024'));
		// console.log(formatDate('March 14, 2024'));

		// const formatDate = (input: string): string => {
		// 	const date = new Date(input);
		// 	const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

		// 	return localDate.toLocaleDateString('en-US', {
		// 		year: 'numeric',
		// 		month: 'short',
		// 		day: 'numeric',
		// 	});
		// };

		// console.log(formatDate('2024-03-14'));
		// console.log(formatDate('03-14-2024'));
		// console.log(formatDate('03/14/2024'));
		// console.log(formatDate('March 14, 2024'));

		// const formatDate = (input: string): string => {
		// 	const date = new Date(input);

		// 	// Check for invalid date
		// 	if (isNaN(date.getTime())) {
		// 		alert('Invalid date format. Please use a valid date.');
		// 		return 'Invalid date';
		// 	}

		// 	// Display in user's local time, consistent across DST and browsers
		// 	return date.toLocaleDateString('en-US', {
		// 		year: 'numeric',
		// 		month: 'short',
		// 		day: 'numeric',
		// 	});
		// };
		// console.log(formatDate('2024-03-14'));
		// console.log(formatDate('2024-03-14ddw'));
		// console.log(formatDate('03-14-2024'));
		// console.log(formatDate('03/14/2024'));
		// console.log(formatDate('March 14, 2024'));

		console.log(dateFormatter());
		console.log(dateFormatter('2024-03-14T21:41:00Z')); // a Date object as a string
		console.log(dateFormatter('2024-03-14'));
		console.log(dateFormatter('2024-03-14ddw'));
		console.log(dateFormatter('03-14-2024'));
		console.log(dateFormatter('03/14/2024'));
		console.log(dateFormatter('March 14, 2024'));
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
