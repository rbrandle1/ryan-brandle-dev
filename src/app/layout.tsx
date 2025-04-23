import type { Metadata } from 'next';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { Oswald, Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import '@/styles/reset.scss';
import '@/styles/tokens/primitive.scss';
import '@/styles/tokens/semantic.scss';
import '@/styles/base.scss';
import Header from '@/components/Header/Header';

// Using a dynamic import for performance reasons.
const ThemeProvider = dynamic(() => import('@/components/ThemeProvider/ThemeProvider'), {
	ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer/Footer'), {
	ssr: true,
});

// Initialize fonts
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

// Ensuring fonts are referenced for typescript requirements.
const useFonts = () => {
	return { oswald, sourceSans, sourceSerif };
};

export const metadata: Metadata = {
	title: 'Ryan Brandle',
	description: "Ryan Brandle's Portfolio",
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
				<Script src='https://cpwebassets.codepen.io/assets/embed/ei.js' strategy='lazyOnload' />
			</body>
		</html>
	);
}
