'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { useTheme } from '../ThemeProvider/ThemeProvider';
import styles from './ThemePicker.module.scss';

const ThemePicker = () => {
	// const { theme, toggleTheme } = useTheme();
	// update onChange to toggleTheme if using ThemeProvider
	// onChange={() => toggleTheme('y')}
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'm');

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.body.dataset.theme = theme;
	}, [theme]);

	return (
		<fieldset className={styles.themePicker}>
			<legend>Choose a theme:</legend>
			<div className={styles.options} role='radiogroup' aria-label='Select a theme'>
				<label htmlFor='magenta-theme'>
					<span>Magenta</span>
					<input
						className={styles.m}
						type='radio'
						id='magenta-theme'
						name='theme'
						value='m'
						checked={theme === 'm'}
						onChange={() => setTheme('m')}
					/>
				</label>
				<label htmlFor='cyan-theme'>
					<span>Cyan</span>
					<input
						className={styles.c}
						type='radio'
						id='cyan-theme'
						name='theme'
						value='c'
						checked={theme === 'c'}
						onChange={() => setTheme('c')}
					/>
				</label>
				<label htmlFor='yellow-theme'>
					<span>Yellow</span>
					<input
						className={styles.y}
						type='radio'
						id='yellow-theme'
						name='theme'
						value='y'
						checked={theme === 'y'}
						onChange={() => setTheme('y')}
					/>
				</label>
			</div>
			<Image aria-hidden src='/droplet.svg' alt='Theme icon' width={19} height={24} />
		</fieldset>
	);
};

export default ThemePicker;
