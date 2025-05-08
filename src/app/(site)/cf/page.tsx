import { Metadata } from 'next';
import { CfContent } from './CfContent';
import CodePenLoader from '@/components/CodePen/CodePenLoader';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true,
	},
	title: 'Multi-Mode Token System and Rebrand',
	description: 'Case study of a multi-mode token system and rebrand',
};

export default function CfPage() {
	return (
		<>
			<CodePenLoader />
			<CfContent />
		</>
	);
}
