'use client';
import React, { useEffect, useState, createContext, useContext } from 'react';

interface ThemeContextType {
	theme: string;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'light',
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<string>('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') || 'light';
		setTheme(storedTheme);
		document.body.setAttribute('data-theme', storedTheme);

		return () => {
			document.body.removeAttribute('data-theme');
		};
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
		document.body.setAttribute('data-theme', newTheme);
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
