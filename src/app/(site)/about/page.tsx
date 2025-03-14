import { Metadata } from 'next';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
	title: 'About Ryan Brandle',
	description: 'A little more about Ryan Brandle, Design Engineer',
};

export default function AboutPage() {
	return <AboutContent />;
}
