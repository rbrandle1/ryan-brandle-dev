import { Metadata } from 'next';
import { CodepenContent } from './CodepenContent';

export const metadata: Metadata = {
	title: 'CodePen Explorations',
	description: 'CodePen Explorations',
};

export default function CodepenPage() {
	return <CodepenContent />;
}
