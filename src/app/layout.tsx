import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Oswald, Source_Sans_3, Source_Serif_4, Fira_Code } from 'next/font/google';
import '@/styles/reset.scss';
import '@/styles/tokens/primitive.scss';
import '@/styles/tokens/semantic.scss';
import '@/styles/base.scss';
import Header from '@/components/Header/Header';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

const Footer = dynamic(() => import('@/components/Footer/Footer'), {
	ssr: true,
});

const oswald = Oswald({
	weight: '700',
	subsets: ['latin'],
	display: 'swap',
});

const sourceSans = Source_Sans_3({
	weight: ['400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

const sourceSerif = Source_Serif_4({
	weight: ['400', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

const firaCode = Fira_Code({
	weight: ['500'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

const useFonts = () => {
	return { oswald, sourceSans, sourceSerif, firaCode };
};

export const metadata: Metadata = {
	title: 'Ryan Brandle',
	description: 'Portfolio of Ryan Brandle | Design Engineer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useFonts();

	return (
		<html lang='en'>
			<body>
				<ThemeProvider>
					<Header />
					<main id='main' tabIndex={-1}>
						{children}
					</main>
					<Footer />
				</ThemeProvider>
				<Script src='https://cpwebassets.codepen.io/assets/embed/ei.js' strategy='beforeInteractive' />
				<Analytics />
			</body>
		</html>
	);
}
