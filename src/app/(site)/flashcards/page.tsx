import { Metadata } from 'next';
import { FlashcardsContent } from './FlashcardsContent';

export const metadata: Metadata = {
	title: 'Accessible Flashcards for Kids',
	description: 'Accessible Flashcards for Kids',
};

export default function FlashcardsPage() {
	return <FlashcardsContent />;
}
