import { Metadata } from 'next';
import { FlashcardsContent } from './FlashcardsContent';

export const metadata: Metadata = {
	title: 'Accessible Flashcards for Kids',
	description: 'Case study of the Accessible Flashcards for Kids App by Ryan Brandle',
};

export default function FlashcardsPage() {
	return <FlashcardsContent />;
}
