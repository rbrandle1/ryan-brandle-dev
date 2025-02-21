'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/themeTypes';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: '',
	setTheme: () => {},
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('');
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const savedTheme = (localStorage.getItem('theme') as Theme) || '';
		setTheme(savedTheme);
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme: (newTheme: Theme) => {
					setTheme(newTheme);
					if (isClient) {
						localStorage.setItem('theme', newTheme);
						document.body.setAttribute('data-theme', newTheme);
					}
				},
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
