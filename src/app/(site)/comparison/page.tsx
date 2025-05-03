import { Metadata } from 'next';
import { ComparisonContent } from './ComparisonContent';

export const metadata: Metadata = {
	title: 'Comparison Cards with CSS Grid',
	description: 'Case study of comparison cards with CSS Grid',
};

export default function ComparisonPage() {
	return <ComparisonContent />;
}
