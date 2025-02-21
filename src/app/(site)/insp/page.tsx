import { Metadata } from 'next';
import { InspContent } from './InspContent';

export const metadata: Metadata = {
	title: 'Creation and Growth of the Inspirato Design System',
	description: "Preparing a scalable design system for the future of Inspirato's Luxury Travel products.",
};

export default function InspPage() {
	return <InspContent />;
}
