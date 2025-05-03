import { Metadata } from 'next';
import { CfContent } from './CfContent';
import CodePenLoader from '@/components/CodePen/CodePenLoader';

export const metadata: Metadata = {
	title: 'Cable Finder Rebrand & Token System',
	description: 'Case study of the Cable Finder rebrand and token system',
};

export default function CfPage() {
	return (
		<>
			<CodePenLoader />
			<CfContent />
		</>
	);
}
