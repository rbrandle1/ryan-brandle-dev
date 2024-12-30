'use client';
import { useEffect, useState, createContext, useContext } from 'react';

interface ThemeContextType {
	theme: string;
	toggleTheme: (newTheme: 'm' | 'c' | 'y') => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'm',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<string>('m');
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') || 'm';
		setTheme(storedTheme);
		document.body.setAttribute('data-theme', storedTheme);
		setIsInitialized(true);
	}, []);

	const toggleTheme = (newTheme: 'm' | 'c' | 'y') => {
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
		document.body.setAttribute('data-theme', newTheme);
	};

	if (!isInitialized) {
		document.body.setAttribute('data-theme', 'm');
		return null;
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
