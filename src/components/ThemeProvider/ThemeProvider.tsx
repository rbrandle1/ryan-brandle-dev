'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/themeTypes';

interface ThemeContextType {
	theme: Theme;
	handleThemeChange: (newTheme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
	theme: 'm',
	handleThemeChange: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState<Theme>('m');

	useEffect(() => {
		const storedTheme = localStorage.getItem('theme') as Theme;
		if (storedTheme) {
			setTheme(storedTheme);
			document.body.dataset.theme = storedTheme;
		}
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;

		localStorage.setItem('theme', theme);
		document.body.dataset.theme = theme;
	}, [theme, mounted]);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
	};

	if (!mounted) {
		return null;
	}

	return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
