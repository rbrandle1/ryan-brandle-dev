'use client';
import Image from 'next/image';
import styles from './ThemePicker.module.scss';
import { useTheme } from '../ThemeProvider/ThemeProvider';

const ThemePicker = () => {
	const { theme, handleThemeChange } = useTheme();

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
						onChange={() => handleThemeChange('m')}
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
						onChange={() => handleThemeChange('c')}
					/>
				</label>
				<label htmlFor='purple-theme'>
					<span>Purple</span>
					<input
						className={styles.p}
						type='radio'
						id='purple-theme'
						name='theme'
						value='p'
						checked={theme === 'p'}
						onChange={() => handleThemeChange('p')}
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
						onChange={() => handleThemeChange('y')}
					/>
				</label>
			</div>
			<Image aria-hidden src='/droplet.svg' alt='Theme icon' width={19} height={24} />
		</fieldset>
	);
};

export default ThemePicker;
