import type { Metadata } from 'next';
import { Oswald, Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import '@/styles/reset.scss';
import '@/styles/tokens/primitive.scss';
import '@/styles/tokens/semantic.scss';
import '@/styles/base.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';

// Initialize fonts
const oswald = Oswald({
	weight: '700',
	subsets: ['latin'],
});

const sourceSans = Source_Sans_3({
	weight: ['400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
	weight: ['400', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
});

// This function ensures the fonts are referenced for typescript requirements.
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
	// FOR BODY
	// const themeFallbackScript = `
	//   (function() {
	//     const theme = localStorage.getItem('theme') || '';
	//     document.body.setAttribute('data-theme', theme);
	//     document.body.classList.add(theme);
	//   })();
	// `;

	useFonts();

	return (
		<html lang='en'>
			{/* <head>
				<script dangerouslySetInnerHTML={{ __html: themeFallbackScript }} />
			</head> */}
			<body>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
