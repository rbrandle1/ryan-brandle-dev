import { Metadata } from 'next';
import { CfContent } from './CfContent';

export const metadata: Metadata = {
	title: 'CableFinder Rebrand & Token System',
	description: 'CableFinder Rebrand & Token System',
};

export default function CfPage() {
	return <CfContent />;
}
