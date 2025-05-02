import { Metadata } from 'next';
import { BrandContent } from './BrandContent';

export const metadata: Metadata = {
	title: 'New Site, So Fresh So Clean',
	description: 'A portfolio rebrand of Ryan Brandle, Design Engineer',
};

export default function BrandPage() {
	return <BrandContent />;
}
