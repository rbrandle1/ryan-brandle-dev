import type { Metadata } from 'next';
import { Oswald, Source_Sans_3, Source_Serif_4 } from 'next/font/google';
import '@/styles/reset.scss';
import '@/styles/tokens/primitive.scss';
import '@/styles/tokens/semantic.scss';
import '@/styles/base.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// import { ThemeProvider } from '@/components/ThemeProvider/ThemeProvider';

// Importing the fonts
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

// Function to use the font constants, which satisfies typescript requirements.
// This function does nothing but ensures the fonts are referenced
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
			{/* <ThemeProvider> */}
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
			{/* </ThemeProvider> */}
		</html>
	);
}
