import { Metadata } from 'next';
import { CodepenContent } from './CodepenContent';
import CodePenLoader from '@/components/CodePen/CodePenLoader';

export const metadata: Metadata = {
	title: 'CodePen Explorations',
	description: 'Case study of CodePen Explorations by Ryan Brandle',
};

export default function CodepenPage() {
	return (
		<>
			<CodePenLoader />
			<CodepenContent />
		</>
	);
}
