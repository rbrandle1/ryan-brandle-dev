'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/themeTypes';

const ThemeContext = createContext<{
	theme: Theme;
	handleThemeChange: (newTheme: Theme) => void;
}>({
	theme: 'm',
	handleThemeChange: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'm');

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.dataset.theme = theme;
	}, [theme]);

	const handleThemeChange = (newTheme: Theme) => {
		setTheme(newTheme);
	};

	return <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
