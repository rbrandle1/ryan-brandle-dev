import { Metadata } from 'next';
import { CodepenContent } from './CodepenContent';
import CodePenLoader from '@/components/CodePen/CodePenLoader';

export const metadata: Metadata = {
	title: 'CodePen Explorations',
	description: 'CodePen Explorations',
};

export default function CodepenPage() {
	return (
		<>
			<CodePenLoader />
			<CodepenContent />
		</>
	);
}
