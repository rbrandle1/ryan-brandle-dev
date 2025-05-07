import { Metadata } from 'next';
import { ComparisonContent } from './ComparisonContent';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Comparison Cards with CSS Grid',
	description: 'Case study of comparison cards with CSS Grid',
};

export default function ComparisonPage() {
	return <ComparisonContent />;
}
