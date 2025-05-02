import { Metadata } from 'next';
import { CfContent } from './CfContent';
import CodePenLoader from '@/components/CodePen/CodePenLoader';

export const metadata: Metadata = {
	title: 'CableFinder Rebrand & Token System',
	description: 'CableFinder Rebrand & Token System',
};

export default function CfPage() {
	return (
		<>
			<CodePenLoader />
			<CfContent />
		</>
	);
}
