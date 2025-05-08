import { Metadata } from 'next';
import { InspContent } from './InspContent';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Crafting the IDS',
	description: 'A case study of the IDS Design System',
};

export default function InspPage() {
	return <InspContent />;
}
