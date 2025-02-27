import { Metadata } from 'next';
import { SrContent } from './SrContent';

export const metadata: Metadata = {
	title: 'SchoolRunner Rebrand',
	description: 'SchoolRunner Rebrand',
};

export default function SrPage() {
	return <SrContent />;
}
