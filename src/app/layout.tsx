import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './styles/base.scss';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});

const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Ryan Brandle',
	description: "Ryan Brandle's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			{/* NOTE: suppressHydrationWarning is used to prevent hydration errors from browser extensions */}
			<body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
				<div>header here</div>
				{children}
				<div>footer here</div>
			</body>
		</html>
	);
}
